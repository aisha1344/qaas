import { Cpu, Server, Terminal, Workflow } from "lucide-react";

export default function About() {
  return (
    <section className="w-full bg-slate-50 py-12 sm:py-16 md:py-20 overflow-hidden" id="about">
      <div className="w-[90%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-16 space-y-2 sm:space-y-3">
          <span className="text-xs font-semibold tracking-widest text-emerald-800 uppercase block">
            ABOUT QAAS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-slate-950 tracking-tight leading-tight">
            One ecosystem for all your <br className="hidden sm:inline" />
            <span className="font-serif italic font-light">engineering needs</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed pt-1 max-w-xl mx-auto">
            Qaas bridges physical hardware controllers with enterprise cloud backends, 
            eliminating friction between operational assets and digital command centers.
          </p>
        </div>

        {/* --- TWO CARDS LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* CARD 1: LEFT (Engineering & System Control) */}
          <div className="lg:col-span-5 bg-[#1b3b36] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden min-h-[380px] sm:min-h-[420px]">
            
            <div className="space-y-3 sm:space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-emerald-300">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-normal tracking-tight leading-snug">
                Bespoke Software & Embedded Systems
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/70 font-light leading-relaxed">
                From low-level microcontrollers and custom firmware to highly available cloud API architectures.
              </p>
            </div>

            {/* Custom Bar Graph / Visual Graphic at Bottom */}
            <div className="relative z-10 pt-6 sm:pt-8">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-[11px] sm:text-xs font-mono text-emerald-300">Engineering Precision</span>
                <span className="text-base sm:text-lg font-light text-white font-mono">100% Custom</span>
              </div>
              
              {/* Styled Bar Chart */}
              <div className="flex items-end gap-2 sm:gap-3 h-20 sm:h-28 pt-4 border-t border-emerald-800/60">
                <div className="w-full bg-emerald-900/60 rounded-t-md h-12"></div>
                <div className="w-full bg-emerald-900/60 rounded-t-md h-16 sm:h-20"></div>
                
                {/* Highlight Bar */}
                <div className="w-full bg-white rounded-t-md h-full flex flex-col justify-between items-center py-1.5 sm:py-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1b3b36]"></div>
                  <div className="w-0.5 h-4 sm:h-6 bg-[#1b3b36]/30"></div>
                </div>

                <div className="w-full bg-emerald-900/60 rounded-t-md h-12 sm:h-16"></div>
                <div className="w-full bg-emerald-900/60 rounded-t-md h-16 sm:h-24"></div>
              </div>
            </div>

          </div>

          {/* CARD 2: RIGHT (Hardware-to-Cloud Integration Diagram) */}
          <div className="lg:col-span-7 bg-[#e6edea] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden min-h-[380px] sm:min-h-[420px]">
            
            {/* Curved background accent */}
            <div className="absolute -bottom-16 -left-16 w-48 sm:w-64 h-48 sm:h-64 bg-[#d8e3df] rounded-full pointer-events-none -z-0"></div>

            <div className="relative z-10 space-y-2 max-w-md">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-normal text-slate-900 tracking-tight">
                Unified Hardware-to-Cloud Pipelines
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect physical sensors, terminal controllers, and edge hardware directly into centralized operational workflows.
              </p>
            </div>

            {/* Central Connectivity Graphic */}
            <div className="relative z-10 my-6 sm:my-8 py-4 sm:py-6 flex items-center justify-center">
              
              {/* Circular Grid Background Lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-48 sm:w-64 h-48 sm:h-64 border border-slate-300/60 rounded-full"></div>
                <div className="w-32 sm:w-44 h-32 sm:h-44 border border-slate-300/60 rounded-full absolute"></div>
                <div className="w-20 sm:w-24 h-20 sm:h-24 border border-slate-300/60 rounded-full absolute"></div>
              </div>

              {/* Responsive Node Layout */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2 w-full max-w-lg px-2">
                
                {/* Embedded Device Badge */}
                <div className="w-full sm:w-auto bg-white p-3 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-sm border border-slate-200/80 flex items-center justify-center sm:justify-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-[#1b3b36] shrink-0">
                    <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-900">Embedded Edge</span>
                    <span className="text-[10px] text-slate-500">Firmware Layer</span>
                  </div>
                </div>

                {/* Central System Node */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1b3b36] text-white flex items-center justify-center shadow-md shrink-0 my-1 sm:my-0">
                  <Workflow className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Software Cloud Badge */}
                <div className="w-full sm:w-auto bg-white p-3 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-sm border border-slate-200/80 flex items-center justify-center sm:justify-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-[#1b3b36] shrink-0">
                    <Server className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-900">Cloud Engine</span>
                    <span className="text-[10px] text-slate-500">Real-Time Sync</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Tagline */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-slate-300/50 text-xs text-slate-600 font-medium text-center sm:text-left">
              <span>Low-latency hardware communication</span>
              <span className="font-mono text-[#1b3b36] bg-emerald-100/60 px-2 py-0.5 rounded sm:bg-transparent sm:p-0">
                QAAS-CORE v1.0
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}