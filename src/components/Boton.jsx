import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Boton = () => {
  return (
    <a
      href="https://wa.me/542984417477?text=Hola quiero hacer una consulta" // Reemplaza con tu número de WhatsApp
      className="fixed bottom-4 right-8 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} className= 'size-6' />
    </a>
  );
};

export default Boton;
