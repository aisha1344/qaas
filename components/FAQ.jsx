'use client';

import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What technical services does Qaas specialize in?",
    answer: "Qaas is an engineering firm that develops custom web and mobile software platforms, builds tailored embedded hardware/IoT devices, and integrates complex automated operational systems for businesses."
  },
  {
    question: "What is Mareey and how does it work with restaurant hardware?",
    answer: "Mareey is our ready-to-deploy restaurant operating system. It includes self-ordering kiosk software that connects directly to physical receipt printers, kitchen display systems (KDS), and customer order pickup screens in real time."
  },
  {
    question: "Can Qaas build custom hardware microcontrollers for my project?",
    answer: "Yes. Our team handles hardware-level firmware engineering, sensor integration, and custom embedded board designs that seamlessly communicate with cloud software backends."
  },
  {
    question: "How long does it take to deploy the Mareey Kiosk system?",
    answer: "Since Mareey is already a fully developed solution, standard restaurant deployments can be configured, integrated with your kitchen hardware, and live within a few days."
  },
  {
    question: "How do I start a custom software or automation project with Qaas?",
    answer: "You can reach out through our contact form below or request a consultation. Our engineering team will evaluate your operational needs, map out the system architecture, and provide a clear development roadmap."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(1); // Default open to 2nd item

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-slate-50 py-24 border-t border-slate-100">
      <div className="w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* --- LEFT COLUMN: HEADINGS --- */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-emerald-800 uppercase">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-normal text-slate-950 tracking-tight leading-[1.15]">
            Frequently asked <br />
            <span className="font-serif italic font-light">questions</span>
          </h2>
        </div>

        {/* --- RIGHT COLUMN: ACCORDION LIST --- */}
        <div className="lg:col-span-7 divide-y divide-slate-200/80">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6 first:pt-0 last:pb-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                >
                  <span className={`text-lg md:text-xl font-medium tracking-tight transition-colors ${
                    isOpen ? 'text-slate-950' : 'text-slate-800 group-hover:text-slate-950'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className="flex-shrink-0 text-slate-500 group-hover:text-slate-950 transition-colors">
                    {isOpen ? (
                      <X className="w-5 h-5 stroke-[1.5]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[1.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <p className="mt-4 text-sm md:text-base text-slate-600 font-light leading-relaxed pr-8 animate-in fade-in-50 duration-200">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}