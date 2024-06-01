import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import UnilagLogo from '../images/UnilagLogo.jfif';



const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <nav className='md:pl-[100px] pl-[15px] pr-[100px] pt-[20px] pb-[20px] flex mb-[-17px] bg-[#D8BABA]'>
        <div className="mt-[-20px]">
          <Link to='/' className=''>
            <img src={UnilagLogo} alt="" className='w-[70px]' />
          </Link>
        </div>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className='text-gray-600 focus:outline-none ml-[200px] text-2xl button-menu md:hidden'>
            {showMenu  ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
        </div>
        <div className={`lg:flex ml-[260px] pt-1 font-normal total ${showMenu  ? 'block' : 'hidden'} menu-slide `}>
          
          <ul className='flex flex-col space-x-6 text-lg font-bold lg:flex-row lg:space-x-0 lg:ml-0 '>
            
            <li className='home-smalll '>
              <Link to='/' className='text-black home-small' onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className=''>
              <Link to='/reviews' className='text-black md:ml-5 down ' onClick={closeMenu}>
                Reviews
              </Link>
            </li>
            <li className=''>
              <Link to='/services' className='text-black md:ml-5 down' onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li className=''>
              <Link to='/about' className='text-black md:ml-5 down' onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className=''>
              <Link to='/contact' className='text-black md:ml-5 down' onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li className=''>
              <Link to='/code' className='text-black md:ml-5 down' onClick={closeMenu}>
                LiT
              </Link>
            </li>
          </ul>
          <ul className='flex space-x-4 md:ml-[260px] mt-[-7px]'>
            <li className='navlarge '>
              <button className='bg-[#D9D9D9] font-bold  px-[15px] py-[6px] rounded shadow'>
                <Link to="/enroll" onClick={closeMenu}>Enroll Now</Link>
              </button>
            </li>
          </ul>
          
        </div>
            
      </nav>
    </div>
  );
};

export default NavBar;
