import { useState } from 'react';
import CardProduk from "../component/CardProduk";

// FIX UTAMA: Menyesuaikan nama file data Anda yang bernama 'Produk.js'
import { productData } from "../data/Produk"; 

const Produk = () => {
  // State untuk fungsionalitas kolom pencarian
  const [searchQuery, setSearchQuery] = useState("");

  // Memfilter produk secara real-time berdasarkan input pencarian
  const produkTerfilter = productData.filter((produk) =>
    produk.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen text-white">
      
      {/* Hero & Search Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-yellow-600">
            Koleksi Parfum Velora
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Temukan aroma premium yang mencerminkan karakter dan gaya Anda.
          </p>

          <div className="max-w-xl mx-auto mt-8 relative">
            <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-yellow-600"></i>

            <input
              type="text"
              placeholder="Cari parfum..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-5 py-4 rounded-xl bg-gray-900 text-white border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 placeholder-gray-500"
            />
          </div>
        </div>
      </section>

      {/* Produk Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Wrapper Grid untuk membungkus susunan Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            
            {/* Merender data produk secara dinamis menggunakan .map() */}
            {produkTerfilter.map((item) => (
              <CardProduk
                key={item.id}
                produk={item} // Mengoper data ke komponen cetakan
              />
            ))}

          </div>

          {/* Feedback jika pencarian kosong */}
          {produkTerfilter.length === 0 && (
            <p className="text-center text-gray-500 mt-12 text-lg">
              Parfum yang Anda cari tidak ditemukan.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Produk;