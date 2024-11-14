

// "use client";
// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const sidebarRef = useRef(null);

//   const toggleMenu = () => {
//     setIsOpen((prev) => !prev); // Toggle the sidebar
//   };

//   const handleClickOutside = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
//       setIsOpen(false); // Close the sidebar if clicked outside
//     }
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen]);

//   return (
//     <div className="lg:flex w-full greenn text-gray-300 justify-between items-center px-6 py-4 relative">
//       {/* Logo */}
//       <div className='flex flex-row justify-between'>
//       <h1 className="text-4xl lg:ml-36">
//   <span className="text-orange-300">Medi</span>
//   <span className="text-white">Care</span>
// </h1>


//       {/* Hamburger Menu */}
//       <div className="lg:hidden flex items-center">
//         <button onClick={toggleMenu} className=" focus:outline-none">
//           <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
//         </button>
//       </div>
//       </div>
//       {/* Backdrop for sidebar */}
//       {isOpen && (
//         <div className="fixed inset-0 z-40 bg-black bg-opacity-30" onClick={toggleMenu}></div>
//       )}

//       {/* Sidebar */}
//       <div
//         ref={sidebarRef}
//         className={`fixed  inset-y-0 right-0 z-50 bg-white transition-transform duration-300 ease-in-out transform ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         } w-28 h-full shadow-lg`}
//       >
//         <div className="flex flex-col items-start p-4 mt-6">
//           <div className='flex flex-row '>
//           <h2 className="text-lg mb-4">Menu</h2>
//           <button onClick={toggleMenu} className="self-end mb-5 ml-7">
//             <FontAwesomeIcon icon={faTimes} />
//           </button> </div>
//           <ul className="space-y-4  text-base">
//             <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
//             <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
//             <li><Link href="/Doctors" onClick={toggleMenu}>All Doctors</Link></li>
//             <li><Link href="/admin" onClick={toggleMenu}>Admin</Link></li>
//             <li><Link href="/FAQ" onClick={toggleMenu}>FAQ's</Link></li>
//             <li><Link href="/login" onClick={toggleMenu}>Login</Link></li>
//           </ul>
//         </div>
//       </div>

//       {/* Links for larger screens */}
//       <ul className={`hidden md:flex lg:flex space-x-7  text-lg`}>
//         <li><Link href="/">Home</Link></li>
//         <li><Link href="/about">About</Link></li>
//         <li><Link href="/Doctors">All Doctors</Link></li>
//         <li><Link href="/admin">Admin</Link></li>
//         <li><Link href="/FAQ">FAQ's</Link></li>
//         <li><Link href="/login">Login</Link></li>
//       </ul>

//       {/* Booking button */}
//       <div className="flex space-x-6 mr-32">
//         <div className="hidden sm:block mt-1 p-2 w-28 text-center rounded-full bg-yellow-600 bg-opacity-45 hover:bg-opacity-75 transition">
//           <Link href="/Appointment">Appointment</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '@/app/AuthContext';

function Navbar() {
  const user = useAuth(); // Fetch user context
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility
  const sidebarRef = useRef(null); // Reference for the sidebar

  // Toggle sidebar visibility
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close sidebar when clicking outside
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
      setIsOpen(false);
    }
  };

  // Handle event listeners for closing the sidebar
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="lg:flex w-full greenn text-gray-300 justify-between items-center px-6 py-4 relative">
      {/* Logo */}
      <div className="flex flex-row justify-between ">
        <h1 className="text-4xl lg:ml-36">
          <span className="text-orange-300">Medi</span>
          <span className="text-white">Care</span>
        </h1>
       

          {/* Hamburger Menu */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle menu">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>
      
      </div>

      {/* Backdrop for sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-30"
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 right-0 z-50 bg-white transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } w-28 h-full shadow-lg`}
      >

        <div className="flex flex-col items-start p-4 mt-6">
          <div className="flex flex-row">
            <h2 className="text-lg mb-4">Menu</h2>
            <button
              onClick={toggleMenu}
              className="self-end mb-5 ml-7"
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <ul className="space-y-4 text-gray-800 text-base">
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link href="/Doctors" onClick={toggleMenu}>All Doctors</Link></li>
            {/* {user?.role === 'admin' && <li><Link href="/admin" onClick={toggleMenu}>Admin</Link></li>} */}
            <li><Link href="/FAQ" onClick={toggleMenu}>FAQ's</Link></li>
            <li><Link href="/login" onClick={toggleMenu}>Login</Link></li>
          </ul>
 {/* Booking button */}

          <div className=" mt-5  w-24 py-2 text-sm text-gray-950 text-center rounded-full bg-yellow-600 bg-opacity-45 hover:bg-opacity-75 transition">
            <Link href="/Appointment">Appointment</Link>
          </div>
        </div>

      </div>

      {/* Links for larger screens */}
      <ul className="hidden md:flex lg:flex space-x-7 text-lg">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/Doctors">All Doctors</Link></li>
        {/* {user?.role === 'admin' && <li><Link href="/admin">Admin</Link></li>} */}
        <li><Link href="/FAQ">FAQ's</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>

      {/* Booking button */}
      <div className="flex space-x-6 mr-32">
        <div className="hidden sm:block mt-1 p-2 w-28 text-center rounded-full bg-yellow-600 bg-opacity-45 hover:bg-opacity-75 transition">
          <Link href="/Appointment">Appointment</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
