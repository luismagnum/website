/* eslint-disable react/prop-types */
import { FaWhatsapp, FaBrain, FaChild, FaPuzzlePiece, FaBookOpen, FaRocket, FaLightbulb } from "react-icons/fa";
import { MdOutlineScreenSearchDesktop, MdFamilyRestroom } from "react-icons/md";

const whatsappNumber = "5492984417477";

const sendWhatsApp = (product) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hola, quiero información sobre el cuaderno: ${product}`
  )}`;

const Ebook = () => {
  return (
    <section className="w-full bg-[#0D1B4C] text-white py-16 px-4 md:px-10 overflow-hidden">
      {/* HERO */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-[#FF5B4D] text-white px-4 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg">
            Actividades Inteligentes para Niños
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight uppercase tracking-tight">
            Menos Pantallas. <br />
            <span className="text-[#FFB703]">Más Creatividad,</span>
            <br />
            Más Desarrollo.
          </h1>

          <p className="mt-6 text-lg text-slate-200 leading-relaxed max-w-xl">
            Descubre nuestros cuadernos digitales diseñados para estimular la mente de los niños, mejorar su concentración y brindar soluciones reales a padres que buscan aprendizaje divertido y útil.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#cuadernos"
              className="bg-[#FF5B4D] hover:bg-[#ff4434] transition px-8 py-4 rounded-xl font-bold text-white shadow-xl"
            >
              Ver Cuadernos
            </a>

            <a
              href={sendWhatsApp("Quiero información de los cuadernos")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl font-bold shadow-xl"
            >
              <FaWhatsapp /> Comprar por WhatsApp
            </a>
          </div>
        </div>

        {/* Visual block */}
        <div className="grid sm:grid-cols-2 gap-5">
          <CardVisual
            title="Altas Capacidades"
            icon={<FaBrain />}
            color="bg-[#FF5B4D]"
            text="Retos mentales, lógica y pensamiento avanzado"
          />
          <CardVisual
            title="Chau Pantallas"
            icon={<MdOutlineScreenSearchDesktop />}
            color="bg-[#FFB703] text-[#0D1B4C]"
            text="Actividades creativas lejos del celular"
          />
        </div>
      </div>

      {/* BENEFICIOS */}
      <div className="max-w-7xl mx-auto mt-24">
        <h2 className="text-center text-4xl font-black uppercase tracking-wide">
          ¿Qué soluciones ofrecen a los padres?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <FeatureCard
            icon={<FaPuzzlePiece />}
            title="Menos aburrimiento"
            text="Niños ocupados con actividades educativas y divertidas."
          />
          <FeatureCard
            icon={<MdFamilyRestroom />}
            title="Tiempo de calidad"
            text="Perfecto para compartir en familia o usar en casa."
          />
          <FeatureCard
            icon={<FaLightbulb />}
            title="Más desarrollo"
            text="Estimula creatividad, lógica, concentración y observación."
          />
        </div>
      </div>

      {/* PRODUCTOS */}
      <div id="cuadernos" className="max-w-7xl mx-auto mt-24 grid lg:grid-cols-2 gap-10">
        <ProductCard
          title="Retos para Mentes Curiosas"
          subtitle="Especial para niños con altas capacidades"
          color="from-[#FF5B4D] to-[#D7263D]"
          points={[
            "Retos de lógica y pensamiento crítico",
            "Sudoku infantil y patrones",
            "Observación extrema",
            "Creatividad e imaginación",
            "Ideal para niños que aprenden rápido",
          ]}
          cta="Quiero Altas Capacidades"
        />

        <ProductCard
          title="Chau Pantallas"
          subtitle="Actividades para alejar a los niños del celular"
          color="from-[#FFB703] to-[#FB8500]"
          points={[
            "Colorear y crear",
            "Laberintos y juegos visuales",
            "Buscar diferencias",
            "Motricidad e imaginación",
            "Ideal para casa y viajes",
          ]}
          cta="Quiero Chau Pantallas"
        />
      </div>

      {/* EJEMPLOS VISUALES */}
      <div className="max-w-7xl mx-auto mt-24">
        <h2 className="text-center text-4xl font-black uppercase mb-10">
          ¿Qué incluye?
        </h2>

        <div className="grid md:grid-cols-4 gap-5">
          <MiniBox icon={<FaBookOpen />} title="Sudoku" />
          <MiniBox icon={<FaRocket />} title="Laberintos" />
          <MiniBox icon={<FaBrain />} title="Lógica" />
          <MiniBox icon={<FaChild />} title="Creatividad" />
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="max-w-5xl mx-auto mt-24 bg-gradient-to-r from-[#FF5B4D] to-[#D7263D] rounded-3xl p-10 text-center shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">
          Ayuda a tu hijo a aprender jugando 🚀
        </h2>

        <p className="mt-4 text-lg text-white/90">
          Escríbeme por WhatsApp y te ayudo a elegir el cuaderno ideal.
        </p>

        <a
          href={sendWhatsApp("Quiero comprar un cuaderno")}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 px-8 py-5 rounded-2xl font-black text-lg shadow-xl transition"
        >
          <FaWhatsapp className="text-xl" /> Comprar por WhatsApp
        </a>

        <p className="mt-8 text-sm font-bold opacity-90">
          Diseñado por Luis Diaz.MKT
        </p>
      </div>
    </section>
  );
};

function CardVisual({ title, icon, color, text }) {
  return (
    <div className={`rounded-3xl p-8 shadow-xl ${color}`}>
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-3 font-medium">{text}</p>
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-white text-[#0D1B4C] rounded-3xl p-7 shadow-xl">
      <div className="text-4xl text-[#FF5B4D] mb-4">{icon}</div>
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-2 text-slate-700">{text}</p>
    </div>
  );
}

function ProductCard({ title, subtitle, color, points, cta }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl text-[#0D1B4C]">
      <div className={`bg-gradient-to-r ${color} p-8 text-white`}>
        <h3 className="text-3xl font-black">{title}</h3>
        <p className="mt-2 font-semibold">{subtitle}</p>
      </div>

      <div className="p-8">
        <ul className="space-y-3">
          {points.map((item) => (
            <li key={item} className="flex gap-3 items-start">
              <span className="text-green-500 font-black">✔</span>
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>

        <a
          href={sendWhatsApp(cta)}
          target="_blank"
          rel="noreferrer"
          className="mt-8 w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition px-6 py-4 rounded-2xl text-white font-black"
        >
          <FaWhatsapp /> Comprar Ahora
        </a>
      </div>
    </div>
  );
}

function MiniBox({ icon, title }) {
  return (
    <div className="bg-white rounded-2xl p-6 text-center text-[#0D1B4C] shadow-lg">
      <div className="text-4xl text-[#FF5B4D] mb-4">{icon}</div>
      <h4 className="font-black text-lg">{title}</h4>
    </div>
  );
}

export default Ebook;
