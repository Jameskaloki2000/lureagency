'use client';

import { motion } from 'framer-motion';

export default function Guarantee() {
  return (
    <section className="py-12 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden bg-[#111111] border border-white/10"
        >
          {/* Subtle glowing edge */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-[#00f0ff] to-red-500 opacity-70"></div>
          
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
                <svg className="w-8 h-8 text-red-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                Zero Risk On Quality
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                If the first concept doesn't genuinely stop you in your tracks, you don't pay for it. <strong className="text-white font-medium">No debate.</strong>
              </p>
            </div>
            
            <div className="md:w-1/3 w-full bg-[#1a1a1a] rounded-xl p-6 border border-white/5 shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#00f0ff]/10 rounded-full blur-2xl"></div>
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-xs font-bold tracking-widest text-red-500 uppercase">Urgency Notice</span>
              </div>
              <p className="text-sm text-gray-400 font-medium">
                Maximum <span className="text-white text-base">6</span> active retainer clients at any time to protect quality. 
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-[#00f0ff] font-semibold uppercase tracking-wider">
                  Founding client bonuses currently active.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
