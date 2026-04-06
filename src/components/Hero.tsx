import { motion } from 'motion/react';
import { ArrowRight, FileText, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/media/profile_cover_photo.png" 
          alt="Profile Cover" 
          className="w-full h-full object-cover object-center opacity-90"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-gray-50"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm text-xs font-mono text-cyan-700 mb-8">
            <Terminal size={14} />
            <span>Subash Joshi • Based in Nepal</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-[1.15] tracking-tight mb-6 text-gray-900">
            Actuary. <span className="text-gradient">AI Engineer.</span> <br />
            Builder of Intelligent Systems.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl leading-relaxed font-medium">
            I design AI-powered solutions for insurance, analytics, and automation.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors shadow-lg flex items-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="/media/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 rounded-full bg-white/90 backdrop-blur-md text-gray-900 font-medium hover:bg-white transition-colors border border-gray-200 shadow-sm flex items-center gap-2"
            >
              Download CV <FileText size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
