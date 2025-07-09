import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import breakfastsImg from '../assets/breakfasts.jpg';
import coffeesImg from '../assets/coffees.jpg';
import dessertsImg from '../assets/desserts.jpg';
import fastfoodsImg from '../assets/fastfoods.jpg';

const Category = () => {

const menuItems = {
  Kahvaltılar: [
    {
      name: "Pankek",
      price: "₺89.90",
      description: "Akçaağaç şurubu ve tereyağı ile kabarık pankekler.",
    },
    {
      name: "Omlet",
      price: "₺67.50",
      description: "Peynir ve otlarla hazırlanmış üç yumurtalı omlet.",
    },
    {
      name: "Avokado Tost",
      price: "₺94.00",
      description: "Acı biber taneleriyle ezilmiş avokadolu ekşi mayalı tost.",
    },
  ],
  Kahveler: [
    {
      name: "Latte",
      price: "₺57.00",
      description: "Buharda ısıtılmış süt ve ince köpük katmanı ile espresso.",
    },
    {
      name: "Espresso",
      price: "₺41.00",
      description: "Sıcak servis edilen güçlü ve yoğun espresso shot.",
    },
    {
      name: "Soğuk Kahve",
      price: "₺48.00",
      description: "Buz üzerinde servis edilen soğuk demleme kahve.",
    },
  ],
  Tatlılar: [
    {
      name: "Cheesecake",
      price: "₺64.00",
      description: "Graham kraker tabanlı klasik New York tarzı cheesecake.",
    },
    {
      name: "Çikolatalı Volkanik Kek",
      price: "₺71.00",
      description: "İçi akışkan sıcak çikolatalı kek.",
    },
    {
      name: "Dondurma",
      price: "₺46.00",
      description: "İki top dondurma: vanilya, çikolata veya çilek seçenekleriyle.",
    },
  ],
  Aburcuburlar: [
    {
      name: "Burger",
      price: "₺97.50",
      description: "Peynir, marul, domates ve sosla hazırlanmış ızgara dana köftesi.",
    },
    {
      name: "Patates Kızartması",
      price: "₺38.00",
      description: "Deniz tuzu ile hazırlanmış çıtır altın kızartmalar.",
    },
    {
      name: "Tavuk Nugget",
      price: "₺68.00",
      description: "Sos eşliğinde sunulan çıtır pane kaplı tavuk parçaları.",
    },
  ],
};



const categoryBackgrounds = {
  Kahvaltılar: breakfastsImg,
  Kahveler: coffeesImg,
  Tatlılar: dessertsImg,
  Aburcuburlar: fastfoodsImg,
};

    const {categoryName} = useParams();
    const navigate = useNavigate();
    const items = menuItems[categoryName] || [];
    
  return (
  <div className="min-h-screen p-8 bg-cover bg-center"
   style={{ backgroundImage: `url(${categoryBackgrounds[categoryName]})` }}
   >
    <div className="max-w-7xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-4 py-2 rounded-lg bg-blue-900  cursor-pointer inline-flex items-center gap-2 text-white font-medium hover:text-gray-400 transition"
      >
        ← Menüye Geri Dön
      </button>

      {/* Title */}
      <h1 className="flex text-4xl font-extrabold capitalize text-white justify-center items-center mb-10">
        {categoryName}
      </h1>

      {/* Cards */}
      {items.length === 0 ? (
        <p className="text-gray-500 text-lg">No items found for this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl p-4 transition-all border border-gray-100"
            >
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h2>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {item.description}
                </p>
                <div className="text-right">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 font-medium rounded-full text-sm shadow-sm">
                    {item.price}
                </span>
                </div>
            </div>
            ))}

        </div>
      )}
    </div>
  </div>
);
}

export default Category