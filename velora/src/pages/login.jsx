import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  
  // 1. STATE UNTUK MODE (true = Login, false = Daftar)
  const [isLoginMode, setIsLoginMode] = useState(true);
  
  // State Input Form
  const [name, setName] = useState(''); // Tambahan untuk daftar
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // 2. FUNGSI HANDLE SUBMIT (Daftar & Login)
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!isLoginMode) {
      // === PROSES DAFTAR (REGISTER) ===
      console.log("Proses Pendaftaran Akun Baru...");
      
      const newUser = {
        name: name || 'User Velora',
        email: email,
        password: password, // Di simpan lokal untuk simulasi
        role: 'Premium Member'
      };

      // Simpan data user ke localStorage dengan key berupa email-nya
      localStorage.setItem(`user_${email}`, JSON.stringify(newUser));
      
      setSuccess('Pendaftaran berhasil! Silakan masuk menggunakan akun tersebut.');
      setIsLoginMode(true); // Otomatis pindah ke mode login setelah sukses daftar
      setPassword(''); // Reset password field demi keamanan
    } else {
      // === PROSES MASUK (LOGIN) ===
      console.log("Proses Verifikasi Login...");

      // Ambil data pendaftaran dari localStorage berdasarkan email input
      const savedUserRaw = localStorage.getItem(`user_${email}`);

      if (savedUserRaw) {
        const savedUser = JSON.parse(savedUserRaw);

        // Cocokkan password yang diinput dengan password saat daftar
        if (savedUser.password === password) {
          console.log("Login sukses! Membuat session aktif...");
          
          localStorage.setItem('velora_token', 'true');
          localStorage.setItem('velora_user', JSON.stringify({
            name: savedUser.name,
            email: savedUser.email,
            role: savedUser.role
          }));

          navigate('/beranda');
        } else {
          setError('Password yang Anda masukkan salah!');
        }
      } else {
        setError('Email belum terdaftar! Silakan klik "Daftar Akun" terlebih dahulu.');
      }
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-stone-950 px-4 overflow-hidden">
      
      {/* BACKGROUND IMAGE PARFUM WITH BLUR */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1200')`,
          filter: 'blur(8px)'
        }}
      />
      
      {/* OVERLAY GRADASI */}
      <div className="absolute inset-0 bg-gradient-to-tr from-stone-950 via-stone-950/85 to-amber-950/30" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* CARD GLASSMORPHISM */}
      <div className="w-full max-w-md p-8 space-y-6 bg-stone-900/75 border border-stone-800/80 rounded-2xl shadow-2xl backdrop-blur-md relative z-10">
        
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold tracking-wider text-amber-400">Velora</h2>
          <p className="text-stone-400 text-xs font-medium">
            {isLoginMode ? 'Masuk untuk menjelajahi koleksi parfum eksklusif' : 'Buat akun baru untuk mulai berbelanja'}
          </p>
        </div>
        
        {/* Notifikasi Error */}
        {error && (
          <div className="p-3 bg-red-950/40 border border-red-800/50 rounded-xl text-red-300 text-xs text-center font-medium">
            {error}
          </div>
        )}

        {/* Notifikasi Sukses Daftar */}
        {success && (
          <div className="p-3 bg-emerald-950/40 border border-emerald-800/50 rounded-xl text-emerald-300 text-xs text-center font-medium">
            {success}
          </div>
        )}

        {/* Form Login / Daftar */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* INPUT NAMA (Hanya muncul kalau di mode Daftar Akun) */}
          {!isLoginMode && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-amber-400/80 mb-1.5">Nama Lengkap</label>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-black/40 border border-stone-800 focus:border-amber-400 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all text-sm"
                placeholder="Masukkan Nama Lengkap Anda"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-amber-400/80 mb-1.5">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/40 border border-stone-800 focus:border-amber-400 rounded-xl px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all text-sm"
              placeholder="Masukkan Email Anda"
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
              placeholder="Masukkan Password Anda"
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-3 text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl transition-all duration-200 font-extrabold shadow-lg shadow-amber-400/10 text-sm mt-2"
          >
            {isLoginMode ? 'Masuk Sekarang' : 'Daftar Akun Baru'}
          </button>
        </form>
        
        {/* LINK SWITCHER MODAL (Pindah Form Login <-> Daftar) */}
        <p className="text-center text-xs text-stone-400">
          {isLoginMode ? "Belum punya akun?" : "Sudah punya akun?"}{' '}
          <span 
            onClick={() => {
              setIsLoginMode(!isLoginMode);
              setError('');
              setSuccess('');
            }} 
            className="text-amber-400 font-bold cursor-pointer hover:underline ml-1"
          >
            {isLoginMode ? 'Daftar Akun' : 'Masuk di Sini'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;