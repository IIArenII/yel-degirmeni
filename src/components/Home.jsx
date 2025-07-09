
import { useNavigate } from "react-router-dom";
import menuImg from "../assets/menu.jpg";
import homeImg from "../assets/home.jpg";
import React from "react";


const categories = [
  { name: "Kahvaltılar", title: "🍳 Kahvaltılar" },
  { name: "Kahveler", title: "☕ Kahveler" },
  { name: "Tatlılar", title: "🍰 Tatlılar" },
  { name: "Aburcuburlar", title: "🍔 Aburcuburlar"  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
  className="min-h-screen bg-cover bg-center relative"
  style={{
    backgroundImage: `url(${menuImg})`,
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0"></div>

  {/* Content */}
  <div className="relative z-10 p-10">
    <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
      Menü
    </h1>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
      {categories.map((cat) => (
        <div
          key={cat.name}
          onClick={() => navigate(`/kategori/${cat.name}`)}
          className="bg-white/80 text-black p-6 rounded-3xl shadow-xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          <h2 className="text-2xl font-bold tracking-wide">{cat.title}</h2>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}
