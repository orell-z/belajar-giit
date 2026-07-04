import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  // Fungsi untuk scroll halus ke bagian brand/atas jika diklik di halaman yang sama
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/beranda");
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-zinc-900 py-12 px-4 md:px-8 w-full relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
        
        {/* KOLOM 1: TENTANG BRAND */}
        <div className="space-y-3">
          <h3 className="text-2xl font-extrabold tracking-wider text-amber-400">Velora</h3>
          <p className="text-sm text-stone-400 leading-relaxed max-w-xs">
            Reseller parfum terpercaya yang menghadirkan aroma premium original dunia untuk setiap gaya dan kepribadian Anda.
          </p>
        </div>

        {/* KOLOM 2: JELAJAHI / NAVIGASI KILAT */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => navigate("/beranda")} className="hover:text-amber-400 transition cursor-pointer">
                Beranda
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/produk")} className="hover:text-amber-400 transition cursor-pointer">
                Produk
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("brand-section")} className="hover:text-amber-400 transition cursor-pointer">
                Brand Pilihan
              </button>
            </li>
          </ul>
        </div>

        {/* KOLOM 3: HUBUNGI KAMI */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Hubungi Kami</h4>
          <p className="text-sm text-stone-400">
            Email: <span className="text-amber-400/90">support@velora.com</span>
          </p>
          <div className="flex gap-4 pt-2">
            {/* Ikon Sosial Media Simulasi */}
            <span className="text-xs font-medium border border-zinc-800 px-2.5 py-1 rounded-md bg-zinc-900/40 hover:border-amber-400/50 hover:text-amber-400 transition cursor-pointer">
              Instagram
            </span>
            <span className="text-xs font-medium border border-zinc-800 px-2.5 py-1 rounded-md bg-zinc-900/40 hover:border-amber-400/50 hover:text-amber-400 transition cursor-pointer">
              WhatsApp
            </span>
          </div>
        </div>

      </div>

      {/* GARIS PEMBATAS BAWAH */}
      <hr className="border-zinc-900 my-6" />

      {/* HAK CIPTA */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
        <p>&copy; 2026 Velora Perfume. All rights reserved.</p>
        <p className="tracking-wide">Designed for Premium Experience</p>
      </div>
    </footer>
  );
};

export default Footer;