import React, { useState, useEffect } from 'react';
import logo from '../assets/Images/logo.jpg'; // Assuming Images folder is one level up
import { Link } from 'react-router-dom';
import {FaXmark , FaBars} from "react-icons/fa6"

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // Function to toggle menu state
  // Corrected function syntax

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add event listener on component mount
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount (cleanup)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array, runs effect only once on mount

  const navItems = [
    { link: "Home", path: "/home" }, // Assuming path "/" for Home
    { link: "Service", path: "/service" },
    { link: "About", path: "/about" },
    { link: "Product", path: "/product" },
    { link: "Testimonial", path: "/testimonial" },
    { link: "FAQ", path: "/faq" },
  ];

  return (
    <header
      className='w-full bg-white text-[#004A98] md:bg-transparent fixed top-0 left-0 right-0'>
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
        <div className='flex justify-between items-center  text-base gap-8'>
          <a href="#" className="text-2xl font-semibold flex items-center space-x-3">
            <img src={logo} alt="" className="w-10 inline-block items-center" />  
           
          </a>

          <ul className="md:flex space-x-12 hidden font-bold " style={{ listStyleType: 'none' }}>
            {navItems.map(({ link, path }) => (
              <li key={path}> {/* Using key prop for better performance */}
                <Link to={path} >{link}</Link>
              </li>
            ))}
          </ul>
          <div className="space-x-12 hidden lg:flex items-center">
  <a href="/" className="bg-[#004A98] text-white hover:bg-gray-500 py-2 px-4 rounded transition-all duration-300">Login</a>
  <button className="bg-[#004A98] text-white hover:bg-gray-500 py-2 px-4 rounded transition-all duration-300">SignUp</button>
</div>

<div className='md:hidden'>
  <button 
  onClick={toggleMenu} 
  className='focus:outline-none focus:text-gray-500'>
    {
      isMenuOpen ? (<FaXmark className='h-6 w-6 text-[#004A98]'/>) : (<FaBars className='h-6 w-6 text-[#004A98]'/>)
    }

  </button>

</div>


        </div>
        <div style={{ listStyleType: 'none' }} className={`space-y-4 px-4 mt-16 py-7 w-full h-full bg-[#004A98] font-semibold  text-white ${
  isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden" 
}`}>
  

  {navItems.map(({ link, path }) => (
    <li key={path}>
      <a
        href={path}
        className=" text-white  cursor-pointer"
        onClick={(event) => {
          if (window.innerWidth < 768) {
            event.preventDefault(); // Prevent default anchor tag behavior on small screens
            window.location.href = path; // Direct navigation
          }
        }}
      >
        {link}
      </a>
    </li>
  ))}
        </div>
      </nav>

    </header>
  );
}

export default Navbar;
