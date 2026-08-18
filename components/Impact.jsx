import Image from "next/image";

export default function Impact() {
  return (
    <section className="relative w-full py-28 md:py-36 overflow-hidden flex items-center bg-[#1b3b36]">
      
      {/* --- BACKGROUND TEXTURE --- */}
      {/* Ensure you place your textured background image in the /public folder */}
      <div className="absolute inset-0 z-0 mix-blend-overlay opacity-60">
        {/* <Image
          src="/dark-green-silk.jpg" // Uncomment and update this path
          alt="Dark green abstract texture"
          fill
          className="object-cover"
        /> */}
      </div>
      
      {/* Gradient Overlay for depth and text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#142e2a]/90 via-[#1b3b36]/50 to-[#1b3b36]/80 z-0"></div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: Large Statistics */}
        <div className="flex flex-wrap gap-16 md:gap-24">
          <div className="space-y-1">
            <h3 className="text-6xl md:text-7xl font-normal tracking-tighter text-white">
              99.9%
            </h3>
            <p className="text-sm md:text-base text-emerald-100/80 font-light">
              Guaranteed system uptime
            </p>
          </div>
          
          <div className="space-y-1">
            <h3 className="text-6xl md:text-7xl font-normal tracking-tighter text-white">
              24/7
            </h3>
            <p className="text-sm md:text-base text-emerald-100/80 font-light">
              Automated hardware sync
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Heading text */}
        <div className="space-y-3 md:pl-12">
          <span className="text-[10px] md:text-xs font-semibold tracking-widest text-emerald-300/80 uppercase">
            PERFORMANCE
          </span>
          <h2 className="text-4xl md:text-[44px] font-normal text-white tracking-tight leading-[1.15]">
            Engineer and automate <br />
            the solutions
          </h2>
        </div>

      </div>
    </section>
  );
}