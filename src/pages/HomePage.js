
"use client"
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Girl from '../app/assests/drGirl.png';
import dot from '../app/assests/dotsss.png';
import dr from '../app/assests/hand.jpg';
import icon2 from '../app/assests/icon1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../app/globals.css"
function Home() {
  return (
    <>
      <div className='flex flex-col lg:flex-row lg:h-5/6 greenn lg:pt-12'>
        {/* Animate Icon */}
        <Image src={icon2}  alt="A friendly doctor background image"  className="relative w-16 h-20 lg:w-24 lg:h-24 opacity-50  ml-2 lg:ml-16 mt-8" data-aos="zoom-in"  data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="2000" />
        
        <div className='flex flex-col lg:flex-row lg:space-x-10 px-4 lg:px-0 lg:mt-4 lg:ml-5 mr-1 pb-10 md:pb-0'>
          <div className='flex flex-col items-center justify-center pt-0 md:pt-20 lg:pt-8 lg:ml-20  w-full lg:w-3/6 '>
            {/* Hero Section */}
            <header className="bg-center mt-0 md:mt-16 lg:mt-6  h-full" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
              {/* <h4 className='text-2xl  text-gray-200 uppercase'>we tack care of your health</h4> */}
              <h1 className="text-4xl  md:text-6xl lg:mr-24 font-normal text-orange-300 text-center lg:text-left">Take the best & Affordable Health Care.</h1>
              <p className="mt-4 text-md md:text-base text-gray-400 lg:mr-6 lg:mt-5 text-center lg:text-left">
                Your health is our priority. Our goal is to deliver  highest quality healthcare services. We believe that everyone deserves access to excellent medical care without compromising on quality.
              </p>

              <Link href="/Doctors">
                <button className="mt-8 ml-24 md:ml-0 lg:ml-0 border-2 lg:text-xl border-orange-300 text-orange-300 py-2 px-4 lg:px-6 rounded-full hover:bg-yellow-200 hover:text-green-950 transition">
                  Book Now <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                </button>
              </Link>
            </header>
          </div>

         <div className="hidden sm:block relative mt-1 h-3/4 w-full lg:w-3/6 lg:ml-8" data-aos="fade-left">
  {/* Dot Image */}
  <Image src={dot} alt="Dot image" className="h-s lg:w-8/12 ml-20 mt-14" />

  {/* Girl Image */}
  <div className="absolute top-20 ml-5 h-96 w-52 lg:h-96 lg:w-52 lg:py-0 lg:px-0 py-3 px-2 shine-wrapper rounded-full">
    <Image
      src={Girl}
      alt="Girl overlay"
      className="rounded-full h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
      data-aos="zoom-in"
    />
  </div>

  {/* Dr Image */}
  <div className="absolute top-2 ml-64 lg:pl-1 h-96 w-52 lg:h-96 lg:w-52 lg:py-0 lg:px-0 py-3 px-2 shine-wrapper rounded-full">
    <Image
      src={dr}
      alt="Dr overlay"
      className="rounded-full h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
      data-aos="zoom-in"
    />
  </div>
</div>

        </div>

        {/* Decorative Div */}
        <div className=" hidden sm:block h-64 mr-11  mt-80 w-full lg:w-2/12 lg:px-14 lg:py-9  border-t-0 border-l-0 border-r-0 bg-orange-200 bg-opacity-10 rounded-t-full" ></div>
      </div>
    </>
  );
}

export default Home;