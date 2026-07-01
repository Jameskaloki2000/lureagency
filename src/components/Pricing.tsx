'use client';

import { motion } from 'framer-motion';

export default function Pricing() {
  const tiers = [
    {
      name: "The Hero Ad",
      price: "$400",
      period: "one-off",
      description: "Best for testing premium motion.",
      features: [
        "1 Motion ad",
        "2 hook variations",
        "3 formats (9:16, 1:1, 16:9)",
        "5-7 day turnaround"
      ],
      highlighted: false,
      cta: "Start with One"
    },
    {
      name: "The Growth Engine",
      price: "$1,500",
      period: "/mo",
      description: "Best for brands running paid social.",
      features: [
        "5 ads/month",
        "Up to 3 hooks/ad",
        "Monthly strategy calls",
        "Priority 5-day rolling turnaround"
      ],
      highlighted: true,
      badge: "★ MOST CHOSEN",
      cta: "Fuel Your Growth"
    },
    {
      name: "The Scale Engine",
      price: "$3,000",
      period: "/mo",
      description: "Best for scaling spend.",
      features: [
        "12 ads/month",
        "Unlimited hooks",
        "Bi-weekly strategy calls",
        "72-hour rush slots"
      ],
      highlighted: false,
      cta: "Scale Aggressively"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Simple, Transparent <span className="text-gradient">Pricing.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            No hidden fees. Just high-converting creative.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 border ${
                tier.highlighted 
                  ? "bg-[#111111] border-[#00f0ff]/50 shadow-[0_0_30px_rgba(0,240,255,0.15)] md:-mt-8 md:mb-8" 
                  : "bg-[#0a0a0a] border-white/10 hover:border-white/20"
              } transition-colors duration-300 flex flex-col h-full`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-[#00f0ff] to-[#b026ff] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest shadow-lg uppercase">
                    {tier.badge}
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-sm h-10">{tier.description}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-extrabold tracking-tight text-white">{tier.price}</span>
                  <span className="text-xl text-gray-500 ml-1">{tier.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className={`w-5 h-5 mr-3 shrink-0 ${tier.highlighted ? 'text-[#00f0ff]' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-lg font-bold transition-all duration-300 mt-auto ${
                tier.highlighted
                  ? "bg-white text-black hover:bg-[#00f0ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                  : "bg-[#222222] text-white hover:bg-[#333333]"
              }`}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 font-medium">Founding rates available. Month-to-month retainers, no lock-in.</p>
        </div>
      </div>
    </section>
  );
}
