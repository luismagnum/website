import {
  FaFacebookF,
  FaInstagram,
  FaLaptopCode,
  FaBullhorn,
  FaSearch,
  FaEnvelope,
  FaChartLine,
  FaPalette
} from 'react-icons/fa';

const services = [
  {
    title: "Manejo de Redes Sociales",
    icon: <FaInstagram className="text-pink-500 text-4xl" />,
    description: "Creamos y gestionamos contenido estratégico para Instagram, Facebook y más.",
  },
  {
    title: "Diseño de Páginas Web",
    icon: <FaLaptopCode className="text-blue-400 text-4xl" />,
    description: "Webs modernas, responsivas y optimizadas para convertir visitantes en clientes.",
  },
  {
    title: "Publicidad en Redes Sociales",
    icon: <FaBullhorn className="text-yellow-400 text-4xl" />,
    description: "Campañas efectivas en Meta Ads, Instagram Ads y más.",
  },
  {
    title: "Meta Ads",
    icon: <FaFacebookF className="text-blue-600 text-4xl" />,
    description: "Aumenta tu alcance con campañas segmentadas y optimizadas en Meta.",
  },
  {
    title: "Instagram Ads",
    icon: <FaInstagram className="text-pink-600 text-4xl" />,
    description: "Llega a tu audiencia con anuncios visuales potentes en Instagram.",
  },
  {
    title: "Presupuesto Personalizado",
    icon: <FaPalette className="text-green-400 text-4xl" />,
    description: "Nos adaptamos a tus objetivos y presupuesto sin comprometer calidad.",
  },
  {
    title: "Optimización SEO",
    icon: <FaSearch className="text-indigo-400 text-4xl" />,
    description: "Mejora tu visibilidad en buscadores y atrae tráfico orgánico.",
  },
  {
    title: "Email Marketing",
    icon: <FaEnvelope className="text-red-400 text-4xl" />,
    description: "Automatiza y personaliza correos para fidelizar a tus clientes.",
  },
  {
    title: "Análisis de Métricas",
    icon: <FaChartLine className="text-purple-500 text-4xl" />,
    description: "Informes claros para tomar decisiones basadas en datos.",
  },
];

const Servicios = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00ff00] mb-4">
          Servicios de Marketing Digital
        </h2>
        <p className="text-white text-lg max-w-2xl mx-auto">
          Potencia tu negocio con soluciones creativas, efectivas y personalizadas. ¡Haz que tu marca destaque!
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#00ff00]">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
