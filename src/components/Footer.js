
// import React from 'react';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faClock } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedinIn, faYoutube, faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

// const Footer = () => {
//   return (
//     <footer className="greenn border border-gray-600 text-white py-10 px-5 md:px-20 lg:px-40">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
//         {/* Company Info */}
//         <div className="mt-6">
//           <Link href="/" className="flex items-center mb-4">
//             <h1 className="text-4xl">
//               <span className="text-orange-300">Medi</span>
//               <span className="text-white">Care</span>
//             </h1>
//           </Link>
//           <p className="text-gray-400">
//             Family-centered healthcare ensuring personalized attention for everyone.
//           </p>
//           <div className="flex space-x-4 mt-6">
//             {[
//               { icon: faLinkedinIn, link: '#' },
//               { icon: faYoutube, link: '#' },
//               { icon: faTwitter, link: '#' },
//               { icon: faInstagram, link: '#' },
//               { icon: faFacebookF, link: '#' },
//             ].map(({ icon, link }) => (
//               <a key={link} href={link} className="text-orange-300 hover:text-white">
//                 <FontAwesomeIcon icon={icon} className="text-xl" />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div className="w-44 ml-16 mt-5">
//           <h3 className="text-lg font-semibold text-orange-300 mb-4">Quick Links</h3>
//           <ul className="space-y-2">
//             {['Home', 'About Us', 'Doctors', 'Contact Us'].map((link) => (
//               <li key={link}>
//                 <Link href={`/${link.toLowerCase().replace(/\s+/g, '')}`} className="text-gray-200 hover:text-white">
//                   {link}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact Details */}
//         <div className='mt-5'>
//           <h3 className="text-lg font-semibold text-orange-300 mb-4">Contact Details</h3>
//           <ul className="space-y-2 text-gray-200">
//             <li className="flex items-center">
//               <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-orange-300 h-5" />
//               Jl. Raya Kuta No.70, Kuta
//             </li>
//             <li className="flex items-center">
//               <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-orange-300 h-5" />
//               healthcare@gmail.com
//             </li>
//             <li className="flex items-center">
//               <FontAwesomeIcon icon={faPhoneAlt} className="mr-3 text-orange-300 h-5" />
//               +01 547 547 5478
//             </li>
//             <li className="flex items-center">
//               <FontAwesomeIcon icon={faClock} className="mr-3 text-orange-300 h-5" />
//               8 AM - 5 PM
//             </li>
//           </ul>
//         </div>

//         {/* Services */}
//         <div className='mt-5'>
//           <h3 className="text-lg font-semibold text-orange-300 mb-4">Services</h3>
//           <ul className="space-y-2 text-gray-200">
//             {['Pathology Clinic', 'Laboratory Analysis', 'Diagnostics', 'Therapy'].map((service) => (
//               <li key={service} className="text-sm">{service}</li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <h1 className="text-center mt-12">
//         Copyright 2024 © <span className="text-orange-300">MediPro</span> All Rights Reserved.
//       </h1>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faYoutube, faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="greenn border border-gray-600 text-white py-10 px-5 md:px-20 lg:px-40">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div className="mt-6">
          <Link href="/" className="flex items-center mb-4">
            <h1 className="text-4xl lg:text-5xl">
              <span className="text-orange-300">Medi</span>
              <span className="text-white">Care</span>
            </h1>
          </Link>
          <p className="text-gray-400 lg:text-xl">
            Family-centered healthcare ensuring personalized attention for everyone.
          </p>
          <div className="flex space-x-4  mt-6">
            {[
              { icon: faLinkedinIn, link: '#' },
              { icon: faYoutube, link: '#' },
              { icon: faTwitter, link: '#' },
              { icon: faInstagram, link: '#' },
              { icon: faFacebookF, link: '#' },
            ].map(({ icon, link }) => (
              <a key={link} href={link} className="text-orange-300 hover:text-white">
                <FontAwesomeIcon icon={icon} className="text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-44 ml-20 mt-5 hidden sm:block">
          <h3 className="text-lg lg:text-2xl font-semibold text-orange-300 mb-4">Quick Links</h3>
          <ul className="space-y-2 lg:text-xl">
            {['Home', 'About Us', 'Doctors', 'Contact Us'].map((link) => (
              <li key={link}>
                <Link href={`/${link.toLowerCase().replace(/\s+/g, '')}`} className="text-gray-200 hover:text-white">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div className='mt-5'>
          <h3 className="text-lg font-semibold lg:text-2xl text-orange-300 mb-4">Contact Details</h3>
          <ul className="space-y-2 text-gray-200 lg:text-xl">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-orange-300 h-5" />
              Jl. Raya Kuta No.70, Kuta
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-orange-300 h-5" />
              healthcare@gmail.com
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-3 text-orange-300 h-5" />
              +01 547 547 5478
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-3 text-orange-300 h-5" />
              8 AM - 5 PM
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className='mt-5'>
          <h3 className="text-lg font-semibold text-orange-300 lg:text-2xl mb-4">Services</h3>
          <ul className="space-y-2 lg:text-xl text-gray-200">
            {['Pathology Clinic', 'Laboratory Analysis', 'Diagnostics', 'Therapy'].map((service) => (
              <li key={service} className="text-sm lg:text-xl">{service}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <h1 className="text-center mt-12 lg:text-xl">
        Copyright 2024 © <span className="text-orange-300">MediPro</span> All Rights Reserved.
      </h1>
    </footer>
  );
};

export default Footer;