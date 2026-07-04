const Checkout = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <div className="bg-black border-b-2 border-yellow-500 px-10 py-5 flex items-center gap-5">
        <h1 className="text-5xl font-bold text-yellow-500">
          Velora
        </h1>

        <span className="text-3xl font-semibold">
          Checkout
        </span>
      </div>

      <div className="max-w-7xl mx-auto p-6">

        {/* Alamat */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6">

          <h2 className="text-yellow-500 text-2xl font-bold mb-4">
            📍 Alamat Pengiriman
          </h2>

          <div className="flex justify-between items-center">

            <div>
              <h3 className="text-xl font-semibold">
                bahlilll ganteng
              </h3>

              <p className="text-gray-400">
                Jakarta Selatan, DKI Jakarta
              </p>

              <p className="text-gray-400">
                08*********
              </p>
            </div>

            <button className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-bold">
              Ubah
            </button>

          </div>

        </div>

        {/* Produk */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6">

          <h2 className="text-yellow-500 text-2xl font-bold mb-6">
            🛍 Produk Dipesan
          </h2>

          <div className="grid grid-cols-4 text-gray-400 mb-4">
            <div>Produk</div>
            <div>Harga</div>
            <div>Jumlah</div>
            <div>Subtotal</div>
          </div>

          <div className="grid grid-cols-4 items-center">

            <div className="flex items-center gap-4">

              <img
                src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=500"
                alt="Parfum"
                className="w-24 h-24 rounded-xl object-cover"
              />

              <div>
                <h3 className="font-semibold">
                  Velora Noir
                </h3>

                <p className="text-gray-400">
                  100ml Premium Perfume
                </p>
              </div>

            </div>

            <div className="text-yellow-500 font-bold">
              Rp350.000
            </div>

            <div>1</div>

            <div className="text-yellow-500 font-bold">
              Rp350.000
            </div>

          </div>

        </div>

        {/* Voucher */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6 flex justify-between items-center">

          <h2 className="text-yellow-500 text-2xl font-bold">
            🎫 Voucher Velora
          </h2>

          <button className="bg-yellow-500 text-black px-5 py-3 rounded-lg font-bold">
            Pilih Voucher
          </button>

        </div>

        {/* Pengiriman */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6">

          <h2 className="text-yellow-500 text-2xl font-bold mb-4">
            🚚 Opsi Pengiriman
          </h2>

          <select className="w-full bg-black border border-yellow-500 rounded-xl p-4">
            <option>Reguler (2-4 Hari) - Rp15.000</option>
            <option>Express (1 Hari) - Rp30.000</option>
            <option>Same Day - Rp40.000</option>
          </select>

        </div>

        {/* Pembayaran */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6">

          <h2 className="text-yellow-500 text-2xl font-bold mb-4">
            💳 Metode Pembayaran
          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="border border-yellow-500 px-5 py-3 rounded-xl">
              QRIS
            </button>

            <button className="border border-yellow-500 px-5 py-3 rounded-xl">
              DANA
            </button>

            <button className="border border-yellow-500 px-5 py-3 rounded-xl">
              OVO
            </button>

            <button className="border border-yellow-500 px-5 py-3 rounded-xl">
              GoPay
            </button>

            <button className="border border-yellow-500 px-5 py-3 rounded-xl">
              BCA
            </button>

            <button className="border border-yellow-500 px-5 py-3 rounded-xl">
              COD
            </button>

          </div>

        </div>

        {/* Total */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

          <div className="max-w-sm ml-auto">

            <div className="flex justify-between mb-3">
              <span>Subtotal Produk</span>
              <span>Rp350.000</span>
            </div>

            <div className="flex justify-between mb-3">
              <span>Ongkir</span>
              <span>Rp15.000</span>
            </div>

            <div className="flex justify-between mb-3">
              <span>Voucher</span>
              <span>-Rp10.000</span>
            </div>

            <hr className="border-zinc-700 my-4" />

            <div className="flex justify-between text-3xl font-bold text-yellow-500">
              <span>Total</span>
              <span>Rp355.000</span>
            </div>

            <button className="w-full mt-6 bg-yellow-500 text-black py-4 rounded-xl text-xl font-bold hover:bg-yellow-400">
              Buat Pesanan
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Checkout;