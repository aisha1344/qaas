import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../public/logo.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full  bg-[#fcfdfd] backdrop-blur-md border-b border-slate-100/80 transition-all">
      {/* --- TOP ANNOUNCEMENT BANNER --- */}
      <div className="w-full bg-[#0d4c4e] text-white px-4 py-2 text-center text-xs flex items-center justify-around gap-2">
        <span className="font-semibold px-2 py-0.5 rounded-full bg-white/10 text-[11px]">
          New Release      <ArrowRight className="w-3.5 h-3.5 inline-block opacity-80" />
        </span>
        <span className="font-light">
          Mareey Kiosk v1.0 Released — Book an interactive demo for your restaurant today
        </span>
      </div>

      {/* --- MAIN NAVIGATION BAR --- */}
      <div className="w-5/6 mx-auto flex justify-between items-center py-3">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <Image className="w-[110px] md:w-[125px] h-auto object-contain" src={logo} alt="Qaas Logo" priority />
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-[#0d4c4e] transition-colors">
            Home
          </Link>
          <Link href="#services" className="hover:text-[#0d4c4e] transition-colors">
            Services
          </Link>
          <Link href="#faq" className="hover:text-[#0d4c4e] transition-colors">
            FAQ
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
