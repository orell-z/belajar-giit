import React from "react";

// --- 1. IMPORT LOGO BRAND (Sudah Benar) ---
import logoChanel from "../assets/41b42b1597ce43684b66fab1781417ac.jpg";
import logoDior from "../assets/c53ca6ea676512dc1ac8fcc3eadf4bfe.jpg";
import logoCreed from "../assets/054ea8e274c5206578d5088f31c6e444.jpg";
import logoTomFord from "../assets/b9e4abc66f614ef86529c48afc13a4f4.jpg";

// --- 2. IMPORT GAMBAR PRODUK BARU ---
// SILAKAN GANTI nama file di bawah ini sesuai nama file foto produk asli di folder assets kamu!
import produkDiorSauvage from "../assets/d7ab277ac663d3ab976b32ec316f0093.jpg"; 
import produkBleuChanel from "../assets/a0b5ae4672b56358e1696c223acafd42.jpg";
import produkCreedAventus from "../assets/53fb0d4d4bd34f31c37cf4c827158eb9.jpg"; 

const card_beranda = ({ nama, deskripsi, type, id }) => {

    // --- RENDER UNTUK LOGO BRAND ---
    if (type === "brand") {
      return (
        <article className="w-full h-32 bg-white border border-zinc-850 rounded-xl shadow-sm hover:border-zinc-700 transition flex items-center justify-center p-2 overflow-hidden">
          {nama === "Chanel" && <img src={logoChanel} alt="Chanel" className="w-full h-full object-contain" />}
          {nama === "Dior" && <img src={logoDior} alt="Dior" className="w-full h-full object-contain" />}
          {nama === "Creed" && <img src={logoCreed} alt="Creed" className="w-full h-full object-contain" />}
          {nama === "Tom Ford" && <img src={logoTomFord} alt="Tom Ford" className="w-full h-full object-contain" />}
        </article>
      );
    }

    // --- RENDER UNTUK FITUR / KEUNGGULAN ---
    if (type === "feature") {
      return (
        <span className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg text-gray-200 text-sm font-medium">
          {nama}
        </span>
      );
    }

    // --- 3. RENDER UNTUK CARD PRODUK FAVORIT ---
    return (
      <article className="bg-zinc-900 rounded-xl w-60 min-h-80 border border-zinc-800 shadow-md flex flex-col justify-between hover:border-zinc-700 transition overflow-hidden">
        
        {/* Pembungkus Foto Produk (Bagian Atas Card) */}
        <div className="w-full h-40 bg-zinc-800 flex items-center justify-center overflow-hidden">
          {nama === "Dior Sauvage" && <img src={produkDiorSauvage} alt="Dior Sauvage" className="w-full h-full object-cover" />}
          {nama === "Bleu de Chanel" && <img src={produkBleuChanel} alt="Bleu de Chanel" className="w-full h-full object-cover" />}
          {nama === "Creed Aventus" && <img src={produkCreedAventus} alt="Creed Aventus" className="w-full h-full object-cover" />}
        </div>

        {/* Detail Teks (Bagian Bawah Card) */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-amber-400 text-lg">{nama}</h4>
            <p className="text-gray-300 mt-2 text-sm leading-relaxed">{deskripsi}</p>
          </div>
        </div>

      </article>
    );
};

export default card_beranda;