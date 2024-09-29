import React from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";

const Planes = () => {
  return (
    <div className='mb-40'>
      <section className="flex items-center justify-center">
        <h2 className="text-[#00ff00] text-3xl font-bold mt-10 mb-10">Planes Anuales</h2>
      </section>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 justify-items-center gap-10 max-w-5xl mx-auto px-4 mt-10'>
        <div>
          <h1 className='text-[#00ff00a5] text-2xl font-semibold ml-6 mb-6'>Necesitas una página Web?</h1>
          <ul className='text-gray-400 sm:text-sm md:text-xl space-y-6'>
            <li className="flex items-center">
              <IoIosCheckmarkCircle className="text-[#00ff00] mr-2" />
              Tu página web será compatible con todos los dispositivos
            </li>
            <li className="flex items-center">
              <IoIosCheckmarkCircle className="text-[#00ff00] mr-2" />
              Estará a la vanguardia con las últimas tecnologías
            </li>
            <li className="flex items-center">
              <IoIosCheckmarkCircle className="text-[#00ff00] mr-2" />
              Llegaras a mas clientes a traves de redes sociales
            </li>
            <li className="flex items-center">
              <IoIosCheckmarkCircle className="text-[#00ff00] mr-2" />
              Mayor facilidad para que tu cliente pueda comprar
            </li>
            <li className="flex items-center">
              <IoIosCheckmarkCircle className="text-[#00ff00] mr-2" />
              Tus productos se verán más atractivos
            </li>
            <li className="flex items-center">
              <IoIosCheckmarkCircle className="text-[#00ff00] mr-2" />
              Servicio y actualizacion durante todo el año
            </li>
          </ul>
        </div>
        <div data-aos="zoom-in" className="rounded-2xl  p-3 bg-[#00ff00a5] text-gray-600 max-w-xs">
          <div className="relative flex flex-col items-center p-5 pt-10 bg-gray-100 rounded-xl">
            <span className="mt-[-12px] absolute top-0 right-0 flex items-center bg-[#00ff00a5] rounded-l-full py-2 px-3 text-xl font-semibold text-sky-950">
              $60 mil <small className="text-xs ml-1 text-sky-950">/anual</small>
            </span> 
            <p className="text-xl font-bold text-gray-800 bg-[#00ff00a5] px-2 py-1 rounded-lg">
              Plan Plus
            </p>
            <p className="text-gray-950 text-center mt-3">
              Estos planes tienen una duración de 1 año a partir del momento de la activación del dominio.
            </p>
            <ul className="flex flex-col space-y-3 mt-4">
              <li className="flex items-center space-x-2">
                <span className="flex items-center justify-center w-5 h-5 bg-[#00ff00] text-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor"></path>
                  </svg>
                </span>
                <span className="font-bold text-gray-900">Dominio</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="flex items-center justify-center w-5 h-5 bg-[#00ff00] text-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor"></path>
                  </svg>
                </span>
                <span className="font-bold text-gray-950">Integracion con Whatsapp</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="flex items-center justify-center w-5 h-5 bg-[#00ff00] text-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor"></path>
                  </svg>
                </span>
                <span className='text-gray-950 font-bold'>Integracion con Redes Sociales</span>
              </li>
            </ul>
            <div className="w-full flex justify-end mt-6">
              <button className="w-full py-3 text-center text-[#00ff00] bg-gray-800 rounded-lg font-medium text-lg hover:bg-gray-600 hover:text-gray-800 focus:outline-none">
              <a href="https://wa.me/542984417477?text=Hola quiero el plan" target="_blank" rel="noreferrer"  className="flex items-center justify-center space-x-2">
                Lo Quiero
              </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planes;