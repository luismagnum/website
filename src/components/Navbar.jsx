const Navbar = () => {
  const whatsappLink =
    "https://wa.me/5492984417477?text=Hola%20quiero%20información%20sobre%20publicidad%20en%20Meta%20Ads";

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Brand */}
        <div className="flex flex-col leading-tight">
          <h1 className="text-lg md:text-xl font-bold text-gray-900">
            Luis Enrique Díaz
          </h1>
          <span className="text-xs md:text-sm text-gray-500">
            Paid Media · Trafficker Digital · Marketing Digital
          </span>
        </div>

        {/* WhatsApp CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition text-sm md:text-base"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Navbar;

 