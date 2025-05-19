import React from 'react';
import { Link } from 'react-router';
import useCartStore from '../store/cartStore'; // Import Zustand store

const Home = () => {
  // Full desserts array as you originally provided, no removals or changes here
  const desserts = [
    {
      id: 1,
      Product: 1,
      name: "Waffle with Berries",
      type: "Waffle",
      price: "$6.50",
      img: "/public/homeImg/image-waffle-desktop.jpg",
    },
    {
      id: 2,
      Product: 2,
      name: "Vanilla Bean Crème Brûlée",
      type: "Crème Brûlée",
      price: "$7.00",
      img: "/public/homeImg/image-creme-brulee-desktop.jpg",
    },
    {
      id: 3,
      Product: 3,
      name: "Macaron Mix of Five",
      type: "Macaron",
      price: "$8.00",
      img: "/public/homeImg/image-macaron-desktop.jpg",
    },
    {
      id: 4,
      Product: 4,
      name: "Classic Tiramisu",
      type: "Tiramisu",
      price: "$5.50",
      img: "/public/homeImg/image-tiramisu-desktop.jpg",
    },
    {
      id: 5,
      Product: 5,
      name: "Pistachio Baklava",
      type: "Baklava",
      price: "$4.00",
      img: "/public/homeImg/image-baklava-desktop.jpg",
    },
    {
      id: 6,
      Product: 6,
      name: "Lemon Meringue Pie",
      type: "Pie",
      price: "$5.00",
      img: "/public/homeImg/image-meringue-desktop.jpg",
    },
    {
      id: 7,
      Product: 7,
      name: "Red Velvet Cake",
      type: "Cake",
      price: "$4.50",
      img: "/public/homeImg/image-cake-desktop.jpg",
    },
    {
      id: 8,
      Product: 8,
      name: "Salted Caramel Brownie",
      type: "Brownie",
      price: "$5.50",
      img: "/public/homeImg/image-brownie-desktop.jpg",
    },
    {
      id: 9,
      Product: 9,
      name: "Vanilla Panna Cotta",
      type: "Panna Cotta",
      price: "$6.50",
      img: "/public/homeImg/image-panna-cotta-desktop.jpg",
    },
  ];

  // Zustand store hooks to get cart and actions
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  return (
    <div className="min-h-screen bg-[#a6a3d9] p-8 text-[#3d3d3d] font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#2f1c1c]">Desserts</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Dessert Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {desserts.map((dessert) => (
              <Link
                key={dessert.id}
                to={`/desserts/${dessert.id}`}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col justify-between p-3 h-full"
              >
                <div className="relative">
                  <img
                    src={dessert.img}
                    alt={dessert.name}
                    className="rounded-lg mb-3 w-full object-cover"
                  />
                  {/* 
                    Add to Cart button position kept exactly as your original 
                    Added onClick handler to add item to cart without changing layout 
                  */}
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // Prevent link navigation when clicking button
                      addToCart(dessert); // Add dessert to cart (increments quantity if already present)
                    }}
                    className="absolute right-3 bg-[#f8f1e8] text-[#d4492b] rounded-lg py-2 text-sm font-semibold hover:bg-[#f3e3d6]"
                  >
                    <img
                      className="inline w-10 h-5"
                      src="public/homeImg/icon-add-to-cart.svg"
                      alt="Add to Cart"
                    />
                  </button>
                </div>
                <div>
                  <h2 className="text-base font-medium leading-tight mb-1">
                    {dessert.name}
                  </h2>
                  <p className="text-sm text-gray-500 mb-1">{dessert.type}</p>
                  <p className="text-[#d4492b] font-semibold text-sm">
                    {dessert.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Cart */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-xl font-bold text-[#d4492b] mb-3 text-center">
              {/* Show total quantity of items in cart */}
              Your Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
            </h2>

            {cart.length === 0 ? (
              <div className="text-center">
                <img
                  src="/public/homeImg/illustration-empty-cart.svg"
                  alt="Empty Cart"
                  className="w-20 h-20 mx-auto"
                />
                <p className="text-gray-400 mt-2 text-sm">
                  Your added items will appear here
                </p>
              </div>
            ) : (
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-4 bg-[#fafafa] p-3 rounded-md"
                  >
                    {/* Show item image */}
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-gray-500 text-xs">{item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2 mt-1">
                        {/* Decrease quantity button */}
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-2 py-0.5 bg-gray-300 rounded text-sm hover:bg-gray-400"
                        >
                          -
                        </button>
                        {/* Show current quantity */}
                        <span className="text-sm">{item.quantity}</span>
                        {/* Increase quantity button */}
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="px-2 py-0.5 bg-gray-300 rounded text-sm hover:bg-gray-400"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {/* Remove item button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
