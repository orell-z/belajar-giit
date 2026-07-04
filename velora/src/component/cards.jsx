import React from "react";
import Cardberanda from "./card_beranda";
import { brandData, keunggulanData, productData } from "../data/BerandaData";

const Cards = () => {
  return (
    <>
      {/* 2. BRAND PILIHAN */}
      <section id="brand-section" className="py-12 px-4 md:px-8 text-left w-full">
        <h2 className="font-bold text-2xl text-amber-400 mb-6">
          Brand Parfum Pilihan
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-2">
          {brandData.map((item) => (
            <Cardberanda 
              key={item.id} 
              nama={item.nama} 
              type={item.type}  
            />
          ))}
        </div>
      </section>

      {/* 3. KEUNGGULAN KAMI */}
      <section className="py-12 px-4 md:px-8 text-left w-full">
        <h3 className="text-2xl font-bold text-amber-400 mb-6">
          Keunggulan Kami
        </h3>
        <div className="flex gap-4 flex-wrap justify-start">
          {keunggulanData.map((item) => (
            <Cardberanda
              key={item.id} 
              nama={item.nama} 
              type={item.type} 
            />
          ))}
        </div>
      </section>

      {/* 4. PRODUK FAVORIT */}
      <section className="py-12 px-4 md:px-8 text-left w-full pb-24">
        <h3 className="text-2xl font-bold text-amber-400 mb-6">
          Produk Favorit
        </h3>
        <div className="flex gap-4 flex-wrap justify-start">
          {productData.map((item) => (
            <Cardberanda
              key={item.id} 
              nama={item.nama} 
              deskripsi={item.deskripsi} 
              type={item.type} 
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Cards;