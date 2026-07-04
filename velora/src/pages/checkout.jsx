import React, { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems } = useOutletContext();
  const navigate = useNavigate();

  // State yang sudah ada sebelumnya
  const [ongkir, setOngkir] = useState(15000);
  const [selectedPayment, setSelectedPayment] = useState('');

  // 🚨 STATE BARU UNTUK VOUCHER
  const [showVoucherList, setShowVoucherList] = useState(false); // Untuk buka-tutup list voucher
  const [selectedVoucher, setSelectedVoucher] = useState(null); // Menyimpan voucher yang sedang aktif

  // Daftar Data Voucher (Kamu bisa tambah atau ubah isi list ini)
  const daftarVoucher = [
    { id: 'VOUCHER10', nama: 'Diskon New User (Rp10.000)', potongan: 10000 },
    { id: 'VELORAGANTENG', nama: 'Promo Gajian (Rp25.000)', potongan: 25000 },
    { id: 'GRATISONGKIR', nama: 'Diskon Ongkir (Rp15.000)', potongan: 15000 },
  ];

  // Fungsi pembantu mengubah "Rp350.000" menjadi angka
  const parseHargaKeAngka = (hargaString) => {
    if (!hargaString) return 0;
    return parseInt(hargaString.replace(/[^0-9]/g, ''), 10) || 0;
  };

  // Hitung subtotal produk
  const subtotalProduk = cartItems.reduce((total, item) => {
    const angkaHarga = parseHargaKeAngka(item.harga);
    return total + (angkaHarga * (item.qty || 1));
  }, 0);

  // 🚨 KONDISI DINAMIS: Potongan voucher mengikuti yang sedang dipilih user
  const diskonVoucher = subtotalProduk > 0 && selectedVoucher ? selectedVoucher.potongan : 0;
  
  // Total Pembayaran Akhir
  const totalPembayaran = subtotalProduk + (subtotalProduk > 0 ? ongkir : 0) - diskonVoucher;

  return (
    <div className="min-h-screen bg-black text-white pb-12">
      <div className="max-w-7xl mx-auto p-6">
        {/* Alamat */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6">
          <h2 className="text-yellow-500 text-2xl font-bold mb-4">📍 Alamat Pengiriman</h2>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">bahlilll ganteng</h3>
              <p className="text-gray-400">Jakarta Selatan, DKI Jakarta</p>
              <p className="text-gray-400">08*********</p>
            </div>
            <button className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-bold">Ubah</button>
          </div>
        </div>

        {/* Produk Dipesan */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6">
          <h2 className="text-yellow-500 text-2xl font-bold mb-6">🛍️ Produk Dipesan</h2>
          <div className="grid grid-cols-4 text-gray-400 mb-4 border-b border-zinc-800 pb-2">
            <div>Produk</div>
            <div>Harga</div>
            <div>Jumlah</div>
            <div>Subtotal</div>
          </div>
          {cartItems.map((item) => {
            const hargaSatuanAngka = parseHargaKeAngka(item.harga);
            return (
              <div key={item.id} className="grid grid-cols-4 items-center py-4 border-b border-zinc-800/40 last:border-none">
                <div className="flex items-center gap-4">
                  <img src={item.img} alt={item.nama} className="w-24 h-24 rounded-xl object-cover bg-zinc-800" />
                  <div>
                    <h3 className="font-semibold text-white">{item.nama}</h3>
                    <p className="text-gray-400 text-sm">{item.deskripsi || "Premium Perfume"}</p>
                  </div>
                </div>
                <div className="text-yellow-500 font-bold">{item.harga}</div>
                <div className="text-white">{item.qty || 1}</div>
                <div className="text-yellow-500 font-bold">Rp {(hargaSatuanAngka * (item.qty || 1)).toLocaleString('id-ID')}</div>
              </div>
            );
          })}
        </div>

        {/* 🎫 BAGIAN VOUCHER VELORA (SUDAH REAL-TIME) */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-yellow-500 text-2xl font-bold">🎫 Voucher Velora</h2>
              {selectedVoucher && (
                <p className="text-green-400 text-sm mt-1">✓ Voucher digunakan: <strong>{selectedVoucher.nama}</strong></p>
              )}
            </div>
            <button 
              onClick={() => setShowVoucherList(!showVoucherList)}
              className="bg-yellow-500 text-black px-5 py-3 rounded-lg font-bold cursor-pointer hover:bg-yellow-400"
            >
              {showVoucherList ? 'Tutup Pilihan' : 'Pilih Voucher'}
            </button>
          </div>

          {/* List Pilihan Voucher Tersembunyi (Akan muncul kalau tombol di atas diklik) */}
          {showVoucherList && (
            <div className="mt-4 pt-4 border-t border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-4">
              {daftarVoucher.map((vch) => {
                const isSelected = selectedVoucher?.id === vch.id;
                return (
                  <div 
                    key={vch.id}
                    onClick={() => {
                      setSelectedVoucher(isSelected ? null : vch); // Klik lagi buat batalkan voucher
                    }}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition flex flex-col justify-between ${
                      isSelected 
                        ? 'border-yellow-500 bg-yellow-500/10' 
                        : 'border-zinc-800 bg-black hover:border-zinc-700'
                    }`}
                  >
                    <div>
                      <span className="text-xs text-yellow-500 font-bold block mb-1">{vch.id}</span>
                      <h4 className="font-semibold text-white text-sm">{vch.nama}</h4>
                    </div>
                    <button className={`mt-3 py-1.5 px-3 rounded-lg text-xs font-bold text-center ${
                      isSelected ? 'bg-red-500 text-white' : 'bg-zinc-800 text-yellow-500'
                    }`}>
                      {isSelected ? 'Batalkan' : 'Gunakan'}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 🚚 Opsi Pengiriman */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6">
          <h2 className="text-yellow-500 text-2xl font-bold mb-4">🚚 Opsi Pengiriman</h2>
          <select onChange={(e) => setOngkir(parseInt(e.target.value, 10))} className="w-full bg-black border border-yellow-500 rounded-xl p-4 text-white focus:outline-none">
            <option value="15000">Reguler (2-4 Hari) - Rp15.000</option>
            <option value="30000">Express (1 Hari) - Rp30.000</option>
            <option value="40000">Same Day - Rp40.000</option>
          </select>
        </div>

        {/* 💳 Metode Pembayaran */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6">
          <h2 className="text-yellow-500 text-2xl font-bold mb-4">💳 Metode Pembayaran</h2>
          <div className="flex flex-wrap gap-4">
            {['QRIS', 'DANA', 'OVO', 'GoPay', 'BCA', 'COD'].map((method) => {
              const isActive = selectedPayment === method;
              return (
                <button
                  key={method}
                  onClick={() => setSelectedPayment(method)}
                  className={`px-5 py-3 rounded-xl font-medium transition cursor-pointer border ${
                    isActive ? 'bg-yellow-500 text-black border-yellow-500 font-bold' : 'border-yellow-500 text-yellow-500 bg-transparent'
                  }`}
                >
                  {method}
                </button>
              );
            })}
          </div>
        </div>

        {/* Total Summary */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="max-w-sm ml-auto">
            <div className="flex justify-between mb-3">
              <span>Subtotal Produk</span>
              <span>Rp {subtotalProduk.toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between mb-3">
              <span>Ongkir</span>
              <span>Rp {(subtotalProduk > 0 ? ongkir : 0).toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between mb-3">
              <span>Voucher</span>
              {/* 🔥 NOMINAL REAL-TIME VOUCHER */}
              <span className="text-red-400">-Rp {diskonVoucher.toLocaleString('id-ID')}</span>
            </div>
            <hr className="border-zinc-700 my-4" />
            <div className="flex justify-between text-3xl font-bold text-yellow-500">
              <span>Total</span>
              <span>Rp {totalPembayaran.toLocaleString('id-ID')}</span>
            </div>
            <button className="w-full mt-6 bg-yellow-500 text-black py-4 rounded-xl text-xl font-bold hover:bg-yellow-400 transition">
              Buat Pesanan
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;