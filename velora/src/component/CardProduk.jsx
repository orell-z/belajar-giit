const CardProduk = ({ produk }) => {
<div 
                key={produk.id} 
                className="group bg-gray-900 border border-yellow-600 rounded-2xl overflow-hidden hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-600/20 transition-all duration-300"
              >
                <img
                  src={produk.img}
                  alt={produk.nama}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold text-white">
                    {produk.nama}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    {produk.deskripsi}
                  </p>

                  <div className="mt-4">
                    <span className="text-yellow-600 font-bold text-lg">
                      {produk.harga}
                    </span>
                  </div>

                  <div className="flex gap-2 mt-5">
                    <button className="flex-1 bg-yellow-600 text-black font-semibold py-2 rounded-lg hover:bg-yellow-700 hover:text-white transition">
                      <i className="fa-solid fa-bag-shopping mr-2"></i>
                      Beli
                    </button>

                    <button className="w-12 border border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-600 hover:text-black transition">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                  </div>
                </div>
              </div>
};