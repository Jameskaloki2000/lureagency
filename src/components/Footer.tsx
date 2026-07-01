'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const faqs = [
    {
      q: "How fast is delivery?",
      a: "For the Growth and Scale engine tiers, you can expect the first concepts within 5 days of sending your assets/product. Rolling turnaround means a constant pipeline of fresh creative."
    },
    {
      q: "Do you write the hooks?",
      a: "Yes. I handle the entire creative strategy, including hook writing, visual concepts, sound design, and editing. You just provide the product and basic brand guidelines."
    },
    {
      q: "What if I only have a physical product and no footage?",
      a: "Perfect. Ship the product to my studio. I handle the high-end product cinematography in-house before adding the motion design layers."
    },
    {
      q: "Am I locked into a contract?",
      a: "No. All retainers are month-to-month. The quality of the creative keeps you around, not a contract."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* CTA & Calendar Placeholder */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to see your products <span className="text-gradient">in motion?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 font-light">
              Book a quick 15-minute fit call to see if we're a match.
            </p>
            
            <div className="w-full max-w-md aspect-video bg-[#111111] border border-white/10 rounded-xl flex flex-col items-center justify-center p-6 relative overflow-hidden group cursor-pointer hover:border-[#00f0ff]/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg className="w-12 h-12 text-gray-500 mb-4 group-hover:text-[#00f0ff] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <h3 className="text-lg font-bold text-white mb-1">Calendar Embed Placeholder</h3>
              <p className="text-sm text-gray-500">Click to book a call (Calendly/SavvyCal)</p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-white/10 bg-[#111111] rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-medium text-white">{faq.q}</span>
                    <span className={`text-[#00f0ff] transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-4 pt-2 text-gray-400 text-sm border-t border-white/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Lure Design Agency by James Kaloki. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
