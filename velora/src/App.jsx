import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './pages/login'; 
import Beranda from './pages/Beranda';
import Produk from './pages/Produk';
import Keranjang from './pages/Keranjang';
import Header from './component/Header';
import Footer from './component/footer';
import Checkout from './pages/checkout';

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('velora_token') === 'true';
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

// ✅ FIX 1: Tambahkan buyNow ke dalam parameter MainLayout agar tidak hilang saat dioper ke bawah
const MainLayout = ({ cartItems, setCartItems, addToCart, buyNow, showPopup, setShowPopup }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-black text-white">
      {/* Oper data keranjang dan state pop-up ke Header */}
      <Header cartItems={cartItems} showPopup={showPopup} setShowPopup={setShowPopup} />
      <main className="flex-grow">
        {/* ✅ FIX 2: Di sini tempat Outlet context yang benar, buyNow dioper ke semua halaman anak */}
        <Outlet context={{ addToCart, buyNow, cartItems, setCartItems }} />
      </main>
      <Footer/>
    </div>
  );
};

function App() {
  // State awal langsung mengambil data localStorage agar ketika di-refresh barang tidak hilang
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem('velora_cart')) || [];
  });
  
  // State untuk mengontrol pop-up notifikasi di navbar
  const [showPopup, setShowPopup] = useState(false);

  // Fungsi Tambah ke Keranjang Biasa (Tombol 🛒)
  const addToCart = (produk) => {
    setCartItems((prevItems) => {
      const isExist = prevItems.find((item) => item.id === produk.id);
      let updatedCart;

      if (isExist) {
        updatedCart = prevItems.map((item) =>
          item.id === produk.id ? { ...item, qty: (item.qty || 1) + 1 } : item
        );
      } else {
        updatedCart = [...prevItems, { ...produk, qty: 1 }];
      }

      localStorage.setItem('velora_cart', JSON.stringify(updatedCart));
      return updatedCart;
    });

    setShowPopup(true);
  };

  // Fungsi Instant Checkout (Tombol Beli)
  const buyNow = (produk) => {
    const instantCart = [{ ...produk, qty: 1 }];
    setCartItems(instantCart);
    localStorage.setItem('velora_cart', JSON.stringify(instantCart));
  };

 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          
          <Route element={
            <MainLayout 
              cartItems={cartItems} 
              setCartItems={setCartItems}
              addToCart={addToCart}
              buyNow={buyNow}
              showPopup={showPopup} 
              setShowPopup={setShowPopup} 
            />
          }>
            <Route path="/beranda" element={<Beranda />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/keranjang" element={<Keranjang />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;