import React from 'react';
import { Link } from 'react-router'; 
import { useCart } from '../store/cartStore'; // Import Zustand cart store

const Home = () => {
  // List of desserts to display
  const desserts = [
    {
      id: 1,
      name: "Waffle with Berries",
      type: "Waffle",
      price: "$6.50",
      img: "/homeImg/image-waffle-desktop.jpg",
    },
    {
      id: 2,
      name: "Vanilla Bean Crème Brûlée",
      type: "Crème Brûlée",
      price: "$7.00",
      img: "/homeImg/image-creme-brulee-desktop.jpg",
    },
    {
      id: 3,
      name: "Macaron Mix of Five",
      type: "Macaron",
      price: "$8.00",
      img: "/homeImg/image-macaron-desktop.jpg",
    },
    {
      id: 4,
      name: "Classic Tiramisu",
      type: "Tiramisu",
      price: "$5.50",
      img: "/homeImg/image-tiramisu-desktop.jpg",
    },
    {
      id: 5,
      name: "Pistachio Baklava",
      type: "Baklava",
      price: "$4.00",
      img: "/homeImg/image-baklava-desktop.jpg",
    },
    {
      id: 6,
      name: "Lemon Meringue Pie",
      type: "Pie",
      price: "$5.00",
      img: "/homeImg/image-meringue-desktop.jpg",
    },
    {
      id: 7,
      name: "Red Velvet Cake",
      type: "Cake",
      price: "$4.50",
      img: "/homeImg/image-cake-desktop.jpg",
    },
    {
      id: 8,
      name: "Salted Caramel Brownie",
      type: "Brownie",
      price: "$5.50",
      img: "/homeImg/image-brownie-desktop.jpg",
    },
    {
      id: 9,
      name: "Vanilla Panna Cotta",
      type: "Panna Cotta",
      price: "$6.50",
      img: "/homeImg/image-panna-cotta-desktop.jpg",
    },
  ];
  

  // Get cart data and functions from Zustand
  const cart = useCart((state) => state.cartItem);
  const addToCart = useCart((state) => state.addToCart);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const increaseQuantity = useCart((state) => state.increaseQuantity);
  const decreaseQuantity = useCart((state) => state.decreaseQuantity);

  return (
    <div className="min-h-screen bg-[#a6a3d9] p-8 text-[#3d3d3d] font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-[#2f1c1c]">Desserts</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Dessert Cards Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {desserts.map((dessert) => (
              <Link
                key={dessert.id}
                to={`/desserts/${dessert.id}`} // Link to detail page
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col justify-between p-3 h-full"
              >
                <div className="relative">
                  <img
                    src={dessert.img}
                    alt={dessert.name}
                    className="rounded-lg mb-3 w-full object-cover"
                  />
                  {/* Add to Cart Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // Prevent link navigation
                      addToCart(dessert); // Call Zustand action
                    }}
                    className="absolute right-3 bg-[#f8f1e8] text-[#d4492b] rounded-lg py-2 text-sm font-semibold hover:bg-[#f3e3d6]"
                  >
                    <img
                      className="inline w-10 h-5"
                      src="/homeImg/icon-add-to-cart.svg"
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

          {/* Cart Sidebar */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-xl font-bold text-[#d4492b] mb-3 text-center">
              {/* Show total quantity of all items */}
              Your Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
            </h2>

            {/* Empty cart message */}
            {cart.length === 0 ? (
              <div className="text-center">
                <img
                  src="/homeImg/illustration-empty-cart.svg"
                  alt="Empty Cart"
                  className="w-20 h-20 mx-auto"
                />
                <p className="text-gray-400 mt-2 text-sm">
                  Your added items will appear here
                </p>
              </div>
            ) : (
              // List cart items
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-4 bg-[#fafafa] p-3 rounded-md"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-gray-500 text-xs">{item.price}</p>

                      {/* Quantity Buttons */}
                      <div className="flex items-center space-x-2 mt-1">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-2 py-0.5 bg-gray-300 rounded text-sm hover:bg-gray-400"
                        >
                          -
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="px-2 py-0.5 bg-gray-300 rounded text-sm hover:bg-gray-400"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {/* Remove Item */}
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
