import whatsap from '../images/whatsapp-fill.svg'
import logo from '../images/logo.png'

const Footer = () => {
    return (
    <footer className='bg-gray-950 p-4 mb-10'>
        <span>
        <img src={logo} alt='' width={150} className='text-center mx-auto mb-6 object-contain'/>
        </span>
      <div className='md:flex md:justify-between md: items-center sm:px-12 px-4 py-7'>
        <h1 className='text-gray-400 lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'><span className='text-[#00ff00] mr-3'>SpeedWeb</span>Te gustaria empezar un proyecto con nosotros?</h1>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <h1 className='text-[#00ff00] text-3xl font-semibold sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'>Contactame Ya..</h1>
          <button className="inline-block font-semibold tracking-wide border-none justify-center text-center bg-[#ffffff19] hover:text-[#ffffff19] duration-300 px-3 py-2 font-[Poppins] rounded-xl md:rounded-md  md: text-white w-full md:w-auto">
          <a href="https://wa.me/542984417477?text=Hola quiero un presupuesto " target="_blank" className="flex items-center justify-center space-x-2">
          <img src={whatsap} alt="what" width="30px" height="30px" className='flex-shrink-0'/>
          <span className='text-[#00ff00a5] hover:text-gray-400 font-bold sm:text-sm md:text-base'>Quiero hacer una consulta</span>
          </a>
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center file:mx-auto pt-2 text-gray-400 text-sm pb-8 mt-20'>
        <span className='text-base'>Developer Web Luis E. Diaz</span>
        <span className='text-base'>@2024 SpeedWeb</span>
      </div>
      <div className="max-w-md mx-auto mt-8 p-0.5 bg-[#00ff00] shadow-md rounded-lg"/>
        <div>
        <button className='flex text-center justify-center mx-auto mt-10'>
        <a className='text-[#00ff00] font-semibold text-2xl hover:text-gray-600 mb-10' href='./'>HOME</a>
        </button>
        </div>
    </footer>
    )
  }
  
  export default Footer
  