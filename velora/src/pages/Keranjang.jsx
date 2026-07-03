const Keranjang = () => {
  return (
    <div className="bg-black min-h-screen text-white">

      <nav className="flex items-center justify-between px-10 py-6 border-b border-gray-800">

        <div className="flex w-[70%]">
          <input
            type="text"
            placeholder="Cari parfum favoritmu"
            className="w-full bg-black border border-yellow-500 rounded-l-3xl px-8 py-5 text-2xl text-white outline-none"
          />
          <button className="bg-yellow-500 text-black font-bold text-2xl px-12 rounded-r-3xl hover:bg-yellow-400 transition">
            Cari
          </button>
        </div>

      </nav>

  <section className="flex flex-col items-center justify-center text-center py-16">

    <div className="w-64 h-64 rounded-full bg-[#0f0f0f] border border-gray-800 flex items-center justify-center shadow-lg">
      <span className="text-8xl">🛒</span>
    </div>

    <h1 className="mt-12 text-6xl font-bold">
      Keranjang Belanja Anda Kosong
    </h1>

    <p className="mt-5 text-2xl text-gray-300">
      Yuk pilih parfum premium favoritmu di Velora
    </p>
    
    <button className="mt-14 bg-yellow-500 text-black font-bold text-3xl px-16 py-6 rounded-3xl hover:bg-yellow-400 transition">
          Belanja Sekarang
    </button>

  </section>
    </div>
  );
};

export default Keranjang;