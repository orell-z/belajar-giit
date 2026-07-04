import React from "react";
import CardProduk from "./CardProduk"; // 1. Impor komponen cetakan UI
import { productData } from "../data/dataProduk"; // 2. Impor data variabel produk dari file JS

const CardProduk2 = () => {
  return (
    <div className="bg-black min-h-screen text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-600 text-center mb-10">
          Koleksi Produk Velora
        </h2>
        
        {/* Container Grid untuk membungkus susunan Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          
          {/* 3. Looping data JS dan merender CardProduk sebanyak jumlah data */}
          {productData.map((item) => (
            <CardProduk 
              key={item.id} 
              produk={item} // Mengoper tiap objek data produk ke dalam props
            />
          ))}

        </div>
      </div>
    </div>
  );
};

export default CardProduk2;