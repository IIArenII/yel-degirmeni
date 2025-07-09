import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import breakfastsImg from '../assets/breakfasts.jpg';
import coffeesImg from '../assets/coffees.jpg';
import dessertsImg from '../assets/desserts.jpg';
import fastfoodsImg from '../assets/fastfoods.jpg';

const Category = () => {

const menuItems = {
  breakfasts: [
    {
      name: "Pancakes",
      price: "$5.99",
      description: "Fluffy pancakes with maple syrup and butter.",
    },
    {
      name: "Omelette",
      price: "$4.50",
      description: "Three-egg omelette with cheese and herbs.",
    },
    {
      name: "Avocado Toast",
      price: "$6.25",
      description: "Sourdough toast with smashed avocado and chili flakes.",
    },
  ],
  coffees: [
    {
      name: "Latte",
      price: "$3.80",
      description: "Espresso with steamed milk and a light layer of foam.",
    },
    {
      name: "Espresso",
      price: "$2.75",
      description: "Strong and bold espresso shot served hot.",
    },
    {
      name: "Iced Coffee",
      price: "$3.20",
      description: "Cold brewed coffee served over ice.",
    },
  ],
  desserts: [
    {
      name: "Cheesecake",
      price: "$4.99",
      description: "Classic New York-style cheesecake with graham cracker crust.",
    },
    {
      name: "Chocolate Lava Cake",
      price: "$5.50",
      description: "Warm chocolate cake with a gooey molten center.",
    },
    {
      name: "Ice Cream",
      price: "$3.25",
      description: "Two scoops of your choice: vanilla, chocolate, or strawberry.",
    },
  ],
  fastfoods: [
    {
      name: "Burger",
      price: "$7.50",
      description: "Grilled beef patty with cheese, lettuce, tomato, and sauce.",
    },
    {
      name: "Fries",
      price: "$2.99",
      description: "Crispy golden fries with sea salt.",
    },
    {
      name: "Chicken Nuggets",
      price: "$5.25",
      description: "Crispy breaded chicken bites with dipping sauce.",
    },
  ],
};


const categoryBackgrounds = {
  breakfasts: breakfastsImg,
  coffees: coffeesImg,
  desserts: dessertsImg,
  fastfoods: fastfoodsImg,
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
        ← Back to Menu
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