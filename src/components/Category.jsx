import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import breakfastsImg from "../assets/breakfasts.jpg";
import coffeesImg from "../assets/coffees.jpg";
import dessertsImg from "../assets/desserts.jpg";
import fastfoodsImg from "../assets/fastfoods.jpg";
import içeceklerImg from "../assets/icecekler.jpg";
import meatsImg from "../assets/meats.jpg";
import {menuItems} from "../data/menuItems.js";




const categoryBackgrounds = {
  Kahvaltılar: breakfastsImg,
  Kahveler: coffeesImg,
  Tatlılar: dessertsImg,
  Aburcuburlar: fastfoodsImg,
  "Soğuk & Sıcak İçecekler": içeceklerImg,
  Etler: meatsImg,
};

export default function Category() {
  const { categoryName, subcategoryName } = useParams();
  const navigate = useNavigate();

  const categoryData = menuItems[categoryName];
  const background = categoryBackgrounds[categoryName];

  if (!categoryData) {
    return <div className="text-white p-8">Kategori bulunamadı.</div>;
  }

  // If we're at /kategori/Kahveler — only show subcategory list
  if (!subcategoryName) {
    return (
      <div
        className="min-h-screen p-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mb-8 px-4 py-2 rounded-lg bg-blue-900 cursor-pointer inline-flex items-center gap-2 text-white font-medium hover:text-gray-400 transition"
          >
            ← Menüye Geri Dön
          </button>

          <h1 className="text-3xl sm:text-4xl font-extrabold capitalize text-white text-center mb-10">
            {categoryName}
          </h1>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.keys(categoryData).map((subCat) => (
              <div
                key={subCat}
                onClick={() =>
                  navigate(`/kategori/${categoryName}/${encodeURIComponent(subCat)}`)
                }
                className="bg-white/80 text-black p-6 rounded-2xl shadow-md cursor-pointer hover:scale-105 hover:shadow-2xl transition-all text-center"
              >
                <h2 className="text-xl font-semibold">{subCat}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // If subcategory is selected → show the items
  const items = categoryData[subcategoryName];

  if (!items) {
    return (
      <div className="text-white p-8">
        Alt kategori bulunamadı: {subcategoryName}
      </div>
    );
  }

  return (
    <div
      className="min-h-screen p-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 px-4 py-2 rounded-lg bg-blue-900 cursor-pointer inline-flex items-center gap-2 text-white font-medium hover:text-gray-400 transition"
        >
          ← Geri
        </button>

        <h1 className="text-2xl sm:text-4xl font-extrabold capitalize text-white text-center mb-10">
          {subcategoryName}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-5 transition-all border border-gray-100 text-center"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {item.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 font-medium rounded-full text-sm shadow-sm">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
