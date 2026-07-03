const Keranjang = () => {
  return (
    <div className="bg-black min-h-screen text-white">

      <nav className="flex items-center justify-between px-10 py-6">

        <div className="flex w-[70%]">
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

  </section>
<div className="fixed bottom-0 left-0 w-full bg-[#121212] border-t border-yellow-500 shadow-2xl">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

    <div className="flex items-center gap-4">
      <input
        type="checkbox"
        className="w-6 h-6 accent-yellow-500"
      />

      <span className="text-white text-2xl font-semibold">
        Semua
      </span>
    </div>

    <div className="flex items-center gap-8">

      <div className="text-right">
        <p className="text-gray-400 text-sm">
          Total
        </p>

        <h2 className="text-yellow-500 text-4xl font-bold">
          Rp0
        </h2>
      </div>

      <button
        className="
          bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-2xl px-12 py-5 rounded-2xl transition"
      >
        Checkout (0)
      </button>

    </div>

  </div>
</div>
    </div>
  );
};

export default Keranjang;