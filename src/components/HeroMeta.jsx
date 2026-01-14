const HeroMeta = () => {
  const whatsappLink =
    "https://wa.me/5492984417477?text=Hola%20quiero%20información%20sobre%20publicidad%20en%20Meta%20Ads%20para%20mi%20negocio";

  return (
    <section className="bg-gray-50 py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Publicidad en Meta Ads que atrae clientes reales
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600">
            Estrategias personalizadas en Facebook e Instagram para generar
            consultas, leads y ventas de forma constante.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-blue-600 text-white text-lg md:text-xl font-semibold px-12 py-5 rounded-xl hover:bg-blue-700 transition"
          >
            Contactar por WhatsApp
          </a>
        </div>

        {/* TIPOS DE CAMPAÑAS */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-14">
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
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-base md:text-lg text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* NICHOS */}
        <div className="bg-white rounded-2xl p-14 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 text-center">
            Nichos con los que trabajo
          </h2>

          <p className="text-center text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full text-base md:text-lg font-medium"
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
              className="inline-block bg-blue-600 text-white text-lg md:text-xl font-semibold px-10 py-4 rounded-xl hover:bg-blue-700 transition"
            >
              Consultar por mi negocio
            </a>
          </div>
        </div>

        {/* ESTRATEGIA */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-14">
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
                className="bg-white p-8 rounded-2xl shadow-sm"
              >
                <span className="text-base font-bold text-blue-600">
                  {item.step}
                </span>
                <h3 className="mt-3 text-xl md:text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-base md:text-lg text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MOCKUPS */}
        <div className="bg-gray-100 rounded-2xl p-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-14">
            Ejemplos de anuncios
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <p className="text-lg md:text-xl text-gray-700 italic">
                “¿Querés más clientes sin depender solo del boca en boca?
                Creamos campañas que convierten visitas en consultas reales.”
              </p>
              <p className="mt-6 font-semibold text-lg text-gray-900">
                CTA: Enviar mensaje por WhatsApp
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <p className="text-lg md:text-xl text-gray-700 italic">
                “Mostrá tu servicio a personas que realmente lo están buscando.
                Publicidad segmentada y optimizada.”
              </p>
              <p className="mt-6 font-semibold text-lg text-gray-900">
                CTA: Solicitar información
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white text-lg md:text-xl font-semibold px-10 py-4 rounded-xl hover:bg-blue-700 transition"
            >
              Quiero estos resultados
            </a>
          </div>
        </div>

        {/* RESULTADOS */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Enfoque realista en resultados
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            No prometo números irreales. Trabajo con estrategias claras,
            seguimiento constante y optimización continua para lograr
            consultas de calidad y campañas sostenibles.
          </p>
        </div>

        {/* CTA FINAL */}
        <div className="bg-blue-600 rounded-2xl p-16 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold">
            ¿Listo para atraer más clientes?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-blue-100">
            Escribime por WhatsApp y armemos la estrategia ideal para tu negocio.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-white text-blue-600 text-xl font-semibold px-12 py-5 rounded-xl hover:bg-gray-100 transition"
          >
            Hablar por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroMeta;
