"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Utensils,
  Cpu,
  Code2,
  Workflow,
  ArrowUpRight,
  CheckCircle2,
  Monitor,
  QrCode,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

// ─── SERVICES DATA ──────────────────────────────────────────────────────────

const CORE_SERVICES = [
  {
    icon: Cpu,
    title: "Hardware & Device Setup",
    description:
      "We select, configure, and install tablet displays, ordering stands, receipt printers, and local networks to create reliable physical systems for your business.",
    bullets: [
      "Heavy-duty tablet stands & touchscreens",
      "Automatic receipt printer setup",
      "Local network backup so systems stay up",
    ],
  },
  {
    icon: Code2,
    title: "Custom Software Solutions",
    description:
      "We design custom web platforms and mobile tools built to handle high daily order volumes, track live operations, and scale with your growth.",
    bullets: [
      "Fast, simple screens for staff & customers",
      "Secure central databases for your business data",
      "Custom portals for managers and owners",
    ],
  },
  {
    icon: Workflow,
    title: "Operational Automation",
    description:
      "We connect your hardware and software so every order flows automatically from the front desk to the back room, cutting down manual work and errors.",
    bullets: [
      "Instant ticket sending between counter & kitchen",
      "Self-service ordering to cut wait times",
      "Multi-location tracking from one dashboard",
    ],
  },
];

const MAREEY_FEATURES = [
  {
    id: "kiosks",
    role: "For Customers",
    title: "Self-Order Kiosks",
    icon: Monitor,
    badge: "Cuts queue times",
    description:
      "Touchscreen stations where guests browse visual menus, select extra toppings, and pay without waiting in line.",
  },
  {
    id: "kds",
    role: "For Kitchen Staff",
    title: "Kitchen Displays (KDS)",
    icon: Utensils,
    badge: "Eliminates lost tickets",
    description:
      "Digital kitchen screens that replace paper slips, show order preparation timers, and keep cooks organized.",
  },
  {
    id: "qr",
    role: "For Dine-In Guests",
    title: "Table QR Codes",
    icon: QrCode,
    badge: "Increases average order value",
    description:
      "Guests scan table QR codes on their smartphones to view picture menus, order food, and request service directly.",
  },
  {
    id: "admin",
    role: "For Owners",
    title: "Multi-Branch Control",
    icon: Layers,
    badge: "Instant sales reports",
    description:
      "A central manager portal to change menu items across locations, view live sales revenue, and oversee all staff.",
  },
];

// ─── COMPONENT ─────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 ">
      
      {/* ─── HERO SECTION: SIDE-BY-SIDE SPLIT LAYOUT ─────────────────────── */}
      <section className="pt-20 pb-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-xs  font-semibold tracking-wider text-emerald-800 uppercase">
              Business Systems & Automation</span>
            

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
              Smart software & hardware connected for your business.
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
              Qaas creates custom ordering terminals, staff screens, and automated
              business systems designed to speed up service, prevent kitchen mistakes,
              and boost daily revenue.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-sm transition flex items-center gap-2"
              >
                Book a Free Demo
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Quick Metrics / Summary Block */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xl shadow-slate-200/50 space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-teal-700 border-b border-slate-100 pb-3">
                System Capabilities
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal-50 text-teal-700 shrink-0 mt-0.5">
                    <Zap size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">Instant Order Sync</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Real-time processing across all devices and terminals.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal-50 text-teal-700 shrink-0 mt-0.5">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">Offline Continuity</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Runs continuously even during local internet outages.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal-50 text-teal-700 shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">Cashier POS Integration</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Connects with existing registers and hardware seamlessly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── FLAGSHIP SYSTEM: MAREEY TABS & CARD SHOWCASE ──────────────── */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700">Flagship Restaurant Solution</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Mareey Restaurant Operating System
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              A complete multi-screen system built specifically for modern restaurants. 
              Mareey brings self-ordering touchscreens, digital kitchen display screens, table QR code menus, 
              and owner controls into one seamless platform.
            </p>
          </div>

          {/* Interactive Feature Selector Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Tab Navigation List */}
            <div className="lg:col-span-5 space-y-3">
              {MAREEY_FEATURES.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeTab === index;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between border ${
                      isActive
                        ? "bg-teal-900 text-white border-teal-900 shadow-md"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/80"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={20} className={isActive ? "text-teal-300" : "text-teal-700"} />
                      <div>
                        <span className={`block text-[10px] font-bold uppercase tracking-wider ${isActive ? "text-teal-300" : "text-slate-500"}`}>
                          {item.role}
                        </span>
                        <span className="font-bold text-sm">{item.title}</span>
                      </div>
                    </div>
                    <ArrowUpRight size={16} className={isActive ? "text-teal-300" : "text-slate-400"} />
                  </button>
                );
              })}
            </div>

            {/* Active Tab Preview Display Card */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 min-h-[320px] flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-teal-500/20 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <div className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold mb-6">
                    {MAREEY_FEATURES[activeTab].badge}
                  </div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-teal-400 mb-1">
                    {MAREEY_FEATURES[activeTab].role}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mb-4">
                    {MAREEY_FEATURES[activeTab].title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed max-w-lg">
                    {MAREEY_FEATURES[activeTab].description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between relative z-10">
                  <span className="text-xs text-slate-400">Integrated with Mareey OS Ecosystem</span>
                  <Link
                    href="/contact"
                    className="text-teal-400 hover:text-teal-300 text-xs font-bold flex items-center gap-1"
                  >
                    Request Demo <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── ADDITIONAL SERVICES: THREE-COLUMN CARDS WITH ACCENT TOP BORDER ── */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-1">
            What We Do
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900">
            More Services from Qaas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between relative overflow-hidden border-t-4 border-t-teal-700"
              >
                <div>
                  <div className="h-12 w-12 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center mb-6">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3 border-t border-slate-100 pt-6">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 size={16} className="text-teal-700 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}