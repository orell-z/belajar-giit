// --- 1. IMPORT ASSET FOTO PRODUK ---
// Pastikan nama file ini sesuai dengan foto asli yang ada di folder src/assets kamu
import produkNoir from "../assets/d7ab277ac663d3ab976b32ec316f0093.jpg"; 
import produkBloom from "../assets/a0b5ae4672b56358e1696c223acafd42.jpg";
import produkOcean from "../assets/53fb0d4d4bd34f31c37cf4c827158eb9.jpg"; 
// Kamu bisa pakai gambar yang ada atau arahkan ke asset foto parfum lainnya:
import produkGold from "../assets/5c2312f5d0719dede89184ba807398f0.jpg"; 
import produkMystic from "../assets/7a0743db1d289f7f52dbbc47414c8df3.jpg";
import produkRouge from "../assets/15d40afc2593733f6c5acc1be13dd745.jpg";
import produkBreeze from "../assets/dde3bca8dc81117742725d475ebb581b.jpg";
import produkZenith from "../assets/073911fbcbf71e6bbeb80dfa44fe1ec8.jpg";
import produkTwilight from "../assets/be0fd3e22223ca26284058922dfcf750.jpg";
import produkEssence from "../assets/887a308efc0e0bc808c7fee2e44f7ee1.jpg"


export const productData = [
  { 
    id: "p1", 
    nama: "Velora Noir", 
    deskripsi: "Aroma woody dan musk yang elegan, sangat cocok untuk acara malam hari.", 
    harga: "Rp 199.000",
    img: produkNoir,
    type: "product"
  },
  { 
    id: "p2", 
    nama: "Velora Bloom", 
    deskripsi: "Sentuhan floral segar dan feminin yang memikat serta bertahan sepanjang hari.", 
    harga: "Rp 179.000",
    img: produkBloom,
    type: "product"
  },
  { 
    id: "p3", 
    nama: "Velora Ocean", 
    deskripsi: "Kesegaran fresh aquatic untuk menunjang aktivitas harian yang dinamis.", 
    harga: "Rp 189.000",
    img: produkOcean,
    type: "product"
  },
  { 
    id: "p4", 
    nama: "Velora Gold", 
    deskripsi: "Aroma manis vanila dan amber premium yang memberikan kesan mewah dan glamor.", 
    harga: "Rp 249.000",
    img: produkGold,
    type: "product"
  },
  { 
    id: "p5", 
    nama: "Velora Mystic", 
    deskripsi: "Perpaduan rempah oud eksotis dan kopi murni yang penuh misteri.", 
    harga: "Rp 219.000",
    img: produkMystic,
    type: "product"
  },
  { 
    id: "p6", 
    nama: "Velora Rouge", 
    deskripsi: "Aroma manis saffron dan jasmine dengan sensasi elegan berkelas.", 
    harga: "Rp 259.000",
    img: produkRouge,
    type: "product"
  },
  { 
    id: "p7", 
    nama: "Velora Breeze", 
    deskripsi: "Sensasi angin laut yang bersih dipadu dengan perasan jeruk bergamot segar.", 
    harga: "Rp 169.000",
    img: produkBreeze,
    type: "product"
  },
  { 
    id: "p8", 
    nama: "Velora Zenith", 
    deskripsi: "Kombinasi maskulin mint dingin dan cedarwood untuk pria petualang.", 
    harga: "Rp 195.000",
    img: produkZenith, // Sementara memakai asset yang ada
    type: "product"
  },
  { 
    id: "p9", 
    nama: "Velora Twilight", 
    deskripsi: "Kehangatan lavender sore hari bercampur dengan manisnya madu alami.", 
    harga: "Rp 185.000",
    img: produkTwilight, // Sementara memakai asset yang ada
    type: "product"
  },
  { 
    id: "p10", 
    nama: "Velora Essence", 
    deskripsi: "Ekstrak teh hijau murni dan white musk yang menenangkan jiwa.", 
    harga: "Rp 159.000",
    img: produkEssence, // Sementara memakai asset yang ada
    type: "product"
  }
];