"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Plus, ArrowUpRight, Sparkles, HelpCircle } from "lucide-react";

// ─── PRICING DATA ─────────────────────────────────────────────────────────────

const BASE_TIERS = [
  {
    id: "tier-1",
    name: "Essential Kiosk",
    tagline: "Ideal for fast-casual spots wanting to eliminate counter wait times.",
    price: 399, // Base setup or monthly fee
    billing: "per month / location",
    features: [
      "1x Self-Ordering Kiosk Terminal",
      "Thermal Receipt Printer Sync",
      "Basic Menu Management",
      "Offline Network Resilience",
      "Standard Email Support",
    ],
  },
  {
    id: "tier-2",
    name: "Full Express",
    popular: true,
    tagline: "Connects counter ordering directly to kitchen display screens.",
    price: 699,
    billing: "per month / location",
    features: [
      "2x Self-Ordering Kiosk Terminals",
      "1x Kitchen Display System (KDS)",
      "Thermal Receipt Printer Sync",
      "Advanced Menu Modifiers & Upsells",
      "Real-time Sales Analytics",
      "Priority Tech Support",
    ],
  },
  {
    id: "tier-3",
    name: "Multi-Branch Enterprise",
    tagline: "Custom setups tailored for large venues and chain restaurants.",
    price: 1199,
    billing: "per month / location",
    features: [
      "Unlimited Kiosk & KDS Connections",
      "Included Table QR Code Module",
      "Multi-Branch Owner Dashboard",
      "Custom POS Integration",
      "24/7 Dedicated Support & Onsite Setup",
    ],
  },
];

const ADD_ONS = [
  {
    id: "qr-ordering",
    name: "Table QR Code Ordering",
    price: 99,
    billing: "/ month",
    description: "Allow guests to scan table QR codes on their phones to view picture menus, order food, and request service directly.",
  },
  {
    id: "extra-kds",
    name: "Additional Kitchen Display (KDS)",
    price: 79,
    billing: "/ month",
    description: "Extra kitchen tablet screen for dedicated prep stations (e.g., bar, grill, or cold station).",
  },
  {
    id: "extra-kiosk",
    name: "Additional Self-Order Kiosk",
    price: 149,
    billing: "/ month",
    description: "Add an extra self-service kiosk terminal to handle peak rush hours.",
  },
  {
    id: "pos-sync",
    name: "Cashier POS Integration",
    price: 49,
    billing: "/ month",
    description: "Sync kiosk and QR orders directly into your existing legacy cashier register.",
  },
];

// ─── COMPONENT ─────────────────────────────────────────────────────────────────

export default function PricingSection() {
  const [selectedTier, setSelectedTier] = useState("tier-1");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(["qr-ordering"]);

  const activeTier = BASE_TIERS.find((t) => t.id === selectedTier) || BASE_TIERS[0];
  
  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate Total Price dynamically
  const addOnsTotal = selectedAddOns.reduce((sum, addOnId) => {
    const item = ADD_ONS.find((a) => a.id === addOnId);
    return sum + (item ? item.price : 0);
  }, 0);

  const totalPrice = activeTier.price + addOnsTotal;

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto font-sans text-stone-900">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xs font-bold uppercase tracking-widest text-[#113831] mb-2">
          Flexible Pricing
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
          Pick your core plan, add extra features as you grow.
        </h2>
        <p className="mt-4 text-stone-600 text-base">
          Start with what your venue needs today. You can customize any plan with modular add-ons like Table QR Code ordering at any time.
        </p>
      </div>

      {/* STEP 1: Choose Base Tier */}
      <div className="mb-12">
        <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-6 flex items-center gap-2">
          <span className="h-6 w-6 rounded-full bg-[#113831] text-white flex items-center justify-center text-xs">1</span>
          Select Core Package
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BASE_TIERS.map((tier) => {
            const isSelected = selectedTier === tier.id;
            return (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all border-2 relative flex flex-col justify-between ${
                  isSelected
                    ? "border-[#113831] bg-[#113831]/5 shadow-md"
                    : "border-stone-200 bg-white hover:border-stone-300"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 right-6 bg-[#113831] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-stone-900">{tier.name}</h4>
                    <input
                      type="radio"
                      name="tier-select"
                      checked={isSelected}
                      onChange={() => setSelectedTier(tier.id)}
                      className="h-4 w-4 text-[#113831] focus:ring-[#113831]"
                    />
                  </div>
                  <p className="text-xs text-stone-500 min-h-[32px] mb-4">
                    {tier.tagline}
                  </p>
                  <div className="mb-6">
                    <span className="text-3xl font-extrabold text-stone-900">${tier.price}</span>
                    <span className="text-xs text-stone-500 ml-1">{tier.billing}</span>
                  </div>

                  <ul className="space-y-2.5 border-t border-stone-200/60 pt-4">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 size={15} className="text-[#113831] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* STEP 2: Custom Add-Ons (e.g., QR Code) */}
      <div className="mb-12">
        <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-6 flex items-center gap-2">
          <span className="h-6 w-6 rounded-full bg-[#113831] text-white flex items-center justify-center text-xs">2</span>
          Choose Extra Add-Ons (Optional)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ADD_ONS.map((addOn) => {
            const isChecked = selectedAddOns.includes(addOn.id);
            return (
              <div
                key={addOn.id}
                onClick={() => toggleAddOn(addOn.id)}
                className={`cursor-pointer rounded-xl p-5 border transition-all flex items-start gap-4 ${
                  isChecked
                    ? "border-[#113831] bg-white shadow-sm ring-1 ring-[#113831]"
                    : "border-stone-200 bg-stone-50/50 hover:bg-white"
                }`}
              >
                <div className="pt-0.5">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleAddOn(addOn.id)}
                    className="h-4 w-4 rounded text-[#113831] focus:ring-[#113831]"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-bold text-stone-900">{addOn.name}</h5>
                    <span className="text-xs font-extrabold text-[#113831]">
                      +${addOn.price} <span className="text-[10px] text-stone-500 font-normal">{addOn.billing}</span>
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-1 leading-normal">
                    {addOn.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* STEP 3: Dynamic Price Summary Bar */}
      <div className="bg-[#0e302a] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">
            Custom Estimate Summary
          </span>
          <div className="flex items-baseline gap-2">
            <h4 className="text-3xl font-extrabold text-white">${totalPrice}</h4>
            <span className="text-xs text-stone-300">/ month estimate</span>
          </div>
          <p className="text-xs text-stone-300 mt-2">
            Includes <strong className="text-white">{activeTier.name}</strong> 
            {selectedAddOns.length > 0 && (
              <> + {selectedAddOns.length} extra module{selectedAddOns.length > 1 ? "s" : ""} (e.g., Table QR Ordering)</>
            )}
          </p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <Link
            href="/contact"
            className="w-full md:w-auto text-center bg-white hover:bg-stone-100 text-[#0e302a] font-bold text-sm px-8 py-3.5 rounded-full transition shadow-md inline-flex items-center justify-center gap-2"
          >
            Get Custom Quote
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

    </section>
  );
}