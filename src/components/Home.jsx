
import { useNavigate } from "react-router-dom";
import menuImg from "../assets//menu.jpg";
import React from "react";


const categories = [
  
  { name: "Kahveler", title: "☕ Kahveler" },
  { name: "Soğuk & Sıcak İçecekler", title: "🍵 İçecekler"  },
  { name: "Tatlılar", title: "🍰 Tatlılar" },
  { name: "Kahvaltılar", title: "🍳 Kahvaltılar" },
  { name: "Atıştırmalıklar", title: "🍔 Atıştırmalıklar"  },
  { name: "Etler", title:"🍗 Etler"},
  { name: "Salatalar", title:"🥗 Salatalar"},
  { name: "Makarnalar", title:"🍝 Makarnalar"},
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 px-4 py-10 sm:px-8 min-h-screen bg-cover bg-center"
          style={{
        backgroundImage: `url(${menuImg})`,
      }}>
  <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-8">
    Menü
  </h1>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
    {categories.map((cat) => (
      <div
        key={cat.name}
        onClick={() => navigate(`/kategori/${cat.name}`)}
        className="bg-white/80 text-black p-5 rounded-2xl shadow-md cursor-pointer hover:scale-105 hover:shadow-2xl transition-all text-center"
      >
        <h2 className="text-xl sm:text-2xl font-semibold">{cat.title}</h2>
      </div>
    ))}
  </div>
</div>


  );
}
