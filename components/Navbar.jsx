'use client';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../public/logo.png";
import { useState } from 'react';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] =useState(false);
  return (
    <header className="sticky top-0 z-50 w-full  bg-[#fcfdfd] backdrop-blur-md border-b border-slate-100/80 transition-all ">
      {/* --- TOP ANNOUNCEMENT BANNER --- */}
      {/* <div className="w-full bg-[#0d4c4e] text-white px-4 py-2 text-center text-xs flex items-center justify-around gap-2 rounded-tl-full rounded-br-full">
        <span className="font-semibold px-2 py-0.5 rounded-full bg-white/10 text-[11px]">
          New Release      <ArrowRight className="w-3.5 h-3.5 inline-block opacity-80" />
        </span>
        <span className="font-light">
          Mareey Kiosk v1.0 Released — Book an interactive demo for your restaurant today
        </span>
      </div> */}

      {/* --- MAIN NAVIGATION BAR --- */}
      <div className="w-5/6 mx-auto flex justify-between items-center py-3">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <Image className="w-[110px] md:w-[125px] h-auto object-contain" src={logo} alt="Qaas Logo" priority />
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700">
          <Link href="#services" className="hover:text-[#0d4c4e] transition-colors">
            Solutions
          </Link>
           <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1.5 hover:text-[#1b4332] transition-colors py-2 focus:outline-none">
              <span>Products</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-[#1b4332]" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-64 pt-2">
                <div className="bg-white rounded-2xl p-2 shadow-xl border border-slate-200/80 backdrop-blur-xl flex flex-col gap-1">
                  
                  {/* Fixed: Single Link wrapping the dropdown item */}
                  <Link
                    href="https://maarey.com/"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#eaf6ef] transition-colors group/item"
                  >
                    <div className="p-2 rounded-lg bg-[#eaf6ef] text-[#1b4332] group-hover/item:bg-[#1b4332] group-hover/item:text-white transition-colors">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0f172a]">Mareey</p>
                      <p className="text-xs text-slate-500">Enterprise POS & Order Kiosks</p>
                    </div>
                  </Link>

                  {/* <Link
                    href="#hardware"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#eaf6ef] transition-colors group/item"
                  >
                    <div className="p-2 rounded-lg bg-[#eaf6ef] text-[#1b4332] group-hover/item:bg-[#1b4332] group-hover/item:text-white transition-colors">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0f172a]">IoT Hardware</p>
                      <p className="text-xs text-slate-500">Telemetry & Smart Access</p>
                    </div>
                  </Link> */}
                </div>
              </div>
            )}
          </div>
          <Link href="#about" className="hover:text-[#0d4c4e] transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#0d4c4e] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Primary CTA Button */}
        <Link 
          href="/contact" 
          className="bg-[#0d4c4e] hover:bg-[#09383a] text-white text-xs md:text-sm font-medium py-2.5 px-5 rounded-full transition-all shadow-sm"
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}
