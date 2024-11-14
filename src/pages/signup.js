// // components/SignupForm.js
// import { useForm } from "react-hook-form";
// import style from '../app/globals.css';
// import Image from "next/image";
// import tool from '../app/assests/dr.png'
// const SignupForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   // components/SignupForm.js
// const onSubmit = async (data) => {
//   try {
//     const response = await fetch('/api/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     const result = await response.json();
//     if (response.ok) {
//       console.log(result);
//       // Handle successful signup (e.g., redirect to login)
//     } else {
//       console.error(result.message);
//       // Handle error (e.g., show error message)
//     }
//   } catch (error) {
//     console.error('Signup failed', error);
//   }
// };


//   return (
//     <div className="flex justify-center space-x-44 items-center h-screen bg-gradient-to-r from-cyan-100 to-white ">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="bg-transparent p-8 rounded shadow-md w-96 ml-28"
//       >
//         <h2 className="text-2xl mb-6 text-center">Sign Up</h2>

        

// <div className="mb-4">
//   <label htmlFor="username" className="block mb-2">
//     Username
//   </label>
//   <input
//     type="text"
//     id="username"
//     {...register("username", { required: "Username is required" })} // changed "name" to "username"
//     className={`border p-2 w-full rounded ${
//       errors.username ? "border-red-500" : "border-gray-300"
//     }`}
//   />
//   {errors.username && (
//     <p className="text-red-500 text-xs">{errors.username.message}</p>
//   )}
// </div>


//         <div className="mb-4">
//           <label htmlFor="email" className="block mb-2">
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
//             className={`border p-2 w-full rounded ${
//               errors.email ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {errors.email && (
//             <p className="text-red-500 text-xs">{errors.email.message}</p>
//           )}
//         </div>

//         <div className="mb-4">
//           <label htmlFor="password" className="block mb-2">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             {...register("password", { required: "Password is required" })}
//             className={`border p-2 w-full rounded ${
//               errors.password ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {errors.password && (
//             <p className="text-red-500 text-xs">{errors.password.message}</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
//         >
//           Sign Up
//         </button>
//       </form>
//       <div> <Image src={tool} className="h-96 w-full" alt="sdg"/> </div>
//     </div>
//   );
// };

// export default SignupForm;


// components/SignupForm.js
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import style from '../app/globals.css';
import Image from "next/image";
import tool from '../app/assests/dr.png';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [signupSuccess, setSignupSuccess] = useState(false); // State for success message
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        console.log(result);
        setSignupSuccess(true); // Show success message
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  useEffect(() => {
    if (signupSuccess) {
      const timer = setTimeout(() => {
        router.push('/'); // Redirect to homepage after 2 seconds
      }, 2000);
      return () => clearTimeout(timer); // Clear timeout on component unmount
    }
  }, [signupSuccess, router]);

  return (
    <div className="flex justify-center space-x-44 items-center h-screen bg-gradient-to-r from-cyan-100 to-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-transparent p-8 rounded shadow-md w-96 ml-28"
      >
        <h2 className="text-2xl mb-6 text-center">Sign Up</h2>

        {signupSuccess && (
          <p className="text-green-500 text-center mb-4">Signup successful! Redirecting...</p>
        )}

        <div className="mb-4">
          <label htmlFor="username" className="block mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username", { required: "Username is required" })}
            className={`border p-2 w-full rounded ${
              errors.username ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.username && (
            <p className="text-red-500 text-xs">{errors.username.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
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
            className={`border p-2 w-full rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
            className={`border p-2 w-full rounded ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
      <div>
        <Image src={tool} className="h-96 w-full" alt="Doctor Image" />
      </div>
    </div>
  );
};

export default SignupForm;
