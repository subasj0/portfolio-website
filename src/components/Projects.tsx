import { motion } from 'motion/react';
import { ExternalLink, Database, Bot, LayoutDashboard, MessageSquare } from 'lucide-react';

const projects = [
  {
    title: "Suchak AI",
    description: "AI-powered data analyst platform for enterprises such as insurance companies. Enables full-scale data analysis, creation of intelligent agents, and integration with multiple data sources including WhatsApp.",
    link: "https://studio-427767455-d34c4.web.app/",
    image: "/media/suchak_home.png",
    features: [
      "AI-driven analytics: SQL agent, dashboard agent, modeling tasks",
      "Create beautiful BI dashboards based on your database",
      "Agent creation from datasets",
      "Multi-source data integration"
    ],
    icons: [<Database size={16} />, <LayoutDashboard size={16} />]
  },
  {
    title: "BeemaBot – AI Insurance Chatbot",
    description: "AI-powered chatbot designed for insurance companies to explain policies, assist customers, and perform agentic tasks such as selling insurance products.",
    link: "#",
    image: "/media/beemabot_app.png",
    features: [
      "Policy explanation & Conversational AI",
      "Automation of insurance workflows",
      "Chatbot frontend & Agentic backend",
      "Company dashboard for analytics"
    ],
    icons: [<Bot size={16} />, <MessageSquare size={16} />]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-gray-900">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-gray-600 text-lg max-w-2xl">Showcasing intelligent systems built for enterprise data analytics and insurance automation.</p>
        </div>

        <div className="grid gap-16 md:gap-24">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}
            >
              <div className={`relative group ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-3xl overflow-hidden glass-panel aspect-[16/10] border border-gray-200 shadow-md">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all shadow-lg">
                        Visit Live App <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className={index % 2 !== 0 ? 'md:col-start-1' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  {project.icons.map((icon, i) => (
                    <span key={i} className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600">
                      {icon}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2.5 flex-shrink-0" />
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>

                {project.link !== "#" && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
