const HeroMeta = () => {
  const whatsappLink =
    "https://wa.me/5492984417477?text=Hola%20quiero%20información%20sobre%20publicidad%20en%20Meta%20Ads%20para%20mi%20negocio";

  return (
    <section className="bg-[#050B1A] py-24 px-4 text-white">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold">
            Publicidad en Meta Ads que atrae clientes reales
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-200">
            Estrategias personalizadas en Facebook e Instagram para generar
            consultas, leads y ventas de forma constante.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-lg md:text-xl font-semibold px-12 py-5 rounded-xl hover:scale-105 transition shadow-lg shadow-cyan-500/30"
          >
            Contactar por WhatsApp
          </a>
        </div>

        {/* TIPOS DE CAMPAÑAS */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
            Tipos de campañas que ofrezco
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Tráfico",
                desc: "Atraemos personas interesadas a tu WhatsApp, Instagram o sitio web.",
              },
              {
                title: "Leads",
                desc: "Captamos datos de clientes potenciales con formularios optimizados.",
              },
              {
                title: "WhatsApp",
                desc: "Generamos conversaciones reales que se convierten en ventas.",
              },
              {
                title: "Remarketing",
                desc: "Reimpactamos a personas que ya interactuaron con tu marca.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:border-cyan-400 transition"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-cyan-400">
                  {item.title}
                </h3>
                <p className="mt-4 text-base md:text-lg text-blue-200">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* NICHOS */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-14 backdrop-blur-lg">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
            Nichos con los que trabajo
          </h2>

          <p className="text-center text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">
            Las estrategias se adaptan a distintos rubros y modelos de negocio.
            Cada campaña es personalizada.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {[
              "Negocios locales",
              "Servicios profesionales",
              "Emprendedores",
              "Tiendas físicas",
              "Marcas personales",
              "Ecommerce",
              "Educación y formación",
            ].map((nicho, index) => (
              <span
                key={index}
                className="bg-cyan-500/10 text-cyan-300 px-6 py-3 rounded-full text-base md:text-lg font-medium border border-cyan-400/20"
              >
                {nicho}
              </span>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-lg md:text-xl font-semibold px-10 py-4 rounded-xl hover:scale-105 transition shadow-lg shadow-cyan-500/30"
            >
              Consultar por mi negocio
            </a>
          </div>
        </div>

        {/* ESTRATEGIA */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
            Estrategia de trabajo
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Análisis",
                desc: "Analizamos tu negocio, público y objetivo principal.",
              },
              {
                step: "02",
                title: "Mensaje",
                desc: "Creamos el mensaje correcto según el problema del cliente.",
              },
              {
                step: "03",
                title: "Creatividades",
                desc: "Diseñamos anuncios que detienen el scroll.",
              },
              {
                step: "04",
                title: "Optimización",
                desc: "Medimos, ajustamos y escalamos resultados.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-lg"
              >
                <span className="text-cyan-400 font-bold">
                  {item.step}
                </span>
                <h3 className="mt-3 text-xl md:text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-4 text-base md:text-lg text-blue-200">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MOCKUPS */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-14 backdrop-blur-lg">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
            Ejemplos de anuncios
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <p className="text-lg md:text-xl text-blue-200 italic">
                “¿Querés más clientes sin depender solo del boca en boca?
                Creamos campañas que convierten visitas en consultas reales.”
              </p>
              <p className="mt-6 font-semibold text-cyan-400">
                CTA: Enviar mensaje por WhatsApp
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <p className="text-lg md:text-xl text-blue-200 italic">
                “Mostrá tu servicio a personas que realmente lo están buscando.
                Publicidad segmentada y optimizada.”
              </p>
              <p className="mt-6 font-semibold text-cyan-400">
                CTA: Solicitar información
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-lg md:text-xl font-semibold px-10 py-4 rounded-xl hover:scale-105 transition shadow-lg shadow-cyan-500/30"
            >
              Quiero estos resultados
            </a>
          </div>
        </div>

        {/* RESULTADOS */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Enfoque realista en resultados
          </h2>
          <p className="text-lg md:text-xl text-blue-200">
            No prometo números irreales. Trabajo con estrategias claras,
            seguimiento constante y optimización continua para lograr
            consultas de calidad y campañas sostenibles.
          </p>
        </div>

        {/* CTA FINAL */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-16 text-center text-black shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold">
            ¿Listo para atraer más clientes?
          </h2>
          <p className="mt-6 text-lg md:text-xl">
            Escribime por WhatsApp y armemos la estrategia ideal para tu negocio.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-black text-white text-xl font-semibold px-12 py-5 rounded-xl hover:scale-105 transition"
          >
            Hablar por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroMeta;