

"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import Comments from '@/components/comments';
import dot from '../app/assests/35.png'; // Ensure the correct path
import style from '../app/globals.css'
import drr from '../app/assests/drGirl.png'
import drr2 from '../app/assests/Screenshot_42.png'
import pic from '../app/assests/Screenshot_43.png'
import sign from '../app/assests/sign.png'
import micro from '../app/assests/Screenshot_44.png'
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicroscope, faUserDoctor, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='bg-orange-50'>
      <div><Navbar /></div>
      <div className='greenn h-60'>
        <h2 className='text-5xl lg:text-7xl text-center pt-16 font-serif text-orange-200'>About Us</h2>
        <h3 className='text-orange-200 text-center mt-3 text-base lg:text-xl space-x-1'>
          <Link href='/' className='text-orange-200'>Home</Link>
          <span className='text-white'> / </span>
          <span className='text-orange-200'>Pages</span>
          <span className='text-white'> / </span>
          <span className='text-white'>About </span>
        </h3>

      </div>

      <div className="flex flex-col lg:flex-row space-x-24 w-full lg:h-5/6 lg:pb-20 justify-center md:ml-14">
  {/* Left Side (Text & Doctor Info) */}
  <div className="flex flex-col items-center justify-center py-10 px-4 md:ml-40 md:w-3/6" data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="700">
    <header className=" lg:text-left">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold lg:mt-10 textg">
        Caring For The Health & Well-Being Of Family.
      </h1>
      <p className="mt-6 text-md md:text-base lg:text-lg textg">
        Our family-centered approach to healthcare ensures that each member of your family receives personalized attention. We believe in building strong relationships with our patients, fostering trust.
      </p>

      {/* Doctor Details */}
      <div className="flex items-center mt-5 w-11/12">
        <Image src={pic} alt="Dr img" className="h-32 w-36 lg:h-36 lg:w-40" priority />
        <div className="ml-7">
          <h1 className="text-lg lg:text-xl font-bold">Dr. Elizabeth Foster</h1>
          <h3>Family Physician</h3>
          <hr className="border-t-1 border-orange-400 mt-2" />
          <Image src={sign} alt="sign" className="h-20 w-28 lg:w-32 mt-3" priority />
        </div>
      </div>
    </header>
  </div>

  <div className="relative mt-12 h-3/4 w-4/6 ml-96 hidden sm:block ">
          {/* Dot Image */}
          <Image src={dot} alt="Dot image" className="h-4/6 w-5/12 ml-14 mt-4 py-5" priority data-aos="zomm-in" />

          {/* Girl Image */}
          <Image src={drr} alt="Girl overlay" className="absolute top-20 ml-4 rounded-full h-96 w-52 lg:h-96 lg:w-56 " priority data-aos="zoom-in" />

          {/* Dr Image */}
          <Image src={drr2} alt="Dr overlay" className="absolute -top-4 ml-72   rounded-full h-96 w-52 lg:h-96 lg:w-56" priority data-aos="zoom-in" />
        </div>
</div>

      
      <div className='h-full greenn flex flex-col lg:flex-row pb-5  lg:space-x-10'>
        <Image src={micro} alt="Dr overlay" className=" h-56 ml-5 justify-center items-center w-80 lg:h-full lg:w-4/12 lg:px-5 md:w-2/6 lg:ml-10 md:ml-36 pt-16 lg:py-16" priority
          data-aos="zoom-in" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="700" />
        <div className='lg:mt-20 mt-5 lg:ml-7 mr-96 w-full px-3 lg:px-0 lg:w-2/6' data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="700">
          <h1 className="text-3xl md:text-5xl font-bold  lg:mt-12 text-orange-300"> Improving The Quality Of
            Your Life Through Better Health.</h1>
          <h2 className='text-gray-300 mt-5  lg:pr-10 lg:text-lg'>We offer a wide range of comprehensive healthcare services to address all aspects of your health.
            From preventive care and health screenings to specialized treatments and chronic disease management.</h2>
        </div>
        <div className="h-72 mt-52 w-72   border-t-0 border-l-0 border-r-0 hidden sm:block bg-orange-200  bg-opacity-10  rounded-t-full"></div>

      </div>


      {/* services card */}

      <div className='lg:mt-32 mt-9 mb-10'>
        <h2 className='text-orange-300 font-serif text-2xl lg:text-3xl lg:ml-80 ml-6'>Top Services</h2>
        <h1 className='textg font-serif text-4xl lg:text-5xl  ml-80 hidden sm:block'>We Are a Pogressive <br /> Medical Clinic.</h1></div>

      <div className='flex flex-col items-center space-y-3 md:flex-row lg:space-x-12 justify-center mt-10 mb-36' data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="700">
        <div className="w-72 h-60 lg:w-96 lg:h-72 lg:px-8 lg:pt-9  ml-0 md:ml-0 bg-white shadow-lg  border border-gray-300 p-6">
          <FontAwesomeIcon icon={faMicroscope} className='h-12 lg:h-16 mb-2 text-orange-300' />
          <h2 className="text-xl lg:text-2xl  font-semibold mb-4">Modern Laboratory</h2>
          <p className="text-gray-600 lg:text-lg  mb-6"> Our laboratory is equipped with the latest diagnostic equipment and automation systems, ensuring precise.  </p>
        </div>

        <div className="w-72 h-60 lg:w-96 lg:h-72 lg:px-7 lg:pt-9   bg-white shadow-lg  border border-gray-300 p-6">
          <FontAwesomeIcon icon={faRecordVinyl} className='h-12 lg:h-16 mb-2 text-orange-300' />
          <h2 className="text-xl lg:text-2xl  font-semibold mb-4">Experienced Staff</h2>
          <p className="text-gray-600 lg:text-lg mb-6">we take pride in our team of experienced Staff who are at the forefront of helping exceptional. </p>
        </div>

        <div className="w-72 h-60 lg:w-96 lg:h-72 lg:px-8 lg:pt-9  bg-white shadow-lg  border border-gray-300 p-6">
          <FontAwesomeIcon icon={faUserDoctor} className='h-12 lg:h-16 mb-2 text-orange-300' />
          <h2 className="text-xl lg:text-2xl  font-semibold mb-4">Experienced Doctors</h2>
          <p className="text-gray-600 mb-6 lg:text-lg "> Our laboratory is equipped with the latest diagnostic equipment and automation systems, ensuring precise.  </p>
        </div>

      </div>
      <div><Comments /></div>
      <Footer />
    </div>
  );
}

export default About;
