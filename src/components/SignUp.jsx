import React, { useState } from 'react';

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleTabClick = (isLoginTab) => {
    setIsLogin(isLoginTab);
  };

  return (
    <div className='bg-[#a6a3d9] flex items-center justify-center min-h-screen'>
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
        <div className="flex justify-center mb-6">
          <h2 id="formTitle" className="text-2xl font-bold">
            {isLogin ? 'LogIn Form' : 'SignUp Form'}
          </h2>
        </div>

        <div className="flex justify-between bg-gray-100 rounded-full p-1 mb-6">
          <button
            id="loginTab"
            className={`w-1/2 py-2 rounded-full font-medium ${isLogin ? 'text-white bg-gradient-to-r from-blue-900 to-blue-500' : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-500'}`}
            onClick={() => handleTabClick(true)}
          >
            Login
          </button>
          <button
            id="signupTab"
            className={`w-1/2 py-2 rounded-full font-medium ${!isLogin ? 'text-white bg-gradient-to-r from-blue-900 to-blue-500' : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-500'}`}
            onClick={() => handleTabClick(false)}
          >
            Signup
          </button>
        </div>

        {isLogin ? (
          <form id="loginForm" className="space-y-4">
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="password" placeholder="Password" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <a href="#" className="text-blue-500 text-sm block mb-2">Forgot password?</a>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-900 to-blue-500 text-white py-3 rounded-md font-semibold">LogIn</button>
            <p className="text-sm text-center">Not a member? <a href="#" className="text-blue-500">SignUp now</a></p>
          </form>
        ) : (
          <form id="signupForm" className="space-y-4">
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="password" placeholder="Password" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="password" placeholder="Confirm password" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="submit" className="w-full bg-gradient-to-r from-blue-900 to-blue-500 text-white py-3 rounded-md font-semibold">SignUp</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;

