import { ArrowUpRight, Cpu, ShieldCheck, Zap } from "lucide-react";

export default function Services() {
  return (
    <section className="w-full bg-slate-50 py-20 border-t border-slate-100" id="services">
      <div className="w-5/6 mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-semibold tracking-widest text-emerald-800 uppercase">
              VALUES
            </span>
            <h2 className="text-4xl md:text-5xl font-normal text-slate-950 tracking-tight leading-tight">
              Engineering with purpose, <br />
              <span className="font-serif italic font-light">built for scale</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Qaas develops high-performance software and reliable embedded hardware 
              engineered to streamline complex operational workflows with maximum uptime.
            </p>
          </div>
        </div>

        {/* --- 3-CARD VALUES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Precision Engineering */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-8 flex flex-col justify-between h-[360px] hover:border-slate-300 transition-all group">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-800 group-hover:bg-slate-50 transition-colors">
                <Cpu className="w-6 h-6 stroke-[1.25]" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-normal text-slate-950 tracking-tight">
                  Precision Engineering
                </h3>
                <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                  We write clean, lightweight firmware and software code built to handle continuous real-time execution without overhead.
                </p>
              </div>
            </div>

            <div>
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Hardware-Software Harmony */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-8 flex flex-col justify-between h-[360px] hover:border-slate-300 transition-all group">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-800 group-hover:bg-slate-50 transition-colors">
                <Zap className="w-6 h-6 stroke-[1.25]" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-normal text-slate-950 tracking-tight">
                  Seamless Integration
                </h3>
                <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                  Direct communication between physical devices, interactive touch screens, and cloud management dashboards.
                </p>
              </div>
            </div>

            <div>
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: Featured Accent Card (Cream background + Curved Top-Right Corner) */}
          <div className="bg-[#f2f1e8] rounded-2xl rounded-tr-[60px] p-8 flex flex-col justify-between h-[360px] relative overflow-hidden group">
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-full border border-slate-300/80 flex items-center justify-center text-slate-900">
                <ShieldCheck className="w-6 h-6 stroke-[1.25]" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-normal text-slate-950 tracking-tight">
                  Production Reliability
                </h3>
                <p className="text-xs md:text-sm text-slate-700 font-light leading-relaxed">
                  Our systems—like the Mareey kiosk—are battle-tested in live operational environments to ensure continuous 24/7 uptime.
                </p>
              </div>
            </div>

            <div className="relative z-10">
              <button className="w-10 h-10 rounded-full bg-[#1b3b36] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}