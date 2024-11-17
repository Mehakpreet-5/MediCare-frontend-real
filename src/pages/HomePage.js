

"use client"
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Girl from '../app/assests/drGirl.png';
import dot from '../app/assests/dots.png';
import dr from '../app/assests/hand.jpg';
import icon2 from '../app/assests/icon1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      <div className='flex flex-col lg:flex-row lg:h-5/6 greenn'>
        {/* Animate Icon */}
        <Image src={icon2}  alt="A friendly doctor background image"  className="relative w-28 h-28 opacity-50 ml-10 mt-10" data-aos="zoom-in"  data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="2000" />
        
        <div className='flex flex-col lg:flex-row space-x-20 mt-7 ml-10 mr-1 pb-10 md:pb-0'>
          <div className='flex flex-col items-center justify-center pt-0 md:pt-20 lg:pt-20 px-4 w-full lg:w-4/6'>
            {/* Hero Section */}
            <header className="bg-center mt-0 md:mt-16 lg:mt-16 h-full" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
              <h1 className="text-4xl md:text-5xl text-orange-300 text-center lg:text-left">Take the best quality Treatment</h1>
              <p className="mt-4 text-md md:text-base text-gray-400 mr-7 text-center lg:text-left">
                Your health is our priority. Our goal is to deliver the highest quality healthcare services. We believe that everyone deserves access to excellent medical care without compromising on quality.
              </p>

              <Link href="/Doctors">
                <button className="mt-8 ml-32 md:ml-0 lg:ml-0 border-2 border-orange-300 text-orange-300 py-2 px-6 rounded-full hover:bg-yellow-200 hover:text-green-950 transition">
                  Book Now <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                </button>
              </Link>
            </header>
          </div>

          <div className=" hidden sm:block relative  mt-16 h-3/4 w-full lg:w-3/6 " data-aos="fade-left">
            {/* Dot Image */}
            <Image src={dot} alt="Dot image" className="h-s ml-14 mt-10" />
            
            {/* Girl Image */}
            <Image
              src={Girl}
              alt="Girl overlay"
              className="absolute top-20 rounded-full h-96 w-52 py-3 px-2"
              data-aos="zoom-in"
            />

            {/* Dr Image */}
            <Image
              src={dr}
              alt="Dr overlay"
              className="absolute top-1 ml-60 rounded-full h-96 py-3 px-2 w-52"
              data-aos="zoom-in"
            />
          </div>
        </div>

        {/* Decorative Div */}
        <div className=" hidden sm:block h-64 mr-6 ml-16 mt-96 w-full lg:w-3/12 border-t-0 border-l-0 border-r-0 bg-orange-200 bg-opacity-10 rounded-t-full" data-aos="fade-up"></div>
      </div>
    </>
  );
}

export default Home;