const MetaFooter = () => {
  const facebookUrl = "https://www.facebook.com/luisediazmarketing?locale=es_LA";
  const instagramUrl = "https://instagram.com/luisdiaz.marketing";

  return (
    <footer className="bg-[#050B1A] text-blue-200 py-14 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        {/* CONTENIDO PRINCIPAL */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              Meta Ads Specialist
            </h3>
            <p className="mt-3 text-blue-300 max-w-md">
              Estrategias de publicidad en Facebook e Instagram para atraer
              clientes reales y generar ventas constantes.
            </p>
          </div>

          {/* REDES */}
          <div className="flex items-center gap-6">

            {/* Facebook */}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener"
              className="group bg-white/5 border border-white/10 p-4 rounded-full hover:bg-cyan-500/20 transition shadow-md"
            >
              <svg
                className="w-6 h-6 text-blue-300 group-hover:text-cyan-400 transition"
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
              rel="noopener"
              className="group bg-white/5 border border-white/10 p-4 rounded-full hover:bg-cyan-500/20 transition shadow-md"
            >
              <svg
                className="w-6 h-6 text-blue-300 group-hover:text-cyan-400 transition"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>

          </div>
        </div>

        {/* DIVISOR */}
        <div className="border-t border-white/10 my-10"></div>

        {/* COPYRIGHT */}
        <div className="text-center text-blue-400 text-sm">
          © {new Date().getFullYear()} Luis Díaz Marketing. Todos los derechos reservados.
        </div>

        {/* VOLVER ARRIBA */}
        <div className="flex justify-center mt-8">
          <a
            href="#top"
            className="flex items-center gap-2 text-blue-400 hover:text-cyan-400 transition group"
          >
            <span>Volver arriba</span>
            <svg
              className="w-5 h-5 transform group-hover:-translate-y-1 transition"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default MetaFooter;