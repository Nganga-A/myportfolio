import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'Home',
    },
    {
      id: 2,
      link: 'About',
    },
    {
      id: 3,
      link: 'Portfolio',
    },
    {
      id: 4,
      link: 'Experience',
    },
    {
      id: 5,
      link: 'Contact',
    },
  ];

  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed'>
      {/* Logo */}
      <div>
        <h1 className='text-5xl font-signature ml-0.5'>Abed</h1>
      </div>

      {/* Desktop Links */}
      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-orange-400'
          >
            <Link to={link.toLowerCase()} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navbar */}
      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'
      >
        {nav ? <FaTimes size={38} /> : <FaBars size={30} />}
      </div>

      {/* Slide-in Mobile Menu */}
      {nav && (
        <div className='md:hidden fixed top-0 right-0 h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 p-4 transition-transform duration-300 transform translate-x-0 '>
          <ul>
            {links.map(({ id, link }) => (
              <li
                key={id}
                className='px-4 cursor-pointer capitalize py-2 text-2xl hover:text-orange-400'
              >
                <Link
                  to={link.toLowerCase()}
                  smooth
                  duration={500}
                  onClick={() => setNav(!nav)}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
