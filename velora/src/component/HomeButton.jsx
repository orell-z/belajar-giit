import React from 'react';

function HomeButton({ children, variant = 'primary', onClick }) {
  // Base style memastikan padding (px-6 py-3) dan ukuran font-nya sama persis
  const baseStyle = "px-6 py-3 rounded-md font-medium transition duration-200 inline-block text-center";
  
  const variants = {
    // Sesuai kode awal: bg-amber-400 text-black hover:bg-amber-300
    primary: "bg-amber-400 text-black hover:bg-amber-300",
    
    // Sesuai kode awal: border border-slate-300 text-amber-400 hover:bg-slate-800
    secondary: "border border-slate-300 text-amber-400 hover:bg-slate-800"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default HomeButton;