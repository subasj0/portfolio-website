import { motion } from 'motion/react';
import { Award, Briefcase, Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-gray-900">
              Bridging the gap between <span className="text-gradient">Actuarial Science</span> and <span className="text-gradient">AI</span>.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I am an Actuarial Analyst at Plantsat and a programmer focused on AI systems and automation. 
              My expertise lies in combining rigorous actuarial modeling with cutting-edge data analytics and AI agents to build intelligent, scalable solutions.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Whether it's non-life pricing, predictive modeling, or deploying enterprise-grade AI chatbots, I build systems that drive data-driven decisions.
            </p>
            
            <div className="flex items-center gap-4 p-4 rounded-2xl glass-panel inline-flex">
              <div className="p-3 bg-cyan-50 rounded-xl text-cyan-600">
                <Award size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Certification</p>
                <p className="font-semibold text-gray-900">Google Advanced Data Analytics</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Briefcase className="text-cyan-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Actuarial Modeling</h3>
              <p className="text-gray-600">Non-life pricing, reserving, and data-driven decision systems for the insurance sector.</p>
            </div>
            
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Code2 className="text-purple-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Systems & Automation</h3>
              <p className="text-gray-600">Developing intelligent agents, conversational AI, and automating complex business workflows.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
