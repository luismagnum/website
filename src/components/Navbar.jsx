const Navbar = () => {
  const whatsappLink =
    "https://wa.me/5492984417477?text=Hola%20quiero%20información%20sobre%20publicidad%20en%20Meta%20Ads";

  return (
    <header className="w-full bg-white/95 backdrop-blur shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Brand */}
        <div className="flex flex-col leading-tight">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            Luis Enrique Díaz
          </h1>
          <span className="mt-1 text-sm md:text-base text-gray-500">
            Paid Media| Marketing Digital
          </span>
        </div>

        {/* WhatsApp CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white text-sm md:text-lg font-semibold px-6 md:px-8 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Navbar;
