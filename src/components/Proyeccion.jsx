import { useState } from "react";

const Proyeccion = () => {
  const [dailyBudget, setDailyBudget] = useState("");
  const [ticket, setTicket] = useState("");
  const [result, setResult] = useState(null);

  // Supuestos
  const DAYS_PER_MONTH = 30;
  const COST_PER_LEAD = 1000;
  const CONVERSION_RATE = 0.05;

  const whatsappLink =
    "https://wa.me/5492984417477?text=Hola%20hice%20la%20proyección%20de%20ventas%20en%20tu%20web%20y%20quiero%20hablar%20sobre%20Meta%20Ads";

  const calculateProjection = () => {
    if (!dailyBudget || !ticket) return;

    const monthlyInvestment = dailyBudget * DAYS_PER_MONTH;
    const monthlyLeads = Math.floor(monthlyInvestment / COST_PER_LEAD);
    const newClients = Math.floor(monthlyLeads * CONVERSION_RATE);
    const monthlyRevenue = newClients * ticket;

    setResult({
      monthlyInvestment,
      monthlyLeads,
      newClients,
      monthlyRevenue,
    });
  };

  const resetFields = () => {
    setDailyBudget("");
    setTicket("");
    setResult(null);
  };

  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            📊 Proyectá tus ventas mensuales con Meta Ads
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Ingresá tu inversión diaria y tu ticket promedio. 
            El resto lo calculamos por vos.
          </p>
        </div>

        {/* Calculator */}
        <div className="bg-gray-50 rounded-2xl p-10 md:p-14 shadow-sm grid md:grid-cols-2 gap-12">

          {/* Inputs */}
          <div className="space-y-8">
            <div>
              <label className="block text-base md:text-lg font-semibold text-gray-700 mb-3">
                💰 Inversión diaria en publicidad (ARS)
              </label>
              <input
                type="number"
                value={dailyBudget}
                onChange={(e) => setDailyBudget(Number(e.target.value))}
                placeholder="Ej: 20000"
                className="w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-lg md:text-xl py-3 pl-4"
              />
            </div>

            <div>
              <label className="block text-base md:text-lg font-semibold text-gray-700 mb-3">
                🧾 Ticket promedio de venta (ARS)
              </label>
               <input
                type="number"
                value={ticket}
                onChange={(e) => setTicket(Number(e.target.value))}
                placeholder="Ej: 500000"
                className="w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 
                text-lg md:text-xl py-3 pl-4"
               />

            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <button
                onClick={calculateProjection}
                className="w-full bg-blue-600 text-white text-lg md:text-xl font-semibold py-4 rounded-xl hover:bg-blue-700 transition"
              >
                Calcular proyección
              </button>

              <button
                onClick={resetFields}
                className="w-full bg-gray-200 text-gray-700 text-lg md:text-xl font-semibold py-4 rounded-xl hover:bg-gray-300 transition"
              >
                Limpiar
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl p-10 shadow-sm flex flex-col justify-center">
            {result ? (
              <div className="space-y-7 text-center">
                <div>
                  <p className="text-base md:text-lg text-gray-500">
                    📅 Inversión mensual
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">
                    ${result.monthlyInvestment.toLocaleString("es-AR")}
                  </p>
                </div>

                <div>
                  <p className="text-base md:text-lg text-gray-500">
                    📩 Leads mensuales estimados
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">
                    {result.monthlyLeads}
                  </p>
                </div>

                <div>
                  <p className="text-base md:text-lg text-gray-500">
                    👥 Clientes nuevos (5%)
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">
                    {result.newClients}
                  </p>
                </div>

                <div>
                  <p className="text-base md:text-lg text-gray-500">
                    💸 Ventas estimadas mensuales
                  </p>
                  <p className="text-3xl md:text-4xl font-bold text-green-600">
                    ${result.monthlyRevenue.toLocaleString("es-AR")}
                  </p>
                </div>

                <p className="text-sm md:text-base text-gray-400">
                  *Estimaciones basadas en promedios de campañas en Meta Ads.
                  No representan garantías.
                </p>
              </div>
            ) : (
              <p className="text-center text-lg md:text-xl text-gray-400">
                👉 Completá los datos para ver tu proyección mensual
              </p>
            )}
          </div>
        </div>

        {/* CTA WhatsApp */}
        <div className="mt-20 bg-blue-600 rounded-2xl p-14 text-center text-white">
          <h3 className="text-4xl font-bold">
            ¿Querés convertir esta proyección en ventas reales?
          </h3>
          <p className="mt-6 text-xl text-blue-100">
            Escribime por WhatsApp y armamos tu estrategia de Meta Ads.
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

export default Proyeccion;
