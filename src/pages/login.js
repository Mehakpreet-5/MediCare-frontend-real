

import { useForm } from "react-hook-form";
import { useState } from "react";
import style from '../app/globals.css';
import { useRouter } from "next/router";
import Image from "next/image";
import tool from '../app/assests/dr.png';
import Link from "next/link";

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginMessage, setLoginMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      
      const response = await fetch('https://medicare-backend-ve06.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setLoginMessage("Login successful!");
        
        // Store user data in localStorage
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-row  items-center h-screen bg-gradient-to-r from-cyan-100 to-white">
      <div className="lg:ml-96 lg:w-1/4 lg:h-3/5   ml-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-transparent p-8 px-16  pt-14 rounded-lg shadow-lg shadow-slate-500 w-96 lg:w-full lg:h-full transition-transform transform hover:scale-105"
        >
          <h2 className="text-4xl lg:text-5xl  font-serif mb-10 text-center text-gray-700">Login</h2>

          {/* Display login message */}
          {loginMessage && <p className="text-center mb-4 text-red-500">{loginMessage}</p>}

          <div className="mb-6 mt-16">
            <label htmlFor="email" className="block mb-2 lg:text-2xl text-gray-600 font-medium">
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
              className={`border-2 p-2 lg:h-14 w-full rounded-lg transition duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 lg:text-2xl text-gray-600 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className={`border-2 lg:h-14  p-2 w-full rounded-lg transition duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-400 mt-0 lg:text-xl lg:font-medium lg:h-11 text-white py-2 px-4 rounded-lg w-full transition duration-300 transform hover:bg-blue-500 hover:scale-105"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="mt-4 lg:text-xl  text-center text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
      
      <div>
        <Image src={tool} className="lg:h-4/5 h-96 w-full lg:ml-48" alt="Login Image" />
      </div>
    </div>
  );
};

export default LoginForm;