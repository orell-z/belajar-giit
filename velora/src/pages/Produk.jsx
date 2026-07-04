import { useState } from 'react';
import CardProduk from "../component/CardProduk";

// 1. Data dikurangi menjadi 10 produk saja untuk efisiensi halaman
const dataProduk = [
  { id: 1, nama: "Velora Noir", deskripsi: "Aroma woody dan musk yang elegan.", harga: "Rp199.000", img: "https://images.unsplash.com/photo-1541643600914-78b084683601" },
  { id: 2, nama: "Velora Bloom", deskripsi: "Floral segar dan feminin.", harga: "Rp179.000", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f" },
  { id: 3, nama: "Velora Ocean", deskripsi: "Fresh aquatic untuk aktivitas harian.", harga: "Rp189.000", img: "https://images.unsplash.com/photo-1615634260167-c8cdede054de" },
  { id: 4, nama: "Velora Gold", deskripsi: "Vanilla dan amber premium.", harga: "Rp249.000", img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f" },
  { id: 5, nama: "Velora Mystic", deskripsi: "Sentuhan kemenyan arab dan rempah eksotis.", harga: "Rp219.000", img: "https://images.unsplash.com/photo-1547887534-11d2ee6b015a" },
  { id: 6, nama: "Velora Rouge", deskripsi: "Ekstrak berries merah yang manis dan berani.", harga: "Rp195.000", img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539" },
  { id: 7, nama: "Velora Breeze", deskripsi: "Aroma angin laut sore hari yang menenangkan.", harga: "Rp169.000", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c" },
  { id: 8, nama: "Velora Zenith", deskripsi: "Citrus segar dipadu dengan daun mint.", harga: "Rp185.000", img: "https://images.unsplash.com/photo-1557170334-a7c3d40d04c5" },
  { id: 9, nama: "Velora Dusk", deskripsi: "Kombinasi kopi hitam dan cokelat gelap.", harga: "Rp229.000", img: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d" },
  { id: 10, nama: "Velora Amber", deskripsi: "Kehangatan amber madu sepanjang hari.", harga: "Rp239.000", img: "https://images.unsplash.com/photo-1588405748373-122b2321bc31" }
];

const Produk = () => {
  // 2. State untuk fungsionalitas kolom pencarian
  const [searchQuery, setSearchQuery] = useState("");

  // 3. Memfilter produk secara real-time berdasarkan input pencarian
  const produkTerfilter = dataProduk.filter((produk) =>
    produk.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // Menambahkan pembungkus div dengan background hitam pekat dan tinggi minimal layar penuh
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            
            {/* Merender data produk secara dinamis menggunakan .map() */}
            {produkTerfilter.map((produk) => (
              <CardProduk
                key={produk.id}
                produk={produk}
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