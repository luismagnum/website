import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Timeline = () => {
  useEffect(() => {
    AOS.refresh(); 
  }, []);

  const timelineData = [
    { date: 'Inicio', title: 'Definicion de objetivos', description: 'Nos reunimos para comprender tus necesidades y objetivos.' },
    { date: 'Semana 1', title: 'Investigacion y planificacion', description: 'Realizo una investigación exhaustiva sobre tu industria y competidores.' },
    { date: 'Semana 2', title: 'Diseño del Prototipo', description: 'Con la información obtenida, creo un prototipo visual del sitio web, donde podrás ver la estructura y el diseño general.' },
    { date: 'Semana 3', title: 'Desarrollo y Programación', description: 'Después de la aprobación del diseño, procedo a desarrollar el sitio web, implementando el código necesario para que funcione correctamente en todas las plataformas.' },
    { date: 'Fin', title: 'Entrega, Revisión y Lanzamiento', description: 'Una vez terminado el desarrollo, te presento el sitio web completo para que lo revises. Realizo ajustes finales según tus observaciones.' },
  ];

  return (
    <div className='text-center mx-auto mt-0 md:mt-10 mb-12 px-4 md:px-8'>
        <h1 className='text-2xl text-[#00ff00] font-bold mb-4'>Proceso de diseño Web</h1>
    <div data-aos="fade-down"  className="flex flex-col md:grid md:grid-cols-9 mx-auto p-2 text-gray-950">
      {timelineData.map((item, index) => (
        <div
          key={index}
          className="flex md:contents"
          data-aos="fade-up" 
        >
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#00ff00] pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#00ff00a5] shadow"></div>
          </div>
          <div className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md bg-gray-500">
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="leading-tight text-justify">{item.description}</p>
            <span className="text-sm text-[#00ff00]">{item.date}</span>
          </div>
        </div>
      ))}
    </div>
    
    </div>
  );
};

export default Timeline;