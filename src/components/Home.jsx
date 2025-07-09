// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import React from "react";


const categories = [
  { name: "breakfasts", title: "🍳 Breakfasts" },
  { name: "coffees", title: "☕ Coffees" },
  { name: "desserts", title: "🍰 Desserts" },
  { name: "fastfoods", title: "🍔 Fast Foods"  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        🍽️ Explore Our Menu
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => navigate(`/category/${cat.name}`)}
            className={`bg-gradient-to-br text-black p-6 rounded-3xl shadow-xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300`}
          >
            <h2 className="text-2xl font-bold tracking-wide">{cat.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
