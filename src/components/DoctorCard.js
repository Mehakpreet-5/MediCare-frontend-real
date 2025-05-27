

// "use client";
// import Link from 'next/link';
// import Image from 'next/image';
// import { useState } from 'react';
// import doctorData from '../list'; // Import the doctor data

// function Doctors() {
//   const [selectedCategory, setSelectedCategory] = useState('Physician');

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category === selectedCategory ? null : category);
//   };

//   const selectedCategoryData = doctorData.find(category => category.category === selectedCategory);

//   return (
//     <div className="lg:p-4 bg-orange-200 bg-opacity-20">

// <div
//         className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:flex lg:flex-wrap justify-center gap-8 p-4"
//       >
//         {doctorData.map((categoryData, index) => (
//           <div key={index} className="flex flex-col items-center">
//             <div
//               className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center rounded-full border border-gray-400 bg-white shadow-md transition transform duration-300 cursor-pointer hover:scale-105
//               ${selectedCategory === categoryData.category ? "border-yellow-500 shadow-lg" : ""}`}
//               onClick={() => handleCategoryClick(categoryData.category)}
//             >
//               <Image
//                 src={categoryData.image}
//                 alt={categoryData.category}
//                 width={50}
//                 height={50}
//                 className="rounded-full w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
//               />
//             </div>
//             <p className="text-xs sm:text-sm mt-2 font-medium text-gray-700">{categoryData.category}</p>
//           </div>
//         ))}
//       </div>

//       {selectedCategoryData && (
//       <div
//           className="mt-16 px-4 md:px-14 mb-10 lg:ml-24"
//          data-aos="fade-up"
//         data-aos-delay="200"
//         data-aos-easing="ease-in-out"
//         data-aos-duration="1200">
//       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
//         {selectedCategoryData.doctors.map((doctor, docIndex) => (
//           <li
//             key={docIndex}
//             className="bg-white bg-opacity-90 h-60 lg:h-auto min-w-80 lg:max-w-md p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
//           >
//             <div className="flex lg:flex-row  lg:items-center lg:space-x-6 space-y-4 lg:space-y-0">
//               <Image
//                 src={doctor.image || '/default-doctor-image.jpg'}
//                 alt={doctor.name}
//                 width={120}
//                 height={120}
//                 className="w-32 h-40 lg:w-36 lg:h-44 rounded-lg object-cover shadow-md"
//               />
//               <div className="flex-1 ml-5  lg:ml-0 lg:text-left">
//                 <h3 className="text-lg lg:text-xl font-semibold text-gray-800 ">
//                   {doctor.name}
//                 </h3>
//                 <p className="text-sm lg:text-base text-gray-600 mt-1">
//                   <strong>Specialization:</strong> {doctor.specialization}
//                 </p>
//                 <p className="text-sm lg:text-base text-gray-600">
//                   <strong>Experience:</strong> {doctor.experience}
//                 </p>
//                 <p className="text-sm lg:text-base text-gray-600">
//                   <strong>Availability:</strong> {doctor.availability}
//                 </p>
//               </div>
//               <Link
//                 href={{
//                   pathname: '/Booking',
//                   query: {
//                     doctorImg: doctor.image,
//                     doctorName: doctor.name,
//                     specialization: doctor.specialization,
//                     experience: doctor.experience,
//                     availability: doctor.availability,
//                   },
//                 }}
//               >
//                   <h2
//                       className='rounded-full border border-gray-500 px-2  mt-44 lg:mt-40 bg-orange-100 hover:bg-orange-200 cursor-pointer 
//                       active:bg-orange-300 active:scale-95 text-2xl pb-1'
//                     >
//                       +
//                     </h2>
//                 {/* <button
//                   className="mt-4 lg:mt-40 bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-4 py-2 rounded-full shadow-md 
//                   transform active:scale-95 transition duration-150"
//                 >
//                   Book
//                 </button> */}
//               </Link>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
    
//       )}
//     </div>
//   );
// }

// export default Doctors;

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
    <div className="lg:p-4 pt-10 lg:pt-5 bg-orange-200 bg-opacity-20">
      <div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:flex lg:flex-wrap justify-center gap-8 p-4"
      >
        {doctorData.map((categoryData, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-24 lg:h-24 flex items-center justify-center rounded-full border border-gray-400 bg-white shadow-md transition transform duration-300 cursor-pointer hover:scale-105
              ${selectedCategory === categoryData.category ? "border-yellow-500 shadow-lg" : ""}`}
              onClick={() => handleCategoryClick(categoryData.category)}
            >
              <Image
                src={categoryData.image}
                alt={categoryData.category}
                width={50}
                height={50}
                className="rounded-full w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
              />
            </div>
            <p className="text-xs sm:text-sm mt-2 font-medium text-gray-700">{categoryData.category}</p>
          </div>
        ))}
      </div>
      {selectedCategoryData && (
        <div className="mt-16 px-4 md:px-6 mb-10 lg:ml-24" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="1200">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {selectedCategoryData.doctors.map((doctor, docIndex) => (
              <li key={docIndex} className="bg-white bg-opacity-90 min-w-full sm:min-w-full lg:max-w-sm px-1 sm:p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex flex-row  items-start sm:space-x-6 lg:space-y-4 lg:h-40 h-44 space-y-0">
                  <Image
                    src={doctor.image || '/default-doctor-image.jpg'}
                    alt={doctor.name}
                    width={100}
                    height={100}
                    className="w-28 h-36 sm:w-32 sm:h-40 lg:w-32 mt-4 lg:mt-0 lg:h-40 rounded-lg object-cover shadow-md"
                  />
                  <div className="flex-1 ml-3 lg:ml-0 sm:text-left  ">
                    <h3 className="text-lg mt-4 lg:mt-0 sm:text-xl font-semibold text-gray-800">
                      {doctor.name}
                    </h3>
                    <p className="text-sm sm:text-sm text-gray-600 mt-1">
                      <strong>Specialization:</strong> {doctor.specialization}
                    </p>
                    <p className="text-sm sm:text-sm text-gray-600">
                      <strong>Experience:</strong> {doctor.experience}
                    </p>
                    <p className="text-sm sm:text-sm text-gray-600">
                      <strong>Availability:</strong> {doctor.availability}
                    </p>
                  </div>
                  <Link
                    href={{
                      pathname: '/Booking',
                      query: {
                        doctorImg: doctor.image,
                        doctorName: doctor.name,
                        specialization: doctor.specialization,
                        experience: doctor.experience,
                        availability: doctor.availability,
                      },
                    }}
                  >
                    <h2 className='rounded-full border border-gray-500 px-2 lg:px-2 py-0 lg:py-0 mt-32 mr-5 lg:mr-0 lg:mt-28 bg-orange-100 hover:bg-orange-200 cursor-pointer active:bg-orange-300 active:scale-95 text-xl sm:text-2xl'>
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
