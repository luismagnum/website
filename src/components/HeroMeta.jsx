const HeroMeta = () => {
  const whatsappLink =
    "https://wa.me/5492984417477?text=Hola%20quiero%20información%20sobre%20publicidad%20en%20Meta%20Ads%20para%20mi%20negocio";

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Publicidad en Meta Ads que atrae clientes reales
          </h1>
          <p className="mt-5 text-lg text-gray-600">
            Estrategias personalizadas en Facebook e Instagram para generar
            consultas, leads y ventas de forma constante.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-blue-600 text-white font-semibold px-10 py-4 rounded-xl hover:bg-blue-700 transition"
          >
            Contactar por WhatsApp
          </a>
        </div>

        {/* TIPOS DE CAMPAÑAS */}
        <div>
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
            Tipos de campañas que ofrezco
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
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
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* NICHOS */}
        <div className="bg-white rounded-2xl p-12 shadow-sm">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
            Nichos con los que trabajo
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Las estrategias se adaptan a distintos rubros y modelos de negocio.
            Cada campaña es personalizada.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
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
                className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full text-sm font-medium"
              >
                {nicho}
              </span>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Consultar por mi negocio
            </a>
          </div>
        </div>

        {/* ESTRATEGIA */}
        <div>
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
            Estrategia de trabajo
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
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
                className="bg-white p-6 rounded-2xl shadow-sm"
              >
                <span className="text-sm font-bold text-blue-600">
                  {item.step}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MOCKUPS */}
        <div className="bg-gray-100 rounded-2xl p-12">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
            Ejemplos de anuncios
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-gray-700 italic">
                “¿Querés más clientes sin depender solo del boca en boca?
                Creamos campañas que convierten visitas en consultas reales.”
              </p>
              <p className="mt-4 font-semibold text-gray-900">
                CTA: Enviar mensaje por WhatsApp
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-gray-700 italic">
                “Mostrá tu servicio a personas que realmente lo están buscando.
                Publicidad segmentada y optimizada.”
              </p>
              <p className="mt-4 font-semibold text-gray-900">
                CTA: Solicitar información
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Quiero estos resultados
            </a>
          </div>
        </div>

        {/* RESULTADOS */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Enfoque realista en resultados
          </h2>
          <p className="text-gray-600">
            No prometo números irreales. Trabajo con estrategias claras,
            seguimiento constante y optimización continua para lograr
            consultas de calidad y campañas sostenibles.
          </p>
        </div>

        {/* CTA FINAL */}
        <div className="bg-blue-600 rounded-2xl p-14 text-center text-white">
          <h2 className="text-4xl font-bold">
            ¿Listo para atraer más clientes?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Escribime por WhatsApp y armemos la estrategia ideal para tu negocio.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-white text-blue-600 font-semibold px-10 py-4 rounded-xl hover:bg-gray-100 transition"
          >
            Hablar por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroMeta;
