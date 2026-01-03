export default function AiHero() {
  return (
    <section className="w-full bg-gradient-to-br from-emerald-50 via-white to-green-50 rounded-3xl shadow-sm px-6 md:px-16 lg:px-24 xl:px-32 py-20 mb-14">

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-14">

        {/* LEFT TEXT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="bg-emerald-100 text-emerald-700 text-xs px-4 py-1 rounded-full mb-4">
            ✨ Your Personal AI Stylist
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold leading-[50px] md:leading-[68px] text-slate-900 max-w-xl">
            Your AI Stylist.
            <br />
            Smarter Fashion Starts Here.
          </h1>

          <p className="text-slate-600 max-w-lg mt-3">
            Your camera reads today’s colors, your wardrobe listens — and boom,
            outfits appear like poetry on fabric.
          </p>

          <div className="flex items-center gap-4 mt-8">
             <button className="group px-8 py-2.5 border-emerald-600 bg-emerald-700 text-white rounded-lg  cursor-pointer active:scale-95 transition duration-300 hover:border-emerald-600">
            <p className="relative h-6 overflow-hidden">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">Hover Me</span>
                <span className="absolute w-full top-full left-1/2 -translate-x-1/2 block transition-transform duration-300 group-hover:translate-y-[-100%]">Hover Me</span>
            </p>
        </button>

            <button className="flex items-center gap-2 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-6 h-11 rounded-full transition">
              <span>See How It Works</span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-5.png"
            alt="AI Fashion"
            className="max-w-xs sm:max-w-md lg:max-w-lg rounded-3xl "
          />

          <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-xl shadow text-xs text-slate-700">
            🎯 50K+ outfits generated
          </div>
        </div>

      </div>
    </section>
  );
}
