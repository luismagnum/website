import React from 'react';
import imag2 from '../images/imgd.png';
import survey from '../images/imagu.jpg';
import { BsWhatsapp } from "react-icons/bs";
import { motion } from 'framer-motion';

const bgImage = {
  backgroundImage: `url(${survey})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}


const Hero = () => {
  return (
    <main style={bgImage}>
      <div className='bg-gradient-to-r from-primary to bg-primaryDark/80'>
        <div className="container text-white">
            {/* navbar components */}
            {/* hero section */}
            <section className='grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[800px]'>
                {/* text content section */}
                <div className='space-y-8 mt-[100px] md:mt-[20px]'>
                <motion.h1
                initial={{opacity: 0, y: -100}}
                whileInView={{opacity: 1, y:0}}
                transition={{
                  duration: 0.4,
                  type: 'spring',
                  stiffness: 100,
                  delay: 1,
                  damping:10,
                }}
                className='text-[#00ff00] text-2xl ml-4 lg:text-7xl font-bold leading-tight uppercase'>
                    Diseño de <br/>{""}
                    <span className='
                     text-[#00ff00] text-outline'>
                     paginas Web
                     </span> 
                </motion.h1>
                <motion.button
                 initial={{opacity: 0, y: -100}}
                 whileInView={{opacity: 1, y:0}}
                 transition={{
                   duration: 0.5,
                   type: 'spring',
                   stiffness: 100,
                   delay: 1,
                   damping:10,
                 }}
                 className='outline-btn flex justify-center items-center gap-4 group'>
                  <a href="https://wa.me/542984417477?text=Hola quiero mas info" target="_blank"><span className='text-gray-950 text-2xl ml-4 font-bold bg-[#00ff00] hover:bg-green-900 px-4 py-2.5 rounded-lg'>Mas info</span></a>
                <BsWhatsapp
                className='group-hover:translate-x-2 transition size-5'/>
                </motion.button>
                {/* features section here */}
                <div className='bg-black/60 p-6 space-y-2 lg:max-w-[350px] !mt-[60px] mx-2'>
                <h1 className='text-xl uppercase'>Tiendas Online</h1>
                <p className='text-white text-xs md:text-sm leading-loose text-justify'>
                No debes quedarte atras, hay que adaptarse o morir. Hoy en dia la competencia es muy dura y
                tus clientes pasan horas delante de la pantalla revisando redes sociales, tendencias etc.
                </p>
                </div>
                </div>
                {/* imagen content section */}
                <div className='relative'>
                    <img src={imag2} alt="imagen2"
                    className='w-full relative z-30 size-2/5' />
                    <div className='absolute -top-20 left-0 z-[1]'>
                      <h1 className='text-[80px] md:text-[90px] font-bold text-cyan-200/10 leading-none'>WEB</h1>
                    </div>
                </div>
            </section>
        </div>
      </div>
    </main>
  )
}

export default Hero