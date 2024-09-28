import React, { useState } from 'react';
import {Link} from "react-scroll";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import logo from '../images/logo.png';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () =>{
    setMenu(!menu);
  }

  const closeMenu = () =>{
    setMenu(false);
  }
  return (
    <div className='fixed w-full z-50'>
      <div>
        <div className='flex flex-row justify-between p-5 md:px-24 px-5 bg-[#01020d] shadow-[0_3px_10px_rgba(0,0,0,0.2)] z-50'>
            <div className='flex flex-row items-center cursor-pointer'>
                <span>
                    <img src={logo} alt='logo' width={80}/>
                </span>
                <h1 className='text-[#00ff00] text-xl font-semibold ml-2'> SpeedWeb</h1>
            </div>
            <nav className='hidden text-[#00ff00] md:flex flex-row items-center text-lg font-medium gap-8'>
                <Link
                 to='home'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-gray-600 transition-all cursor-pointer'>
                 Home
                 </Link>
                <Link 
                 to='ofrecer' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-gray-600 transition-all cursor-pointer'>
                 Nosotros
                 </Link>
                <Link 
                 to='proyects'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-gray-600 transition-all cursor-pointer'>
                 Proyectos
                </Link>
                <Link 
                 to='footer' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-gray-600 transition-all cursor-pointer'>
                 Contacto
                </Link>

            </nav>
            <div className='md:hidden flex items-center'>
                {menu ? (
                    <IoClose size={25} onClick={handleChange} className='text-[#00ff00] cursor-pointer'/>
                ):(
                    <TiThMenu size={25} onClick={handleChange} className='text-[#00ff00] cursor-pointer'/>
                )}
            </div>
        </div>
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-[#00ff00] text-black left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 z-50`}>
        <Link
                 to='home'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Home
                 </Link>
                 <Link 
                 to='ofrecer' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Nosotros
                 </Link>
                <Link 
                 to='proyects'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Proyectos
                </Link>
                <Link 
                 to='footer' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Contacto
                </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar