'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder with highly compressed blurred WebP fallback */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=20&w=200&blur=50&auto=format&fit=crop')" }}
      >
        <video
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-40 mix-blend-screen"
        >
          <source src="https://videos.pexels.com/video-files/3163534/3163534-uhd_3840_2160_30fps.mp4" type="video/webm" />
          <source src="https://videos.pexels.com/video-files/3163534/3163534-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/40 to-[#050505]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 uppercase">
            Scroll-Stopping <br />
            <span className="neon-gradient">Motion Ads</span>, <br />
            Built to Sell.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="mt-4 text-xl md:text-2xl text-gray-400 max-w-3xl font-light">
            Premium motion creative that turns your products into your best-performing ads. Engineered to stop the scroll in the first second, lower your CPA, and delivered in days, not weeks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="mt-10"
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 ease-in-out"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#00f0ff] blur-md group-hover:opacity-100 group-hover:blur-lg transition-all"></span>
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out border-2 border-[#00f0ff] rounded-lg shadow-lg group-hover:bg-[#00f0ff]/10"></span>
            <span className="relative flex items-center">
              See Our Work
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
}
