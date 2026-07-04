import React from "react";

// CARA KERJA: Tetap membongkar semua properti dalam satu baris parameter (termasuk 'id')
const CardProduk = ({ produk: { id, nama, deskripsi, harga, img }, addToCart }) => {
  return (
    <article className="bg-zinc-900 rounded-xl w-60 min-h-80 border border-zinc-800 shadow-md flex flex-col justify-between hover:border-zinc-700 transition overflow-hidden group">
      
      {/* Pembungkus Foto Produk dengan Efek Zoom Saat Hover */}
      <div className="w-full h-40 bg-zinc-800 flex items-center justify-center overflow-hidden">
        <img 
          src={img} 
          alt={nama} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Detail Konten & Tombol Aksi */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-bold text-amber-400 text-lg">{nama}</h4>
          <p className="text-gray-300 mt-2 text-sm leading-relaxed">{deskripsi}</p>
          
          <div className="mt-3">
            <span className="text-yellow-600 font-bold text-base">{harga}</span>
          </div>
        </div>

        {/* REVISI: Mengirim variabel yang sudah dibongkar sebagai objek utuh ke addToCart */}
        <div className="flex gap-2 mt-4">
          <button 
            onClick={() => addToCart({ id, nama, deskripsi, harga, img })} 
            className="flex-1 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold py-1.5 rounded-lg text-sm transition"
          >
            Beli
          </button>
          <button 
            onClick={() => addToCart({ id, nama, deskripsi, harga, img })} 
            type="button"
            className="px-2.5 border border-amber-400 text-amber-400 rounded-lg hover:bg-amber-400 hover:text-stone-950 text-sm transition flex items-center justify-center"
          >
            🛒
          </button>
        </div>
      </div>

    </article>
  );
};

export default CardProduk;