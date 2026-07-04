import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// REVISI 1: Menerima props cartItems, showPopup, dan setShowPopup dari App.jsx
const Header = ({ cartItems = [], showPopup, setShowPopup }) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Mengambil data user yang disimpan saat login berhasil
  useEffect(() => {
    const savedUser = localStorage.getItem("velora_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Fungsi untuk membersihkan token dan keluar ke halaman login
  const handleLogout = () => {
    localStorage.removeItem("velora_token");
    localStorage.removeItem("velora_user");
    navigate("/");
  };

  // REVISI 2: Hitung total kuantitas barang secara dinamis dari array cartItems
  const totalItem = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    // Menambahkan class 'sticky top-0 z-50' agar navbar tidak tenggelam saat di-scroll
    <header className="bg-stone-950 flex items-center justify-between py-7 px-8 sticky top-0 z-50">
      <h1 className="text-4xl font-bold text-amber-400 ">Velora</h1>
      <nav className="flex items-center gap-6">
        <Link to="/Beranda" className="text-amber-400">Beranda</Link>
        <Link to="/produk" className="text-amber-400">Produk</Link>
        
        {/* REVISI 3: Pembungkus rute Keranjang + Bulatan Merah + Pop-up Melayang */}
        <div className="relative">
          <Link to="/keranjang" className="text-amber-400 flex items-center gap-1.5 font-medium">
            Keranjang
            {/* Bulatan Merah Indikator Angka */}
            {totalItem > 0 && (
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-bounce">
                {totalItem}
              </span>
            )}
          </Link>

          {/* REVISI 4: Pop-up Notifikasi Melayang saat klik tombol Keranjang Kecil di Produk */}
          {showPopup && (
            <div className="absolute right-0 mt-3 w-64 bg-stone-900 border border-amber-400/30 rounded-xl p-4 shadow-2xl text-sm z-50 animate-fade-in">
              <div className="flex items-center gap-2 text-green-400 font-semibold mb-1">
                <span>🛒</span> Berhasil Ditambahkan!
              </div>
              <p className="text-stone-400 text-xs">Produk pilihanmu sudah masuk ke keranjang.</p>
              <Link 
                to="/keranjang" 
                onClick={() => setShowPopup(false)} // Tutup pop-up jika diklik
                className="block text-center bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold py-1.5 rounded-lg mt-3 transition text-xs"
              >
                Lihat Keranjang
              </Link>
            </div>
          )}
        </div>

        {/* --- Avatar & Dropdown jika user sudah login --- */}
        {user && (
          <div className="relative ml-2">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-10 h-10 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold flex items-center justify-center transition focus:outline-none"
            >
              {user.name ? user.name.split(' ').map(n => n[0]).join('') : 'U'}
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-stone-900 border border-stone-800 rounded-lg shadow-xl py-2 text-left z-50">
                <div className="px-4 py-2 border-b border-stone-800">
                  <p className="text-sm font-semibold text-white truncate">{user.name}</p>
                  <p className="text-xs text-stone-400 truncate">{user.email}</p>
                </div>
                <div className="px-2 pt-1">
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded transition"
                  >
                    Keluar Akun
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;