import { motion } from 'motion/react';
import { Building2, ExternalLink } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-gray-900">Professional <span className="text-gradient">Experience</span></h2>
            <p className="text-gray-600 text-lg mb-12">My journey in actuarial science and software engineering.</p>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-gray-200"
            >
              <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[8.5px] top-1 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
              
              <div className="mb-2 flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-white text-xs font-mono text-gray-600 border border-gray-200 shadow-sm">Current</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Actuarial Analyst</h3>
              <div className="flex items-center gap-2 text-cyan-600 mb-4">
                <Building2 size={16} />
                <a href="https://plantsat.com" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                  Plantsat <ExternalLink size={12} />
                </a>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Working on actuarial modeling, data-driven decision systems, and analytics. 
                Applying advanced statistical methods and programming to solve complex risk and pricing challenges.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Freelance & Consulting</h3>
            <p className="text-gray-600 mb-8">
              I also offer specialized freelance services on Upwork, helping clients globally with data and modeling challenges.
            </p>
            
            <div className="space-y-4 mb-8">
              {['Data analytics', 'Excel & Python modeling', 'Actuarial consulting'].map((service, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="https://www.upwork.com/freelancers/~012ab7756a7bb95ca0?mp_source=share" 
              target="_blank" 
              rel="noreferrer"
              className="w-full py-4 rounded-xl bg-gradient-accent text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-md"
            >
              Hire Me on Upwork <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
