import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  
  // State untuk menampung input user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah halaman reload otomatis
    setError('');

    // LOGGER: Membantu memantau di F12 Console browser apakah fungsi ini terpanggil
    console.log("Tombol Login diklik!");
    console.log("Email yang dimasukkan:", email);
    console.log("Password yang dimasukkan:", password);

    // 2. Simulasi validasi akun Velora
    if (email === 'admin@velora.com' && password === 'rahasia123') {
      console.log("Validasi sukses! Menyimpan token ke localStorage...");
      
      // Simpan token login sederhana di localStorage
      localStorage.setItem('velora_token', 'true');
      
      // Simpan juga data profil agar bisa dibaca oleh Header.jsx
      const userData = {
        name: 'Admin Velora',
        email: 'admin@velora.com',
        role: 'Premium Member'
      };
      localStorage.setItem('velora_user', JSON.stringify(userData));

      console.log("Mengarahkan navigasi ke halaman /beranda...");
      // Pindah ke halaman beranda
      navigate('/beranda');
    } else {
      console.warn("Validasi gagal! Email atau password tidak cocok.");
      setError('Email atau password salah! (Tips: admin@velora.com / rahasia123)');
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-stone-950 px-4 overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE PARFUM DENGAN EFEK BLUR & GELAP */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1200')`,
          filter: 'blur(8px)' // Efek blur pada gambar parfum
        }}
      />
      
      {/* 2. OVERLAY GRADASI HITAM DAN AMBER (KUNING EMAS) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-stone-950 via-stone-950/85 to-amber-950/30" />

      {/* 3. EFEK GLOWING DEKORATIF DI BACKGROUND */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 4. CARD LOGIN DENGAN EFEK GLASSMORPHISM */}
      <div className="w-full max-w-md p-8 space-y-6 bg-stone-900/75 border border-stone-800/80 rounded-2xl shadow-2xl backdrop-blur-md relative z-10">
        
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold tracking-wider text-amber-400">Velora</h2>
          <p className="text-stone-400 text-xs font-medium">Masuk untuk menjelajahi koleksi parfum eksklusif</p>
        </div>
        
        {error && (
          <div className="p-3 bg-red-950/40 border border-red-800/50 rounded-xl text-red-300 text-xs text-center font-medium animate-pulse">
            {error}
          </div>
        )}

        {/* Form login */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-amber-400/80 mb-1.5">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/40 border border-stone-800 focus:border-amber-400 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all text-sm"
              placeholder="Masukan Email Anda"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-amber-400/80 mb-1.5">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/40 border border-stone-800 focus:border-amber-400 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all text-sm"
              placeholder="Masukan Password Anda"
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-3 text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl transition-all duration-200 font-extrabold shadow-lg shadow-amber-400/10 text-sm mt-2"
          >
            Masuk Sekarang
          </button>
        </form>
        
        <p className="text-center text-xs text-stone-500">
          Butuh bantuan masuk? Hubungi <span className="text-amber-400/80 cursor-pointer hover:underline">Dukungan Velora</span>
        </p>
      </div>
    </div>
  );
};

export default Login;