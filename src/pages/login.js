

// // components/LoginForm.js
// import { useForm } from "react-hook-form";
// import style from '../app/globals.css';
// import Image from "next/image";
// import tool from '../app/assests/dr.png'
// const LoginForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

// // components/LoginForm.js
// const onSubmit = async (data) => {
//   try {
//     const response = await fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     const result = await response.json();
//     if (response.ok) {
//       console.log(result);
//       // Handle successful login (e.g., store token, redirect)
//     } else {
//       console.error(result.message);
//       // Handle error (e.g., show error message)
//     }
//   } catch (error) {
//     console.error('Login failed', error);
//   }
// };


//   return (
//     <div className="flex flex-row  space-x-40 items-center h-screen bg-gradient-to-r from-cyan-100 to-white ">
        
//         <div className="lg:ml-80 ml-16">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="bg-transparent p-8 pt-14 rounded-lg shadow-lg w-96  transition-transform transform hover:scale-105"
//       >
//         <h2 className="text-4xl font-bold mb-10 text-center text-gray-700">Login</h2>

//         <div className="mb-6">
//           <label htmlFor="email" className="block mb-2 text-gray-600 font-medium">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                 message: "Email is not valid",
//               },
//             })}
//             className={`border-2 p-2 w-full rounded-lg transition duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
//               errors.email ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {errors.email && (
//             <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
//           )}
//         </div>

//         <div className="mb-6">
//           <label htmlFor="password" className="block mb-2 text-gray-600 font-medium">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             {...register("password", { required: "Password is required" })}
//             className={`border-2 p-2 w-full rounded-lg transition duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
//               errors.password ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {errors.password && (
//             <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-400 text-white py-2 px-4 rounded-lg w-full transition duration-300 transform hover:bg-blue-500 hover:scale-105"
//         >
//           Login
//         </button>

//         <p className="mt-4 text-center text-gray-600">
//           Don't have an account?{" "}
//           <a href="/signup" className="text-blue-500 hover:underline">
//             Sign up
//           </a>
//         </p>
//       </form>
//       </div>
//       <div> <Image src={tool} className="h-96 w-full" alt="sdg"/> </div>
//     </div>
//   );
// };

// export default LoginForm;


import { useForm } from "react-hook-form";
import { useState } from "react";
import style from '../app/globals.css';
import { useRouter } from "next/router";
import Image from "next/image";
import tool from '../app/assests/dr.png';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginMessage, setLoginMessage] = useState("");
  const router = useRouter();

  // Handle form submission
 const onSubmit = async (data) => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      setLoginMessage("Login successful!");
      
      // Store user data in local storage
      localStorage.setItem("user", JSON.stringify(result.user));
      
      // Redirect based on isAdmin property
      if (result.user.isAdmin) {
        router.push("/admin"); // Redirect to admin panel
      } else {
        router.push("/"); // Redirect to home page
      }
    } else {
      setLoginMessage(result.message || "Login failed. Please try again.");
    }
  } catch (error) {
    setLoginMessage("Login failed. Please check your credentials.");
  }
};

  return (
    <div className="flex flex-row space-x-40 items-center h-screen bg-gradient-to-r from-cyan-100 to-white">
      <div className="lg:ml-80 ml-16">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-transparent p-8 pt-14 rounded-lg shadow-lg w-96 transition-transform transform hover:scale-105"
        >
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-700">Login</h2>

          {/* Display login message */}
          {loginMessage && <p className="text-center mb-4 text-green-500">{loginMessage}</p>}

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-gray-600 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email is not valid",
                },
              })}
              className={`border-2 p-2 w-full rounded-lg transition duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-gray-600 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className={`border-2 p-2 w-full rounded-lg transition duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-400 text-white py-2 px-4 rounded-lg w-full transition duration-300 transform hover:bg-blue-500 hover:scale-105"
          >
            Login
          </button>

          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
      
      <div>
        <Image src={tool} className="h-96 w-full" alt="Login Image" />
      </div>
    </div>
  );
};

export default LoginForm;
