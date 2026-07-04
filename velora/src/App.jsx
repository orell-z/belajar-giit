import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './pages/login'; 
import Beranda from './pages/Beranda';
import Produk from './pages/Produk';
import Keranjang from './pages/Keranjang';
import Header from './component/Header';
import Footer from './component/footer';

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('velora_token') === 'true';
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

// Layout Bersama
const MainLayout = ({ cartItems, addToCart, showPopup, setShowPopup }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-black text-white">
      {/* Oper data keranjang dan state pop-up ke Header */}
      <Header cartItems={cartItems} showPopup={showPopup} setShowPopup={setShowPopup} />
      <main className="flex-grow">
        <Outlet context={{ addToCart }} />
      </main>
      <Footer/>
    </div>
  );
};

function App() {
  // 1. Ubah state menjadi array untuk menampung list produk asli
  const [cartItems, setCartItems] = useState([]);
  // 2. State untuk mengontrol pop-up notifikasi di navbar
  const [showPopup, setShowPopup] = useState(false);

  // 3. Fungsi addToCart sekarang menerima object produk yang di-klik
  const addToCart = (produk) => {
    setCartItems((prevItems) => {
      // Cek apakah produk tersebut sudah ada di keranjang
      const isExist = prevItems.find((item) => item.id === produk.id);
      if (isExist) {
        // Jika sudah ada, tambahkan jumlahnya (qty)
        return prevItems.map((item) =>
          item.id === produk.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      // Jika belum ada, masukkan sebagai produk baru dengan qty: 1
      return [...prevItems, { ...produk, qty: 1 }];
    });

    // Pemicu pop-up muncul di navbar
    setShowPopup(true);
    // Otomatis hilangkan pop-up setelah 3 detik
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          {/* Kirim semua data ke MainLayout */}
          <Route element={
            <MainLayout 
              cartItems={cartItems} 
              addToCart={addToCart} 
              showPopup={showPopup} 
              setShowPopup={setShowPopup} 
            />
          }>
            <Route path="/beranda" element={<Beranda />} />
            <Route path="/produk" element={<Produk />} />
            {/* Kirim data cartItems langsung ke halaman Keranjang */}
            <Route path="/keranjang" element={<Keranjang cartItems={cartItems} setCartItems={setCartItems} />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;