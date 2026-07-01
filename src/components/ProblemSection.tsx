'use client';

import { motion } from 'framer-motion';

export default function ProblemSection() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Why Your Ad Spend Is <span className="text-red-500">Going To Waste</span>
            </h2>
            <p className="text-xl text-gray-400 font-light mb-6">
              Your audience scrolls past most of what they see in under a second. Static images and cheap phone clips just blend into the feed, burning through your budget without driving clicks.
            </p>
            <p className="text-xl text-gray-400 font-light mb-8">
              The brands winning right now aren't just spending more. <strong className="text-white font-medium">They're feeding the algorithm a steady stream of fresh, premium motion creative that actually converts.</strong>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10 group bg-[#111111]"
          >
            {/* Split interaction simulation */}
            <div className="absolute inset-0 flex">
              {/* Static "Boring" Side */}
              <div className="w-1/2 h-full bg-gray-900 border-r border-white/5 flex flex-col items-center justify-center p-8 transition-all duration-500 group-hover:w-[20%] opacity-50 grayscale group-hover:grayscale-0">
                <div className="w-3/4 h-64 bg-gray-800 rounded-lg shadow-inner mb-4 flex items-center justify-center">
                  <span className="text-gray-500 font-mono text-sm">STATIC.JPG</span>
                </div>
                <div className="w-full h-4 bg-gray-800 rounded-sm mb-2"></div>
                <div className="w-2/3 h-4 bg-gray-800 rounded-sm"></div>
                <span className="absolute bottom-4 left-4 text-xs font-bold text-gray-600 tracking-widest uppercase">The Feed</span>
              </div>
              
              {/* Dynamic "Motion" Side */}
              <div className="w-1/2 h-full relative overflow-hidden transition-all duration-500 group-hover:w-[80%] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00f0ff]/20 to-[#b026ff]/20 z-0"></div>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-80"
                >
                  <source src="https://videos.pexels.com/video-files/3163534/3163534-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 text-center scale-90 group-hover:scale-100 transition-transform duration-500">
                   <div className="w-16 h-16 rounded-full border-t-2 border-r-2 border-[#00f0ff] animate-spin mx-auto mb-4"></div>
                   <h3 className="text-2xl font-bold text-white neon-gradient">MOTION <br/> STOPS SCROLLS</h3>
                </div>
                <span className="absolute bottom-4 right-4 text-xs font-bold text-[#00f0ff] tracking-widest uppercase animate-pulse">The Pattern Break</span>
              </div>
            </div>
            
            {/* Interactive hint */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center space-x-2 z-20 pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity">
               <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
               <span className="text-xs font-medium text-gray-300">Hover to see the difference</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
