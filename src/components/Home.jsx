import React from 'react'
import { Link } from 'react-router'

const Home = () => {
    const desserts = [
        { name: "Waffle with Berries", type: "Waffle", price: "$6.50", img: "/public/homeImg/image-waffle-desktop.jpg" },
        { name: "Vanilla Bean Crème Brûlée", type: "Crème Brûlée", price: "$7.00", img: "/public/homeImg/image-creme-brulee-desktop.jpg" },
        { name: "Macaron Mix of Five", type: "Macaron", price: "$8.00", img: "/public/homeImg/image-macaron-desktop.jpg" },
        { name: "Classic Tiramisu", type: "Tiramisu", price: "$5.50", img: "/public/homeImg/image-tiramisu-desktop.jpg" },
        { name: "Pistachio Baklava", type: "Baklava", price: "$4.00", img: "/public/homeImg/image-baklava-desktop.jpg" },
        { name: "Lemon Meringue Pie", type: "Pie", price: "$5.00", img: "/public/homeImg/image-meringue-desktop.jpg" },
        { name: "Red Velvet Cake", type: "Cake", price: "$4.50", img: "/public/homeImg/image-cake-desktop.jpg" },
        { name: "Salted Caramel Brownie", type: "Brownie", price: "$5.50", img: "/public/homeImg/image-brownie-desktop.jpg" },
        { name: "Vanilla Panna Cotta", type: "Panna Cotta", price: "$6.50", img: "/public/homeImg/image-panna-cotta-desktop.jpg" },
      ];

  return (
    <div className="min-h-screen bg-[#a6a3d9] p-8 text-[#3d3d3d] font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#2f1c1c]">Desserts</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Dessert Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {desserts.map((dessert, index) => ( //the map() method is used to iterate over an array and return a new array with the results of calling a function for each element in the array
              <div
                key={index}//it is a unique identifier
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col justify-between p-3 h-full"
              >
                <div>
                  <img
                    src={dessert.img}
                    alt={dessert.name}
                    className="rounded-lg mb-3 w-full h-36 object-cover"
                  />
                  <h2 className="text-base font-medium leading-tight mb-1">{dessert.name}</h2>
                  <p className="text-sm text-gray-500 mb-1">{dessert.type}</p>
                  <p className="text-[#d4492b] font-semibold text-sm">{dessert.price}</p>
                </div>
                <button className="mt-4 w-full bg-[#f8f1e8] text-[#d4492b] rounded-md py-2 text-sm font-semibold hover:bg-[#f3e3d6]">
                  <img className='inline mr-2' src='public/homeImg/icon-add-to-cart.svg'></img> Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Cart */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
            <h2 className="text-xl font-bold text-[#d4492b] mb-3">Your Cart (0)</h2>
            <div className="flex justify-center">
              <img
                src="/public/homeImg/illustration-empty-cart.svg"
                alt="Cake Icon"
                className="w-20 h-20"
              />
            </div>
            <p className="text-gray-400 mt-2 text-sm">Your added items will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
