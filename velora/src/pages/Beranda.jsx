import React from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../component/cards";
import HomeButton from "../component/HomeButton";

// 1. TAMBAHKAN IMPORT INI (Ini yang bikin halamannya putih polos tadi)
import bgBanner from "../assets/background.png"; 

const Beranda = () => {
  const navigate = useNavigate();
  return (
    <>
    <main className="bg-stone-950 min-h-screen text-white w-full">
      <section className="py-12 px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="text-left">
            <h1 className="text-3xl font-bold text-amber-400 py-1">
              Banyak Brand Premium, Satu Tempat.
            </h1>
            <p className="text-base md:text-lg text-neutral-50 leading-relaxed max-w-2xl mb-8 py-3">
              Temukan koleksi parfum original dari brand-brand terbaik dunia dengan harga terbaik untuk setiap gaya dan kepribadian.
              Velora adalah reseller parfum terpercaya yang menghadirkan berbagai pilihan aroma premium dalam satu platform yang mudah digunakan.
            </p>

            <div className="flex flex-wrap gap-4 justify-start">
              <HomeButton variant="primary" onClick={() => navigate("/Produk")}>Belanja Sekarang</HomeButton>
              <HomeButton 
                  variant="secondary" 
                  onClick={() => {
                    const element = document.getElementById("brand-section");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                Lihat Semua Brand
              </HomeButton>
            </div>
          </div>

          <div className="flex justify-center md:justify-end w-full">
            <div className="w-full max-w-md h-80 md:h-[400px] bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden flex items-center justify-center relative shadow-xl">
              {/* 2. Di sini variabel bgBanner sekarang sudah aman digunakan */}
              <img 
                src={bgBanner} 
                alt="Velora Banner" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Cards />
      
    </main>
    </>
  );
};

export default Beranda;