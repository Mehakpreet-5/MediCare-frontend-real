
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
      const response = await fetch('https://medicare-backend-ve06.onrender.com/api/signup', {
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
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-100 to-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-transparent p-4 px-11 rounded shadow-md shadow-slate-500 lg:w-1/4 lg:h-3/5 w-96 ml-0"
      >
        <h2 className="text-2xl lg:text-5xl lg:mt-5 lg:font-serif mb-6 text-center">Sign Up</h2>

        {signupSuccess && (
          <p className="text-green-500 text-center mb-4">Signup successful! Redirecting...</p>
        )}

        <div className="mb-4 mt-14">
          <label htmlFor="username" className="block mb-2 lg:text-2xl">
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
          <label htmlFor="email" className="block mb-2 lg:text-2xl">
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
          <label htmlFor="password" className="block mb-2 lg:text-2xl">
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
          className="bg-blue-500 lg:mt-2 text-white py-2 px-4 lg:text-2xl rounded w-full hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
      <div>
        <Image src={tool} className="h-96 lg:h-3/5 w-full ml-52 hidden sm:block" alt="Doctor Image" />
      </div>
    </div>
  );
};

export default SignupForm;