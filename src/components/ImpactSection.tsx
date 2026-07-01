'use client';

import { motion } from 'framer-motion';

export default function ImpactSection() {
  const stats = [
    {
      title: "Engagement & CTR",
      value: "2-3x",
      description: "Motion graphic ads consistently achieve 2x to 3x higher click-through rates (CTR) compared to static images, significantly lowering your overall acquisition costs.",
    },
    {
      title: "Message Retention",
      value: "95%",
      description: "Viewers retain 95% of a message when they watch it in a video, compared to just 10% when reading it in text.",
    },
    {
      title: "More Conversions",
      value: "70%",
      description: "Of marketing professionals report that motion and video content generate more conversions than static formats.",
    }
  ];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0ff]/5 to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            The Science of <span className="text-gradient">Motion</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 font-light"
          >
            Human brains are evolutionary hardwired to notice and prioritize movement. 
            Whether for <span className="text-white font-medium">paid ads</span> or <span className="text-white font-medium">organic social growth</span>, 
            motion design is no longer just a "nice-to-have"—it's a fundamental pillar for capturing attention and driving high-intent conversions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-[#00f0ff]/30 transition-colors"
            >
              <h3 className="text-[#00f0ff] font-medium tracking-wide uppercase text-sm mb-2">{stat.title}</h3>
              <div className="text-5xl md:text-6xl font-bold text-white mb-4">{stat.value}</div>
              <p className="text-gray-400 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
