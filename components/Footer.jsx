import Link from "next/link";
import Image from "next/image";
import { Sparkles, Globe } from "lucide-react";
import kiosk from "../public/kiosk.png"
import logo from "../public/logo.png"
export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 pt-12 pb-8 border-t border-slate-100">
      <div className="w-5/6 mx-auto space-y-20">
        
        {/* --- TOP CTA BANNER CARD --- */}
        <div className="relative w-full rounded-3xl bg-[#1b3b36] overflow-hidden text-white min-h-[380px] p-8 md:p-14 flex flex-col justify-between">
          
          {/* Sparkle Graphics (Top Right) */}
          <div className="absolute top-8 right-12 hidden md:flex gap-4 text-emerald-300">
            <Sparkles className="w-12 h-12 fill-emerald-300 stroke-none opacity-80" />
            <Sparkles className="w-16 h-16 fill-emerald-300 stroke-none" />
          </div>

          {/* Right Image Cutout Container (Cream Arch) */}
          <div className="absolute bottom-0 right-0 w-80 h-72 bg-[#e6edea] rounded-tl-[140px] hidden lg:block overflow-hidden">
            <div className="relative w-full h-full">
              {/* Replace with your hardware/software preview image */}
              <Image
                src={kiosk}
                alt="Qaas Engineering & Hardware Solutions"
                fill
                sizes="(max-width: 1024px) 0px, 320px"
                className="object-cover object-top pt-6 pl-6"
              />
            </div>
          </div>

          {/* Left Content */}
          <div className="space-y-6 max-w-xl relative z-10 my-auto">
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight leading-[1.1]">
              Automate the way you <br />
              run your <span className="font-serif italic font-light">systems</span>
            </h2>

            <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed max-w-md">
              Partner with Qaas to build custom software platforms, embedded IoT devices, 
              or deploy our ready-to-use Mareey restaurant ecosystem.
            </p>

            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-block px-8 py-3.5 rounded-full bg-white text-slate-950 font-medium text-sm hover:bg-slate-100 transition-colors shadow-sm"
              >
                Get Started Now
              </Link>
            </div>
          </div>

        </div>

        {/* --- FOOTER NAVIGATION & BRANDING --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
          
          {/* Nav Links Column (Left - 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Services
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-500 font-light">
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Software Engineering</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Embedded Systems</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">IoT Firmware</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Systems Automation</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Products
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-500 font-light">
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Mareey Kiosk</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Kitchen Display (KDS)</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Order Sync OS</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-500 font-light">
                <li><Link href="#" className="hover:text-slate-900 transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Values</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Support
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-500 font-light">
                <li><Link href="#faq" className="hover:text-slate-900 transition-colors">FAQ</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">System Status</Link></li>
              </ul>
            </div>
          </div>

          {/* Large Brand & Address Column (Right - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end space-y-6">
            <Image src={logo} alt="logo-footer" className="w-[200px]" />

            <div className="text-left lg:text-right space-y-3">
              <p className="text-xs text-slate-500 leading-relaxed">
                Custom Software, Hardware Systems & Automation
              </p>
              
              <div className="flex items-center lg:justify-end gap-1.5 text-xs text-slate-600">
                <Globe className="w-3.5 h-3.5" />
                <span>English (US)</span>
              </div>
            </div>
          </div>

        </div>

        {/* --- BOTTOM COPYRIGHT ROW --- */}
        <div className="pt-8 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Qaas Systems Ltd. All rights reserved.</p>
          
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-600 transition-colors">Security</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}