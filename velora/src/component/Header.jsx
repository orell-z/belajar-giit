import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
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

  return (
    <header className="bg-stone-950 flex items-center justify-between py-7 px-8">
      <h1 className="text-4xl font-bold text-amber-400 ">Velora</h1>
      <nav className="flex items-center gap-6">
        <Link to="/Beranda" className="text-amber-400">Beranda</Link>
        <Link to="/produk" className="text-amber-400">Produk</Link>
        <Link to="/keranjang" className="text-amber-400">Keranjang</Link>

        {/* --- TAMBAHAN BARU: Avatar & Dropdown jika user sudah login --- */}
        {user && (
          <div className="relative ml-2">
            {/* Tombol profil lingkaran (Avatar) */}
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-10 h-10 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold flex items-center justify-center transition focus:outline-none"
            >
              {user.name ? user.name.split(' ').map(n => n[0]).join('') : 'U'}
            </button>

            {/* Kotak pilihan menu melayang (Dropdown) */}
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
        {/* ------------------------------------------------------------- */}
      </nav>
    </header>
  );
};

export default Header;