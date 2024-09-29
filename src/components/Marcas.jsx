import React from 'react'
import html from '../images/html5.png'
import css from '../images/css3.png'
import javas from '../images/javas.png'
import tailw from '../images/tailw.png'
import react from '../images/react.svg'

const Marcas = () => {
  return (
    <div className='text-center mx-auto px-12 mb-20'>
       <div className='text-center mx-auto mt-8 md:mt-20 mb-20 px-4 md:px-8'>
       <h1 className='text-3xl text-[#00ff00] font-bold mb-4'>Tecnologias que utilizamos</h1>
       </div>
    <div className='grid grid-cols-5 text-center justify-items-center mx-auto'>
        <img src={html} alt='html' className='w-10 md:w-28'/>
        <img src={css} alt='css' className='w-10 md:w-28'/>
        <img src={javas} alt='javas' className='w-10 md:w-28'/>
        <img src={tailw} alt='tailw' className='w-10 md:w-28'/>
        <img src={react} alt='react' className='w-10 md:w-28'/>
    </div>
    </div>
  )
}

export default Marcas