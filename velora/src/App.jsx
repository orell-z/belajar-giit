import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './pages/login'; // pastikan huruf kecil 'login' sesuai nama filemu
import Beranda from './pages/Beranda';
import Produk from './pages/Produk';
import Keranjang from './pages/Keranjang';
import Header from './component/Header';

// 1. Pelindung halaman internal (Hanya bisa diakses jika sudah login)
const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('velora_token') === 'true';
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

// 2. Layout Bersama yang membungkus Header/Navbar
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Rute Utama: Menampilkan Halaman Login */}
        <Route path="/" element={<Login />} />

        {/* Rute Terproteksi: Harus Login dulu baru bisa diakses */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/beranda" element={<Beranda />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/keranjang" element={<Keranjang />} />
          </Route>
        </Route>

        {/* Jika user mengetik rute ngawur, otomatis diarahkan kembali ke Login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;