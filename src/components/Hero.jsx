import { FaFacebookF, FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';
import marketing from '../images/marketing.png';

const Hero = () => {
  return (
    <section className="bg-black text-white pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Texto principal */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#00ff00]">
            Impulsa tu negocio con <br /> Marketing Digital Estratégico
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-xl mb-8">
           Me encargo de crear y optimizar campañas publicitarias en plataformas como Meta Ads
           para que tu negocio llegue a más personas, aumente sus ventas y genere resultados reales.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            

            <a
              href="https://wa.me/5492984417477" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-semibold px-6 py-3 rounded flex items-center gap-2 hover:bg-green-400 transition duration-300"
            >
              <FaWhatsapp /> Contratar tus servicios
            </a>
          </div>
        </div>

       {/* Imagen o ícono */}
    <div className="flex justify-center md:justify-end">
      <div className="relative w-40 h-40 sm:w-56 sm:h-56 bg-white rounded-full overflow-hidden shadow-lg">
      <img
      src={marketing}
      alt="Meta Ads"
      className="w-full h-full object-cover"
      />
      </div>
    </div>
    </div>
    </section>
  );
};

export default Hero;
