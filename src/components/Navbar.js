

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

  useEffect(() => {
    // Define the handleClickOutside function inside useEffect
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]); // Only depend on isOpen, no need to include handleClickOutside

  return (
    <div className="lg:flex lg:pt-5 w-full greenn text-gray-300 border border-gray-400 border-opacity-15 justify-between items-center px-6 py-4 relative">
      {/* Logo */}
      <div className="flex flex-row justify-between">
        <h1 className="text-4xl lg:ml-60">
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
        className={`fixed inset-y-0 right-0 z-50 bg-white transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-40 h-full shadow-lg`}
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
            <li><Link href="/FAQ" onClick={toggleMenu}>FAQ&apos;s</Link></li>
            <li><Link href="/login" onClick={toggleMenu}>Login</Link></li>
          </ul>

          {/* Booking button */}
          <div className="mt-5 w-24 py-2 text-sm text-gray-950 text-center rounded-full bg-yellow-600 bg-opacity-45 hover:bg-opacity-75 transition">
            <Link href="/Appointment">Appointment</Link>
          </div>
        </div>
      </div>

      {/* Links for larger screens */}
      <ul className="hidden md:flex lg:flex space-x-7 lg:text-2xl">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/Doctors">All Doctors</Link></li>
        <li><Link href="/FAQ">FAQ&apos;s</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>

      {/* Booking button for large screens */}
      <div className="flex space-x-6 mr-60">
        <div className="hidden sm:block lg:text-xl mt-1 p-2 w-28 lg:w-40 text-center rounded-full border-2 border-orange-300  text-orange-300 hover:bg-opacity-75 transition">
          <Link href="/Appointment">Appointment</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;