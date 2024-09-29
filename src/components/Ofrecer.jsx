import imgd from '../images/surf.png'
import imga from '../images/imga.png'

const Ofrecer = () => {
    return (
      <div className='text-center mx-auto mt-10 md:mt-20 mb-20 px-4 md:px-8'>
        <h1 className='text-3xl text-[#00ff00] font-bold mb-4'>¿Requieres un diseño Web?</h1>
         <h2 className="text-xl md:text-2xl text-[#00ff00a5] font-bold">Realizamos Diseño Web Profesional y a tu medida</h2>
         <h2 className="text-xl md:text-2xl text-[#00ff00a5] font-bold">Creacion de paginas web para ventas online</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div data-aos="fade-right" className='text-center mx-auto w-full md:w-3/4 p-4 rounded-lg shadow-md'>
            <img src={imga} alt='surf' width={350}  className="mx-auto"/>
            <div className='p-2'>
              <h2 className='text-xl text-[#00ff00a5] font-semibold mb-2'>Te ayudamos a crecer</h2>
              <p className='text-gray-400 sm:text-xs md:text-xl text-justify'>
                Diseñamos tu espacio en internet, tiendas online, catalogos, webs app. Desarrollamos aplicaciones de alta calidad,
                con un enfoque unico orientado al diseño y la buena funcionalidad.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className='text-center mx-auto w-full md:w-3/4 p-4 rounded-lg shadow-md'>
            <img src={imgd} alt='imagen' width={350} className="mx-auto"/>
            <div className='p-2'>
              <h2 className='text-xl text-[#00ff00a5] font-semibold mb-2'>Quieres alcanzar el exito</h2>
              <p className='text-gray-400 sm:text-xs md:text-xl text-justify'>
               Realmente creemos que con una estrategia web correcta, comunicacion acertada y diseño creativo,
               tu empresa puede sacar un provecho de internet MUY superior al que imaginas posible.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Ofrecer

  