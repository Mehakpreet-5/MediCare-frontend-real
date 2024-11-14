"use client"
import React from 'react'
import style from '../app/globals.css'
import DoctorCard from '../components/DoctorCard'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Doctors() {
     // Initialize AOS
     useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  return (
    <div>
      <div><Navbar/></div>
      <div className='greenn h-52 ' >  
        <div data-aos="fade-down"  data-aos-delay="" data-aos-easing="ease-in-out" data-aos-duration="300">
        <h2 className='text-5xl text-center pt-16 font-serif text-orange-200'> All Doctors</h2>
        <h3 className='text-orange-200 text-center mt-3 text-base space-x-1'>
  <Link href='/' className='text-orange-200'>Home</Link>
  <span className='text-white'> / </span>
  <span className='text-orange-200'>Pages</span>
  <span className='text-white'> / </span>
  <span className='text-white'>All Doctors</span>
</h3>
</div>
      </div>
      {/* <h1 className='text-red-400'>sssssss</h1> */}
      <DoctorCard/>
      <Footer/>
    </div>
  )
}

export default Doctors
