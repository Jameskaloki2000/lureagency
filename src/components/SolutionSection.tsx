'use client';

import { motion } from 'framer-motion';

export default function SolutionSection() {
  const tools = [
    "Higgsfield",
    "Seedance 2.0",
    "Kling AI",
    "Nano & Banana",
    "Final Cut Pro"
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] relative border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-[#00f0ff] mb-4">The Solution</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
            I turn your products into <br className="hidden md:block" /> 
            <span className="text-gradient">high-end motion ads.</span>
          </h3>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
            We combine the raw power of cinematic engines like Kling AI and Seedance 2.0 with custom-trained Nano & Banana models to generate hyper-dynamic, pattern-interrupting visual assets. Everything is directed through Higgsfield and locked together inside Final Cut Pro for flawless timing and sound design.
          </p>
        </motion.div>

      </div>

      {/* Tech Stack Marquee */}
      <div className="mt-20 overflow-hidden relative w-full py-8 border-y border-white/5 bg-[#050505]/50">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>
        
        <div className="flex space-x-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap px-4">
          {[...tools, ...tools, ...tools].map((tool, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center px-6 py-3 rounded-lg border border-[#00f0ff]/20 bg-[#0a0a0a] shadow-[0_0_10px_rgba(0,240,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:border-[#00f0ff]/60 text-gray-400 hover:text-white transition-all duration-300"
            >
              <span className="text-lg font-bold tracking-wider uppercase font-mono">{tool}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}
