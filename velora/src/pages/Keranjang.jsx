import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Keranjang = () => {
  // 🚨 TRICK UTAMA: Langsung ambil data ter-update real-time dari App.jsx
  const { cartItems, setCartItems } = useOutletContext(); 
  const navigate = useNavigate();

  // Fungsi hapus item dari keranjang global
  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('velora_cart', JSON.stringify(updatedCart));
  };

  // Fungsi pembantu untuk mengubah String "Rp199.000" menjadi angka murni 199000
  const parseHargaKeAngka = (hargaString) => {
    if (!hargaString) return 0;
    return parseInt(hargaString.replace(/[^0-9]/g, ''), 10) || 0;
  };

  // Menghitung total harga belanjaan secara otomatis
  const totalHarga = cartItems.reduce((total, item) => {
    const angkaHarga = parseHargaKeAngka(item.harga);
    return total + (angkaHarga * (item.qty || 1)); 
  }, 0);

  // Menghitung total jumlah item (qty) yang di-checkout
  const totalQty = cartItems.reduce((total, item) => total + (item.qty || 1), 0);

  return (
    <div className="bg-black min-h-screen text-white pb-32">
      
      {/* KONDISI 1: JIKA KERANJANG KOSONG */}
      {cartItems.length === 0 ? (
        <section className="flex flex-col items-center justify-center text-center py-20">
          <div className="w-64 h-64 rounded-full bg-[#0f0f0f] border border-gray-800 flex items-center justify-center shadow-lg">
            <span className="text-8xl">🛒</span>
          </div>
          <h1 className="mt-12 text-5xl font-bold">Keranjang Belanja Anda Kosong</h1>
          <p className="mt-5 text-xl text-gray-400">Yuk pilih parfum premium favoritmu di Velora</p>
          <button 
            onClick={() => navigate('/produk')}
            className="mt-8 bg-amber-400 hover:bg-amber-300 text-black font-bold px-8 py-3 rounded-xl transition cursor-pointer"
          >
            Belanja Sekarang
          </button>
        </section>
      ) : (
        // KONDISI 2: JIKA KERANJANG ADA ISINYA (RENDER DAFTAR BARANG)
        <main className="max-w-4xl mx-auto px-6 py-12 space-y-4">
          <h2 className="text-2xl font-bold mb-6 text-amber-400">Daftar Belanjaan Anda</h2>
          
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-[#0f0f0f] border border-zinc-800 p-5 rounded-2xl gap-4">
              <div className="flex items-center gap-4">
                {/* Gambar Produk */}
                <div className="w-20 h-20 bg-zinc-800 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={item.img} alt={item.nama} className="w-full h-full object-cover" />
                </div>
                
                {/* Detail */}
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-xl text-white">{item.nama}</h3>
                    <span className="bg-amber-400/20 text-amber-400 font-extrabold text-xs px-2 py-0.5 rounded-full border border-amber-400/30">
                      {item.qty}x
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Harga Satuan: {item.harga}</p>
                </div>
              </div>

              {/* Aksi Hapus & Subtotal */}
              <div className="text-right">
                <p className="text-lg font-bold text-amber-400">
                  Rp {(parseHargaKeAngka(item.harga) * item.qty).toLocaleString('id-ID')}
                </p>
                <button 
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-xs text-red-500 hover:text-red-400 mt-2 transition cursor-pointer"
                >
                  Hapus Barang
                </button>
              </div>
            </div>
          ))}
        </main>
      )}

      {/* BAR CHECKOUT DI PALING BAWAH */}
      <div className="fixed bottom-0 left-0 w-full bg-[#121212] border-t border-amber-400/30 shadow-2xl z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
          <div className="flex items-center gap-4">
            <input type="checkbox" defaultChecked className="w-6 h-6 accent-amber-400" />
            <span className="text-white text-xl font-semibold">Semua</span>
          </div>

          <div className="flex items-center gap-8">
            <div className="text-right">
              <p className="text-gray-400 text-sm">Total Pembayaran</p>
              <h2 className="text-amber-400 text-3xl font-bold">
                Rp {totalHarga.toLocaleString('id-ID')}
              </h2>
            </div>

            <button className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-lg px-8 py-4 rounded-xl transition">
              Checkout ({totalQty})
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Keranjang;