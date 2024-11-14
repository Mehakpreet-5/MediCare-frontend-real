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
      <div className='greenn h-52'>
        <h2 className='text-5xl text-center pt-16 font-serif text-orange-200'>About Us</h2>
        <h3 className='text-orange-200 text-center mt-3 text-base space-x-1'>
          <Link href='/' className='text-orange-200'>Home</Link>
          <span className='text-white'> / </span>
          <span className='text-orange-200'>Pages</span>
          <span className='text-white'> / </span>
          <span className='text-white'>About </span>
        </h3>

      </div>

      <div className='flex flex-col lg:flex-row lg:h-5/6 pb-5 space-x-24 justify-center md:ml-14'>
        <div className='flex flex-col items-center justify-center py-20 px-4 md:ml-40 md:w-3/6 '
          data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="700">
          {/* Hero Section */}
          <header className="bg-center h-full ml-20  md:w-11/12 mr-14">
            <h1 className="text-4xl md:text-4xl font-bold mt-10 textg">
              Caring For The Health & Well
              Being Of Family.
            </h1>
            <p className="mt-10 text-md md:text-base textg">
              Our family-centered approach to healthcare ensures that each member of your family receives personalized attention .
              We believe in building strong relationships with our patients, fostering trust            </p>

            <div className='flex flex-row mt-5  w-11/12'>
              <div > <Image src={pic} alt="Dr img" className="h-32 w-36  " priority />  </div>
              <div className='ml-7 mt-2 '> <h1 className='text-lg font-bold'>Dr. Elizabeth Foster </h1>
                <h3>Family Physician</h3> <hr className="border-t-1 border-orange-400" />
                <Image src={sign} alt="sign" className="h-20 w-28 mt-3 ml-1" priority />
              </div>
            </div>

          </header>
        </div>

        <div className="relative mt-16 h-3/4 w-4/6 ml-96 hidden sm:block">
          {/* Dot Image */}
          <Image src={dot} alt="Dot image" className="h-4/6 w-5/12 ml-14 mt-20" priority data-aos="zomm-in" />

          {/* Girl Image */}
          <Image src={drr} alt="Girl overlay" className="absolute top-20 ml-2 rounded-full h-96 w-52 px-2 py-4" priority data-aos="zoom-in" />

          {/* Dr Image */}
          <Image src={drr2} alt="Dr overlay" className="absolute top-1 ml-60  rounded-full h-96 px-1 w-52 py-4" priority data-aos="zoom-in" />
        </div>
      </div>
      <div className='h-96 greenn flex flex-row  space-x-10'>
        <Image src={micro} alt="Dr overlay" className=" h-5/6 w-3/6 md:w-2/6 ml-3 md:ml-44 pt-16" priority
          data-aos="zoom-in" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="700" />
        <div className='mt-20 ml-7 mr-44 w-2/6' data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="700">
          <h1 className="text-3xl md:text-4xl font-bold  text-orange-300"> Improving The Quality Of
            Your Life Through Better Health.</h1>
          <h2 className='text-gray-300 mt-5 hidden sm:block'>We offer a wide range of comprehensive healthcare services to address all aspects of your health.
            From preventive care and health screenings to specialized treatments and chronic disease management.</h2>
        </div>
        <div className="h-60 mt-36 w-52 border-t-0 border-l-0 border-r-0 hidden sm:block bg-orange-200  bg-opacity-10  rounded-t-full"></div>

      </div>


      {/* services card */}

      <div className='mt-20 mb-10'>
        <h2 className='text-orange-300 font-serif text-2xl ml-72'>Top Services</h2>
        <h1 className='textg font-serif text-4xl ml-72 hidden sm:block'>We Are a Pogressive <br /> Medical Clinic.</h1></div>

      <div className='flex flex-col items-center space-y-3 md:flex-row space-x-10 justify-center mt-10 mb-20' data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="700">
        <div className="w-72 h-60 ml-10 md:ml-0 bg-white shadow-lg  border border-gray-300 p-6">
          <FontAwesomeIcon icon={faMicroscope} className='h-12 mb-2 text-orange-300' />
          <h2 className="text-xl font-semibold mb-4">Modern Laboratory</h2>
          <p className="text-gray-600 mb-6"> Our laboratory is equipped with the latest diagnostic equipment and automation systems, ensuring precise.  </p>
        </div>

        <div className="w-72 h-60 bg-white shadow-lg  border border-gray-300 p-6">
          <FontAwesomeIcon icon={faRecordVinyl} className='h-12 mb-2 text-orange-300' />
          <h2 className="text-xl font-semibold mb-4">Experienced Staff</h2>
          <p className="text-gray-600 mb-6">we take pride in our team of experienced Staff who are at the forefront of helping exceptional. </p>
        </div>

        <div className="w-72 h-60 bg-white shadow-lg  border border-gray-300 p-6">
          <FontAwesomeIcon icon={faUserDoctor} className='h-12 mb-2 text-orange-300' />
          <h2 className="text-xl font-semibold mb-4">Experienced Doctors</h2>
          <p className="text-gray-600 mb-6"> Our laboratory is equipped with the latest diagnostic equipment and automation systems, ensuring precise.  </p>
        </div>

      </div>
      <div><Comments /></div>
      <Footer />
    </div>
  );
}

export default About;


// "use client";
// import React, { useEffect } from 'react';
// import style from '../app/globals.css'
// import Navbar from '@/components/Navbar';
// import Link from 'next/link';
// import Image from 'next/image';
// import Comments from '@/components/comments';
// import dot from '../app/assests/35.png'; // Ensure the correct path
// import drr from '../app/assests/drGirl.png';
// import drr2 from '../app/assests/Screenshot_42.png';
// import pic from '../app/assests/Screenshot_43.png';
// import sign from '../app/assests/sign.png';
// import micro from '../app/assests/Screenshot_44.png';
// import Footer from '@/components/Footer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMicroscope, faUserDoctor, faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function About() {
//   // Initialize AOS
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div className='bg-orange-50'>
//       <Navbar />
//       <div className='greenn h-52'>
//         <h2 className='text-5xl text-center pt-16 font-serif text-orange-200'>About Us</h2>
//         <h3 className='text-orange-200 text-center mt-3 text-base space-x-1'>
//           <Link href='/' className='text-orange-200'>Home</Link>
//           <span className='text-white'> / </span>
//           <span className='text-orange-200'>Pages</span>
//           <span className='text-white'> / </span>
//           <span className='text-white'>About </span>
//         </h3>
//       </div>

//       <div className='flex flex-col md:ml-64 lg:flex-row lg:h-5/6 pb-5 justify-center mx-auto lg:max-w-6xl'>
//         <div className='flex flex-col items-center mr-2 justify-center py-20 px-4 w-full lg:w-3/6'
//           data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="700">
//           {/* Hero Section */}
//           <header className="bg-center h-full">
//             <h1 className="text-4xl font-bold mt-10 text-gray-800">
//               Caring For The Health & Well Being Of Family.
//             </h1>
//             <p className="mt-10 text-md text-gray-600">
//               Our family-centered approach to healthcare ensures that each member of your family receives personalized attention.
//               We believe in building strong relationships with our patients, fostering trust.
//             </p>

//             <div className='flex flex-row mt-5'>
//               <Image src={pic} alt="Dr img" className="h-32 w-36" priority />
//               <div className='ml-7 mt-2'>
//                 <h1 className='text-lg font-bold'>Dr. Elizabeth Foster</h1>
//                 <h3>Family Physician</h3>
//                 <hr className="border-t-1 border-orange-400" />
//                 <Image src={sign} alt="sign" className="h-20 w-28 mt-3" priority />
//               </div>
//             </div>
//           </header>
//         </div>

//         <div className="relative mt-16 h-3/4 w-full lg:w-4/6">
//           {/* Dot Image */}
//           <Image src={dot} alt="Dot image" className="h-4/6 w-5/12 mx-auto mt-20" priority data-aos="zoom-in" />

//           {/* Girl Image */}
//           <Image src={drr} alt="Girl overlay" className="absolute top-20 rounded-full h-96 w-52" priority data-aos="zoom-in" />

//           {/* Dr Image */}
//           <Image src={drr2} alt="Dr overlay" className="absolute top-1 ml-60 rounded-full h-96 w-52" priority data-aos="zoom-in" />
//         </div>
//       </div>

//       <div className='h-96 greenn flex flex-row space-x-10'>
//         <Image src={micro} alt="Micro" className="h-5/6 w-2/6 ml-44 pt-16" priority data-aos="zoom-in" data-aos-delay="100" />
//         <div className='mt-20 w-2/6' data-aos="fade-up" data-aos-delay="100">
//           <h1 className="text-4xl font-bold text-orange-300">Improving The Quality Of Your Life Through Better Health.</h1>
//           <h2 className='text-gray-300 mt-5'>We offer a wide range of comprehensive healthcare services to address all aspects of your health.
//             From preventive care and health screenings to specialized treatments and chronic disease management.</h2>
//         </div>
//         <div className="h-60 mt-36 w-52 border-t-0 border-l-0 border-r-0 bg-orange-200 bg-opacity-10 rounded-t-full"></div>
//       </div>

//       {/* Services Card */}
//       <div className='mt-20 mb-10'>
//         <h2 className='text-orange-300 font-serif text-2xl'>Top Services</h2>
//         <h1 className='text-gray-800 font-serif text-4xl'>We Are a Progressive Medical Clinic.</h1>
//       </div>

//       <div className='flex flex-row space-x-10 justify-center mt-10 mb-20' data-aos="fade-up" data-aos-delay="100">
//         <div className="w-72 h-60 bg-white shadow-lg border border-gray-300 p-6">
//           <FontAwesomeIcon icon={faMicroscope} className='h-12 mb-2 text-orange-300' />
//           <h2 className="text-xl font-semibold mb-4">Modern Laboratory</h2>
//           <p className="text-gray-600 mb-6">Our laboratory is equipped with the latest diagnostic equipment and automation systems, ensuring precise.</p>
//         </div>

//         <div className="w-72 h-60 bg-white shadow-lg border border-gray-300 p-6">
//           <FontAwesomeIcon icon={faRecordVinyl} className='h-12 mb-2 text-orange-300' />
//           <h2 className="text-xl font-semibold mb-4">Experienced Staff</h2>
//           <p className="text-gray-600 mb-6">We take pride in our team of experienced staff who are at the forefront of helping exceptional.</p>
//         </div>

//         <div className="w-72 h-60 bg-white shadow-lg border border-gray-300 p-6">
//           <FontAwesomeIcon icon={faUserDoctor} className='h-12 mb-2 text-orange-300' />
//           <h2 className="text-xl font-semibold mb-4">Experienced Doctors</h2>
//           <p className="text-gray-600 mb-6">Our laboratory is equipped with the latest diagnostic equipment and automation systems, ensuring precise.</p>
//         </div>
//       </div>

//       <Comments />
//       <Footer />
//     </div>
//   );
// }

// export default About;