import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe, Star, Sparkles, Cpu } from "lucide-react";
import qaasDev from "../public/marey.png"; // Replace with your software/hardware mockup image path

export default function HeroSection() {
  return (
    <section className="w-full bg-slate-50 py-8 md:py-10">
      <div className="w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* --- LEFT COLUMN: COPY & CTA --- */}
        <div className="lg:col-span-6 space-y-8 md:space-x-16">
          {/* Eyebrow badge */}
          <span className="text-xs font-semibold tracking-wider text-emerald-800 uppercase">
            Systems & Hardware Automation
          </span>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-normal text-slate-950 tracking-tight leading-[1.1] mt-4 md:mt-8">
            Build smart software &{" "}
            <span className="font-serif italic font-light text-slate-900">
              embedded devices
            </span>
          </h1>

          {/* Body Subtext */}
          <p className="text-slate-600 text-base max-w-md leading-relaxed">
            Qaas delivers custom cloud architectures, hardware-level embedded systems, 
            and complete operational automation solutions for modern enterprises.
          </p>

          {/* Action Row & Reviews */}
          <div className="flex flex-wrap items-center gap-6 pt-2 md:pt-6">
            <Link
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-[#1b3b36] hover:bg-[#142e2a] text-white text-sm font-medium transition-all shadow-sm"
            >
              Get Started Now
            </Link>

            <div className="flex items-center gap-3">
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                ))}
              </div>
              <div className="text-base text-slate-500 font-medium">
                <span className="text-slate-900 font-bold">5.0</span>
                <span className="block text-[11px] text-slate-400">from 80+ enterprise clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: 2x2 BENTO GRID --- */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          
          {/* Card 1: Top-Left Software/Embedded Hardware Display */}
          <div className="relative h-64 md:h-72 rounded-br-full overflow-hidden bg-slate-900">
            <Image
              src={qaasDev}
              alt="Qaas Custom System Dashboard & Controller"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-90"
            />
            {/* Embedded device status indicators */}
            <div className="absolute top-4 right-4 flex flex-col gap-1.5 w-12">
              <div className="h-1.5 bg-emerald-400/90 rounded-full w-full"></div>
              <div className="h-1.5 bg-emerald-300/70 rounded-full w-2/3 self-end"></div>
            </div>
          </div>

          {/* Card 2: Top-Right Uptime & Reliability Card */}
          <div className="relative h-64 md:h-72 rounded-2xl bg-[#f2f1e8] p-6 flex flex-col justify-between overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#e8e6d9] rounded-full -z-0"></div>
            <div className="relative z-10 flex justify-end">
              <span className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
                99.9%
              </span>
            </div>
            <div className="relative z-10 flex items-end justify-between">
              <span className="text-sm font-medium text-slate-700">System Uptime</span>
              <Globe className="w-12 h-12 stroke-[1] text-slate-700 opacity-80" />
            </div>
          </div>

          {/* Card 3: Bottom-Left Active Integrations & Systems */}
          <div className="relative h-64 md:h-72 rounded-2xl bg-[#e6edea] p-6 flex flex-col justify-between overflow-hidden">
            {/* Decorative Arch */}
            <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#d8e3df] rounded-full -z-0"></div>
            
            <div className="relative z-10 flex gap-2">
              <Sparkles className="w-6 h-6 text-[#1b3b36] fill-[#1b3b36]" />
              <Cpu className="w-6 h-6 text-[#1b3b36]" />
            </div>

            <div className="relative z-10 space-y-4">
              <span className="text-base font-semibold text-slate-800">
                Active Deployments
              </span>
              
              {/* Stacked System Icons + Action Button */}
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-white flex items-center justify-center text-[10px] text-emerald-400 font-mono font-bold">
                    IoT
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-white flex items-center justify-center text-[10px] text-teal-300 font-mono font-bold">
                    API
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-[10px] text-white font-mono font-bold">
                    POS
                  </div>
                </div>

                <Link 
                  href="#contact" 
                  className="w-9 h-9 rounded-full bg-[#1b3b36] text-white flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4: Bottom-Right Workflow Efficiency Stat */}
          <div className="relative h-64 md:h-72 rounded-2xl bg-[#1b3b36] p-6 text-white flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-3xl md:text-4xl font-light tracking-tight">
                10x
              </span>
              <ArrowUpRight className="w-5 h-5 text-emerald-300" />
            </div>

            {/* Performance line chart graphic */}
            <div className="w-full h-16 flex items-end">
              <svg className="w-full h-full text-emerald-400" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M0 35 L15 30 L30 38 L45 20 L60 28 L75 10 L100 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="flex justify-end">
              <span className="text-sm font-light text-emerald-100/80">
                Faster System Execution
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}