const MetaFooter = () => {
  const facebookUrl = "https://www.facebook.com/luisediazmarketing/?locale=es_LA";
  const instagramUrl = "https://www.instagram.com/luisdiaz.marketing/";

  return (
    <footer className="bg-gray-900 text-gray-300 py-14 px-4">
      <div className="max-w-6xl mx-auto">

        {/* CONTENIDO PRINCIPAL */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* MARCA */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              Meta Ads Specialist
            </h3>
            <p className="mt-3 text-gray-400 max-w-md">
              Estrategias de publicidad en Facebook e Instagram para atraer
              clientes reales y generar ventas constantes.
            </p>
          </div>

          {/* REDES SOCIALES */}
          <div className="flex items-center gap-6">

            {/* Facebook */}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 p-4 rounded-full hover:bg-blue-600 transition"
            >
              <svg
                className="w-6 h-6 text-gray-300 group-hover:text-white transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.78-3.88 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.64.77-1.64 1.56v1.87h2.79l-.45 2.9h-2.34V22c4.78-.75 8.44-4.91 8.44-9.93z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 p-4 rounded-full hover:bg-pink-600 transition"
            >
              <svg
                className="w-6 h-6 text-gray-300 group-hover:text-white transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.55 4 20 5.45 20 7.75v8.5C20 18.55 18.55 20 16.25 20h-8.5C5.45 20 4 18.55 4 16.25v-8.5C4 5.45 5.45 4 7.75 4zm4.25 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.75-.88a1.12 1.12 0 100 2.24 1.12 1.12 0 000-2.24z" />
              </svg>
            </a>

          </div>
        </div>

        {/* DIVISOR */}
        <div className="border-t border-gray-800 my-10"></div>

        {/* COPYRIGHT */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Meta Ads Specialist. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
};

export default MetaFooter;
