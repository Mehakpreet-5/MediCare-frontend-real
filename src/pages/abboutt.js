

import Image from 'next/image';
import Link from 'next/link';
import search from '../app/assests/Screenshot_10.png';
import appointment from '../app/assests/Screenshot_11.png';
import Consultation from '../app/assests/Screenshot_12.png';
import pp1 from '../app/assests/Screenshot_6.png'
import pp2 from '../app/assests/Screenshot_7.png'
import pp3 from '../app/assests/pp3.jpg'
import dot from '../app/assests/355.png'; 
// import rabk from '../app/assests/rabkk.png'
import rabk from '../app/assests/kkkk.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


function About() {
  return (
    <>
      <div className="pt-20 pb-20 px-6 bg-orange-200 bg-opacity-15  flex justify-center items-center">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3" data-aos="zoom-in" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="1200">
          {/* Card 1 */}
          <div className="text-center border-2 border-green-800 w-64 h-64 lg:h-72 lg:w-72 bg-transparent shadow-lg rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl">
            <Image
              src={search}
              alt="Find Best Doctors"
              className="rounded-full h-24 w-24 lg:h-24 lg:w-24  mx-auto mt-8 mb-4"
            />
            <h2 className="textg text-lg lg:text-2xl font-semibold mb-2">
              Find Best Doctors
            </h2>
            <p className="text-gray-500 text-sm lg:text-base  px-6">
              Your health, our priority. Book your appointment today!
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-center border-2 border-green-800 w-64 h-64 lg:h-72 lg:w-72 shadow-lg rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl">
            <Image
              src={appointment}
              alt="Get Appointment"
              className="rounded-full h-24 w-24 mx-auto mt-8 mb-4"
            />
            <h2 className="textg text-lg lg:text-2xl  font-semibold mb-2">
              Get Appointment
            </h2>
            <p className="text-gray-500 text-sm lg:text-base  px-6">
              Your health, our priority. Book your appointment today!
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-center border-2 border-green-800 w-64 h-64 lg:h-72 lg:w-72 shadow-lg rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl">
            <Image
              src={Consultation}
              alt="Happy Consultation"
              className="rounded-full h-24 w-24 mx-auto mt-8 mb-4"
            />
            <h2 className="textg text-lg lg:text-2xl  font-semibold mb-2">
              Happy Consultation
            </h2>
            <p className="text-gray-500 text-sm lg:text-base px-6">
              Your health, our priority. Book your appointment today!
            </p>
          </div>
        </div>
      </div>

      {/* design  */}

    

<div className="p-10 flex flex-row bg-orange-200 bg-opacity-15 ">
  {/* Left Section */}
  <div className="w-5/12 ml-40 relative pb-10 hidden sm:block">
    {/* Main rabk image */}
    <Image 
      src={rabk} 
      alt='pic1'
      className="h-full w-full ml-0 mt-5 px-2 opacity-80 relative" 
    />
    
    <Image 
      src={dot} 
      alt='pic2'
      className="h-96 p-4 w-7/12 object-cover absolute top-40 left-32 " 
    />
    <Image 
      src={pp2} 
        alt='pic2'
      className="h-4/6 w-56 py-5 object-cover absolute top-52 left-20 rounded-full" 
    />
    <Image 
      src={pp1}
      alt='pic3' 
      className="h-4/6 w-64 py-5 object-cover absolute -top-6 left-80 pl-7 rounded-full" 
    /> 
    <Image 
      src={pp3} 
        alt='pic4'
      className="h-48 w-80 object-cover absolute bottom-11 left-80 pl-7 rounded-full" 
    />
  </div>

  {/* Right Section */}
  <div className="flex flex-col w-full lg:w-2/6 lg:ml-14 mt-10 ">
          <h1 className="text-2xl font-semibold uppercase text-orange-300 mb-2">About Medicalife</h1>
          <h2 className="text-5xl font-medium textg mb-8 ">Our Best Services & Popular Treatment Here.</h2>
          <p className="text-gray-500 text-xl mb-8 w-11/12 pr-3">We take pride in offering a wide range of best-in-class medical services and popular treatments to cater to your diverse healthcare needs.
          Our team of highly skilled professionals is committed to providing personalized and effective care .</p>
          <ul className="space-y-4 text-xl font-semibold text-orange-300">
            <li className="flex items-center">
              <svg className="w-7 h-7 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-gray-800">Mental Health Solutions</span>
            </li>
            <li className="flex items-center">
              <svg className="w-7 h-7 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-gray-800">Rapid Patient Improvement</span>
            </li>
            <li className="flex items- center">
              <svg className="w-7 h-7  mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-gray-800">World Class Treatment</span>
            </li>
          </ul>
          <div className="mt-8">
            <Link href="/about" className=" text-orange-300 border-2 border-orange-300 text-lg font-semibold px-4 py-2 rounded-full hover:bg-orange-300 hover:text-white">Read More <FontAwesomeIcon icon={faArrowRight} className='ml-2' /></Link>
          </div>
        </div>
</div>

    </>
  );
}

export default About;