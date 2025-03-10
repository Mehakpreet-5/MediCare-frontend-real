"use client"
import Image from "next/image";

import Navbar from '../components/Navbar'
import Homepage from "../pages/HomePage";
import About from "../pages/abboutt";
import Doctor from "@/components/DoctorCard";
import Comments from "@/components/comments";
import Footer from "@/components/Footer";
import ServicePage from "@/components/service";
import App from "@/components/page-app";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FAQ from "@/components/fandq";
export default function Home() {
   // Initialize AOS
   useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    
  <div>
    <main>
      <Navbar/>
      <Homepage/>
      <About />
      <ServicePage/>
      <App/>
    <div className="">   
         <h1 className="text-5xl lg:text-6xl  font-bold text-center bg-orange-200 bg-opacity-20 pb-0 pt-40 textg font-serif">Our Doctors</h1>
         <Doctor />
    </div> 

    <FAQ/>
 <Comments/>

<Footer/>
    </main>
  </div>
  );
}
