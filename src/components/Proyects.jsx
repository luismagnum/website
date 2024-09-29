import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import proyect1 from '../images/empa.png';
import proyect2 from '../images/teque.png';
import proyect3 from '../images/deliv.png';

const ProjectsList = [
    {
        id: 1,
        title: 'Ecommerce',
        img: proyect1,
        link: 'https://luismagnum.github.io/sabores/', 
    },
    {
        id: 2,
        title: 'Ecommerce',
        img: proyect2,
        link: 'https://luismagnum.github.io/reactnav/', 
    },
    {
        id: 3,
        title: 'Delivery',
        img: proyect3,
        link: 'https://spontaneous-sunshine-99ff47.netlify.app/', 
    },
];

const Proyects = () => {
  return (
    <div data-aos="fade-left" className='text-[#00ff00] py-10 mb-10'>
      <div className='container mx-auto px-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-8'>
          <section className='space-y-7 lg:max-w-[380px]'>
            <p className='text-3xl tracking-widest font-semibold translate-y-3'>Proyectos</p>
            <h1 className='text-[#00ff00a5] text-xl lg:text-3xl'>Algunas de mis creaciones</h1>
            <p className='text-gray-400 text-xl leading-6'>
              Te muestro algunos proyectos que he realizado{" "}
            </p>
            <button className="text-[#00ff00] border-b-2 border-[#00ff00] text-xl font-bold p-1 flex items-center gap-4 group">
              SpeedWeb{" "}
              <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200" />
            </button>
          </section>

          {ProjectsList.map((proyect) => {
            return (
              <div key={proyect.id} className='space-y-7 items-center justify-center'>
                <p className='text-2xl text-center'>{proyect.title}</p>
                <img
                  src={proyect.img}
                  alt='imagen'
                  className='w-full h-64 object-cover'
                />
                <a href={proyect.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#00ff00] text-gray-950 hover:text-gray-600 hover:bg-[#00ff00a5] px-4 py-2 rounded-md w-full">
                    Ver Proyecto
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Proyects;
