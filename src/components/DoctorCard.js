

"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import doctorData from '../list'; // Import the doctor data

function Doctors() {
  const [selectedCategory, setSelectedCategory] = useState('Physician');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const selectedCategoryData = doctorData.find(category => category.category === selectedCategory);

  return (
    <div className="p-10 bg-orange-200 bg-opacity-20">

      <div className="flex flex-wrap justify-center space-x-8 mb-8" data-aos="zoom-in" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="700">
        {doctorData.map((categoryData, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`text-2xl font-semibold cursor-pointer transition duration-300 ease-in-out border
               border-gray-600 rounded-full px-2 lg:py-2 text-center w-24 h-20 bg-gradient-to-r from-cyan-100 to-white mb-2
              ${selectedCategory === categoryData.category ? ' text-yellow-500 shadow-lg shadow-yellow-300 ' : 'text-gray-800'}`}
              onClick={() => handleCategoryClick(categoryData.category)} 
            >
              {/* Category Image */}
              <Image
                src={categoryData.image} // Use the image from the data
                alt={categoryData.category}
                width={70} // Set desired width
                height={80} // Set desired height
                className="inline-block mr-2 rounded-full p-1" // Optional styling
              />
            </div>
            {categoryData.category}
          </div>
        ))}
      </div>

      {selectedCategoryData && (
        <div className="mt-20 px-4 md:px-14 mb-10 ml-10" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="1200">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {selectedCategoryData.doctors.map((doctor, docIndex) => (
              <li key={docIndex} className="bg-white bg-opacity-35 w-full sm:w-96 p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                  <Image
                    src={doctor.image || '/default-doctor-image.jpg'}
                    alt={doctor.name}
                    width={100}
                    height={100}
                    className="w-24 h-24 rounded-full object-cover border-2 border-yellow-500"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
                    <p>Specialization: {doctor.specialization}</p>
                    <p>Experience: {doctor.experience}</p>
                    <p>Availability: {doctor.availability}</p>
                  </div>
                  <Link
                    href={{
                      pathname: '/Booking',
                      query: {
                        doctorImg : doctor.image,
                        doctorName: doctor.name,
                        specialization: doctor.specialization,
                        experience: doctor.experience,
                        availability: doctor.availability,
                      }
                    }}
                  >
                    <h2
                      className='rounded-full border border-gray-500 px-2 mt-28 bg-yellow-50 hover:bg-yellow-100 cursor-pointer 
                      active:bg-yellow-300 active:scale-95'
                    >
                      +
                    </h2>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Doctors;