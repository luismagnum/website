const Navbar = () => {
  const whatsappLink =
    "https://wa.me/5492984417477?text=Hola%20quiero%20información%20sobre%20publicidad%20en%20Meta%20Ads";

  return (
    <header className="w-full bg-[#050B1A]/80 backdrop-blur-xl border-b border-white/10 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Brand */}
        <div className="flex flex-col leading-tight">
          <h1 className="text-xl md:text-2xl font-bold text-white">
            Luis Enrique Díaz
          </h1>
          <span className="mt-1 text-sm md:text-base text-blue-300">
            Paid Media | Marketing Digital
          </span>
        </div>

        {/* WhatsApp CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-sm md:text-lg font-semibold px-6 md:px-8 py-3 rounded-xl hover:scale-105 transition shadow-lg shadow-cyan-500/30"
        >
          WhatsApp
        </a>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"></div>
    </header>
  );
};

export default Navbar;