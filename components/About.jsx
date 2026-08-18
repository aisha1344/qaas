import { Cpu, Server, Terminal, Workflow } from "lucide-react";

export default function About() {
  return (
    <section className="w-full bg-[#fcfdfd] py-20">
      <div className="w-5/6 mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-emerald-800 uppercase">
            ABOUT QAAS
          </span>
          <h2 className="text-4xl md:text-5xl font-normal text-slate-950 tracking-tight">
            One ecosystem for all your <br />
            <span className="font-serif italic font-light">technology needs</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed pt-1">
            We bridge hardware microcontrollers with cloud platforms, removing the 
            friction between physical operations and digital control systems.
          </p>
        </div>

        {/* --- TWO CARDS LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* CARD 1: LEFT (Dark Green Card - Engineering Capabilities) */}
          <div className="lg:col-span-5 bg-[#1b3b36] rounded-3xl p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden min-h-[420px]">
            
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center text-emerald-300">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-2xl md:text-3xl font-normal tracking-tight leading-snug">
                Bespoke Software & Embedded Devices
              </h3>
              <p className="text-xs md:text-sm text-emerald-100/70 font-light leading-relaxed">
                From micro-firmware for custom circuit boards to scalable enterprise backends.
              </p>
            </div>

            {/* Custom Bar Graph / Visual Graphic at Bottom */}
            <div className="relative z-10 pt-8">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs font-mono text-emerald-300">Deployment Efficiency</span>
                <span className="text-lg font-light text-white font-mono">100% Custom</span>
              </div>
              
              {/* Animated/Styled Bar Chart */}
              <div className="flex items-end gap-3 h-28 pt-4 border-t border-emerald-800/60">
                <div className="w-full bg-emerald-900/60 rounded-t-md h-12"></div>
                <div className="w-full bg-emerald-900/60 rounded-t-md h-20"></div>
                {/* Highlight Bar */}
                <div className="w-full bg-white rounded-t-md h-full flex flex-col justify-between items-center py-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1b3b36]"></div>
                  <div className="w-0.5 h-6 bg-[#1b3b36]/30"></div>
                </div>
                <div className="w-full bg-emerald-900/60 rounded-t-md h-16"></div>
                <div className="w-full bg-emerald-900/60 rounded-t-md h-24"></div>
              </div>
            </div>

          </div>

          {/* CARD 2: RIGHT (Light Mint Card - Systems Integration Diagram) */}
          <div className="lg:col-span-7 bg-[#e6edea] rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden min-h-[420px]">
            
            {/* Curved background accent */}
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#d8e3df] rounded-full -z-0"></div>

            <div className="relative z-10 space-y-2 max-w-md">
              <h3 className="text-2xl md:text-3xl font-normal text-slate-900 tracking-tight">
                Seamless Hardware-to-Cloud Integration
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Connect physical input devices, POS displays, and embedded sensors directly into real-time operational workflows.
              </p>
            </div>

            {/* Central Connectivity Graphic */}
            <div className="relative z-10 my-8 py-6 flex items-center justify-center">
              
              {/* Circular Grid Background Lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border border-slate-300/60 rounded-full"></div>
                <div className="w-44 h-44 border border-slate-300/60 rounded-full absolute"></div>
                <div className="w-24 h-24 border border-slate-300/60 rounded-full absolute"></div>
              </div>

              {/* Floating Tech Badges */}
              <div className="relative z-10 flex items-center justify-between w-full max-w-lg px-4">
                
                {/* Embedded Device Badge */}
                <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-slate-200/80 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-[#1b3b36]">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-900">Embedded IoT</span>
                    <span className="text-[10px] text-slate-500">Hardware Level</span>
                  </div>
                </div>

                {/* Central System Node */}
                <div className="w-14 h-14 rounded-full bg-[#1b3b36] text-white flex items-center justify-center shadow-md">
                  <Workflow className="w-6 h-6" />
                </div>

                {/* Software Cloud Badge */}
                <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-slate-200/80 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-[#1b3b36]">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-900">Cloud OS</span>
                    <span className="text-[10px] text-slate-500">Real-Time Sync</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Tagline */}
            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-slate-300/50 text-xs text-slate-600 font-medium">
              <span>Zero latency hardware communication</span>
              <span className="font-mono text-[#1b3b36]">QAAS-CORE v1.0</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}