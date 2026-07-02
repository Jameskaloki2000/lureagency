'use client';

import { motion } from 'framer-motion';

export default function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "Quick fit call",
      time: "15 min",
      desc: "We align on your goals, product, and see if we're a match."
    },
    {
      num: "02",
      title: "Send your assets",
      time: "20 mins",
      desc: "Drop your existing footage or ship the physical product to the studio."
    },
    {
      num: "03",
      title: "First concepts land",
      time: "3 days",
      desc: "You receive the first batch of scroll-stopping motion creative."
    },
    {
      num: "04",
      title: "Launch & Scale",
      time: "Ongoing",
      desc: "You run the ads, we review the data, tweak the hooks, and double down on what maximizes your ROAS."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 md:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            A frictionless process designed to get premium motion ads live in days, not weeks.
          </motion.p>
        </div>

        {/* Horizontal Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#111111] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-white/20 transition-colors"
            >
              {/* Step Number Background */}
              <span className="absolute -top-4 -right-4 text-8xl font-bold text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">
                {step.num}
              </span>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#00f0ff]/10 group-hover:text-[#00f0ff] transition-colors">
                  <span className="text-xl font-bold">{step.num}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <div className="inline-block bg-white/10 text-gray-300 text-xs font-semibold px-2 py-1 rounded mb-4">
                  {step.time}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
