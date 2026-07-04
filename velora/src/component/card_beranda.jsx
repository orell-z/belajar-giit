import React from "react";
const Cardberanda = ({nama, deskripsi, type, id}) => {

    if (type === "brand") {
      return(
      <article className="w-full h-32 bg-zinc-900 border border-zinc-800 rounded-xl shadow-sm hover:border-zinc-700 transition flex items-center justify-center p-4">
        <span className="text-gray-400 text-sm font-medium">{nama}</span>
      </article>
      );
    }
    if (type === "feature"){
      return (
      <span className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg text-gray-200 text-sm font-medium">
        {nama}
      </span>
      );
    }

    return (
      <article className="bg-zinc-900 p-5 rounded-xl w-60 min-h-32 border border-zinc-800 shadow-md flex flex-col justify-between hover:border-zinc-700 transition">
      <div>
        <h4 className="font-bold text-amber-400 text-lg">{nama}</h4>
        <p className="text-gray-300 mt-2 text-sm leading-relaxed">{deskripsi}</p>
      </div>
    </article>
    );
};

export default Cardberanda;