'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function PortfolioGrid() {
  const STATIC_PROJECTS = [
    {
      title: "Liquid Energy",
      category: "Beverage Campaign",
      videoSrc: "/videos/zoom.mp4",
      poster: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&auto=format&fit=crop"
    },
    {
      title: "Deep Sleep Pro",
      category: "Sleep Tracking App",
      videoSrc: "/videos/goodnightsapp.mp4",
      poster: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop"
    },
    {
      title: "Krusities Pizza",
      category: "Halal Italian Pizza",
      videoSrc: "/videos/krusties.mp4",
      poster: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop"
    },
    {
      title: "Depi",
      category: "Ashwagandha Supplement",
      videoSrc: "/videos/depi.mp4",
      poster: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop"
    }
  ];

  const [projects, setProjects] = useState<any[]>(STATIC_PROJECTS);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      // Safe play invocation after DOM mounts
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(error => {
            console.log("Autoplay blocked by browser policy, user needs to click play manually.", error);
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const q = query(collection(db, 'projects'), orderBy('order', 'asc'));
        const querySnapshot = await getDocs(q);
        const fetchedProjects = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        if (fetchedProjects.length > 0) {
          setProjects(fetchedProjects);
        }
      } catch (error) {
        console.error("Error fetching projects from Firestore:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section className="py-24 bg-[#050505] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              The <span className="text-gradient">Work.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-xl">
              A collection of high-converting creative built to dominate the feed.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
              onClick={() => {
                console.log("Card clicked, opening project:", project.title, "Source:", project.videoSrc);
                setSelectedProject(project);
              }}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            {/* Close button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-50 bg-white/5 rounded-full backdrop-blur"
              onClick={() => setSelectedProject(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#111111] shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <video
                ref={videoRef}
                src={selectedProject.videoSrc}
                controls
                playsInline
                className="w-full h-full object-contain"
              />
              {/* Project Details Overlay at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
                <span className="text-[#00f0ff] text-xs font-bold tracking-widest uppercase mb-1 block">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, onClick }: { project: any, index: number, onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      onViewportEnter={() => {
        if (videoRef.current) {
          videoRef.current.play().catch(e => console.log("Video autoplay prevented:", e));
        }
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group rounded-2xl overflow-hidden bg-[#111111] aspect-[4/3] border border-white/5 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="absolute inset-0 z-0 bg-black">
        {/* Video plays continuously once in view */}
        <video
          ref={videoRef}
          src={project.videoSrc}
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>

      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 z-10" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-[#00f0ff] text-xs font-bold tracking-widest uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
          {project.title}
        </h3>
      </div>
      
      {/* Interactive indicator */}
      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <svg className="w-4 h-4 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
      </div>
    </motion.div>
  );
}
