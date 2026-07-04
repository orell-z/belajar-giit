// --- 1. IMPORT ASSET FOTO PRODUK ---
// Pastikan nama file ini sesuai dengan foto asli yang ada di folder src/assets kamu
import produkNoir from "../assets/d7ab277ac663d3ab976b32ec316f0093.jpg"; 
import produkBloom from "../assets/a0b5ae4672b56358e1696c223acafd42.jpg";
import produkOcean from "../assets/53fb0d4d4bd34f31c37cf4c827158eb9.jpg"; 
// Kamu bisa pakai gambar yang ada atau arahkan ke asset foto parfum lainnya:
import produkGold from "../assets/b9e4abc66f614ef86529c48afc13a4f4.jpg"; 
import produkMystic from "../assets/41b42b1597ce43684b66fab1781417ac.jpg";
import produkRouge from "../assets/c53ca6ea676512dc1ac8fcc3eadf4bfe.jpg";
import produkBreeze from "../assets/054ea8e274c5206578d5088f31c6e444.jpg";

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
    img: produkOcean, // Sementara memakai asset yang ada
    type: "product"
  },
  { 
    id: "p9", 
    nama: "Velora Twilight", 
    deskripsi: "Kehangatan lavender sore hari bercampur dengan manisnya madu alami.", 
    harga: "Rp 185.000",
    img: produkNoir, // Sementara memakai asset yang ada
    type: "product"
  },
  { 
    id: "p10", 
    nama: "Velora Essence", 
    deskripsi: "Ekstrak teh hijau murni dan white musk yang menenangkan jiwa.", 
    harga: "Rp 159.000",
    img: produkBloom, // Sementara memakai asset yang ada
    type: "product"
  }
];