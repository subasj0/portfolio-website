import { motion } from 'motion/react';

const skills = [
  { name: "Python", level: 95 },
  { name: "AI/ML", level: 85 },
  { name: "Actuarial Modeling", level: 90 },
  { name: "Data Analytics", level: 95 },
  { name: "APIs & Automation", level: 88 },
];

const techLogos = [
  "Python", "LangGraph", "n8n", "React", "SQL", "Excel", "Docker", "AWS"
];

export default function TechStack() {
  return (
    <section className="py-24 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-gray-900">Technical <span className="text-gradient">Proficiency</span></h2>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-900 font-medium">{skill.name}</span>
                    <span className="text-gray-500 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden border border-gray-200">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-accent rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl rounded-full" />
            <div className="relative glass-panel p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Tools & Technologies</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {techLogos.map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 hover:text-gray-900 transition-colors cursor-default shadow-sm"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
