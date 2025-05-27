

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function App() {
    return (
        <div className='h-60 greenn '>
            <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-start p-4' data-aos="zoom-in" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="700">
                <FontAwesomeIcon icon={faUserDoctor} className="text-6xl lg:text-8xl  pt-6 lg:pt-14 ml-0 lg:ml-48 text-orange-300" />
                <div className='text-gray-100 pt-4 lg:pt-11 ml-0 lg:ml-6 w-full lg:w-6/12'>
                    <h1 className='text-3xl lg:text-6xl text-center md:text-start'>Open For Appointments</h1>
                    <h1 className='text-sm lg:text-lg mt-2 lg:ml-2 lg:mt-6 hidden sm:block'>
                        We are delighted to announce that our doors are open, and we are now accepting <br />
                        appointments to serve you better.
                    </h1>
                </div>
                <Link href="/Doctors">
                    <h1 className='text-orange-300 border border-orange-300 w-56 rounded-full lg:ml-5 lg:text-lg h-10 lg:h-12 mt-6 lg:mt-14 pl-5 p-3 flex items-center justify-center'>
                        Make Appointment <FontAwesomeIcon icon={faCalendarDays} className="text-xl ml-2 mt-1 text-orange-300" />
                    </h1>
                </Link>
            </div>
        </div>
    );
}

export default App;