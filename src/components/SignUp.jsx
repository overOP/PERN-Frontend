import React, { useState } from 'react';
import {useForm} from 'react-hook-form';

import { useNavigate } from 'react-router';
import Input from './Input';
import { http } from '../config/axios';

const SignUp = () => {
  //it is used to navigate between pages
  const navigate = useNavigate();
  
  const {register, handleSubmit, formState: {errors}} = useForm();

  //SignUp
const signup = async (data) => {
  try {
     // Uncomment the line below to use axios directly
    const response = await http.post('users/signUp', data);
    // const response = await axios.post(`${import.meta.env.VITE_BACKEND_API}users/signUp`, data);
    console.log(response.data);
    if (response.data.success) {
      alert('SignUp successful');
    }
    // Store the token in local storage
    const accessToken = response.data.accessToken;
    localStorage.setItem('accessToken', accessToken);
    // Store the user data in local storage
    const userData = response.data.user;
    localStorage.setItem('userData', JSON.stringify(userData));
    // Redirect to the home page
    navigate('/');
  } catch (error) {
    console.error('Error:', error);
    alert('SignUp failed');
  }
}
  // const signup = async (data) => {
  //   try {
  //     const response = await fetch('http://localhost:3000/users/signUp', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     const dataResponse = await response.json();
  //     console.log(dataResponse);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }

  //Login
  const login = async (data) => {
    try {
       // Uncomment the line below to use axios directly
      const response = await http.post('users/login', data);
      // const response = await axios.post(`${import.meta.env.VITE_BACKEND_API}users/login`, data);
      console.log(response.data);
      if (response.data.success) {
        alert('Login successful');
      }
      // Store the token in local storage
      const accessToken = response.data.accessToken;
      localStorage.setItem('accessToken', accessToken);
      // Store the user data in local storage
      const userData = response.data.user;
      localStorage.setItem('userData', JSON.stringify(userData));
      // Redirect to the home page
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      alert('Login failed');
    }
  }
  // const login = async (data) => {
  //   try {
  //     const response = await fetch('http://localhost:3000/users/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     const dataResponse = await response.json();
  //     console.log(dataResponse);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }

  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTabClick = (isLoginTab) => {
    setIsLogin(isLoginTab);
  };

  const handlePasswordVisibility = (event) => {
    setShowPassword(!showPassword);
    event.preventDefault();
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
          <form id="loginForm" className="space-y-4" onSubmit={handleSubmit((data) => login(data))}>
            <Input
              type="email"
              placeholder="Email Address"
              {...register('email', {
                required: 'Email is required',
              })}
            />
            {errors.email && <span className="text-red-500">{errors?.email.message}</span>} 
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                {...register('password')}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={handlePasswordVisibility}
              >
                {showPassword ? <img className='w-6' src="/public/eye.png" alt="Show Password" /> : <img className='w-6' src="/public/view.png" alt="Hide Password" />}
              </button>
            </div>
            <a href="#" className="text-blue-500 text-sm block mb-2">Forgot password?</a>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-900 to-blue-500 text-white py-3 rounded-md font-semibold">LogIn</button>
            <p className="text-sm text-center">Not a member? <a href="#" className="text-blue-500">SignUp now</a></p>
          </form>
        ) : (
          <form id="signupForm" className="space-y-4" onSubmit={handleSubmit((data) => signup(data))}>
          <Input
              type="email"
              placeholder="Email Address"
              {...register('email', {
                required: 'Email is required',
              })}
            />
            {errors.email && (<span className="text-red-500">{errors?.email.message}</span>)} 
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                {...register('password')}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={handlePasswordVisibility}
              >
                {showPassword ? <img className='w-6' src="/public/eye.png" alt="Show Password" /> : <img className='w-6' src="/public/view.png" alt="Hide Password" />}
              </button>
            </div>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                {...register('confirmPassword')}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={handlePasswordVisibility}
              >
                {showPassword ? <img className='w-6' src="/public/eye.png" alt="Show Password" /> : <img className='w-6' src="/public/view.png" alt="Hide Password" />}
              </button>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-900 to-blue-500 text-white py-3 rounded-md font-semibold">SignUp</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
// import React, { useState } from 'react';
// import Input from './input';

// const SignUp = () => {
//   const [email, setEmail] = useState(''); 
//   const [isLogin, setIsLogin] = useState(true); // Is the user currently on the login or signup tab?
//   const [showPassword, setShowPassword] = useState(false); // Should the password input show the password or not?

//   // Handle when the user clicks on the login or signup tab
//   const handleTabClick = (isLoginTab) => {
//     setIsLogin(isLoginTab);
//   };

//   // Handle when the user clicks on the show/hide password button
//   const handlePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   // Return the JSX for the login/signup form
//   return (
//     <div className='bg-[#a6a3d9] flex items-center justify-center min-h-screen'>
//       <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
//         <div className="flex justify-center mb-6">
//           <h2 id="formTitle" className="text-2xl font-bold">
//             {isLogin ? 'LogIn Form' : 'SignUp Form'}
//           </h2>
//         </div>

//         <div className="flex justify-between bg-gray-100 rounded-full p-1 mb-6">
//           <button
//             id="loginTab"
//             className={`w-1/2 py-2 rounded-full font-medium ${isLogin ? 'text-white bg-gradient-to-r from-blue-900 to-blue-500' : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-500'}`}
//             onClick={() => handleTabClick(true)}
//           >
//             Login
//           </button>
//           <button
//             id="signupTab"
//             className={`w-1/2 py-2 rounded-full font-medium ${!isLogin ? 'text-white bg-gradient-to-r from-blue-900 to-blue-500' : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-500'}`}
//             onClick={() => handleTabClick(false)}
//           >
//             Signup
//           </button>
//         </div>

//         {isLogin ? (
//           <form id="loginForm" className="space-y-4">
//             <Input 
//             type="email" 
//             required
//             placeholder="Email Address"
//             onChange={(event) => setEmail(event.target.value)}
//             value={email}
//             />
//             <div className="relative">
//               <Input
//                 type={showPassword ? 'text' : 'password'}
//                 required
//                 placeholder="Password"
//                 onChange={() => {}}
//                 value={""}
//               />
//               <button
//                 type="button"
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                 onClick={handlePasswordVisibility}
//               >
//                 {showPassword ? <img className='w-6' src="/public/eye.png" alt="Show Password" /> : <img className='w-6' src="/public/view.png" alt="Hide Password" />}
//               </button>
//             </div>
//             <a href="#" className="text-blue-500 text-sm block mb-2">Forgot password?</a>
//             <button type="submit" className="w-full bg-gradient-to-r from-blue-900 to-blue-500 text-white py-3 rounded-md font-semibold">LogIn</button>
//             <p className="text-sm text-center">Not a member? <a href="#" className="text-blue-500">SignUp now</a></p>
//           </form>
//         ) : (
//           <form id="signupForm" className="space-y-4">
//           <Input 
//             type="email" 
//             required
//             placeholder="Email Address"
//             onChange={() => {}}
//             value={""}  
//             />
//             <div className="relative">
//             <Input
//                 type={showPassword ? 'text' : 'password'}
//                 required
//                 placeholder="Password"
//                 onChange={() => {}}
//                 value={""}
//               />
//               <button
//                 type="button"
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                 onClick={handlePasswordVisibility}
//               >
//                 {showPassword ? <img className='w-6' src="/public/eye.png" alt="Show Password" /> : <img className='w-6' src="/public/view.png" alt="Hide Password" />}
//               </button>
//             </div>
//             <div className="relative">
//             <Input
//                 type={showPassword ? 'text' : 'password'}
//                 required
//                 placeholder="Confirm Password"
//                 onChange={() => {}}
//                 value={""}
//               />
//               <button
//                 type="button"
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                 onClick={handlePasswordVisibility}
//               >
//                 {showPassword ? <img className='w-6' src="/public/eye.png" alt="Show Password" /> : <img className='w-6' src="/public/view.png" alt="Hide Password" />}
//               </button>
//             </div>
//             <button type="submit" className="w-full bg-gradient-to-r from-blue-900 to-blue-500 text-white py-3 rounded-md font-semibold">SignUp</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignUp;


