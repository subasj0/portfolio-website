import { motion } from 'motion/react';
import { Cpu, LineChart, Workflow } from 'lucide-react';

const services = [
  {
    title: "AI & Automation",
    icon: <Cpu size={32} />,
    color: "from-cyan-500/10 to-blue-500/10",
    iconColor: "text-cyan-600",
    items: [
      "AI agents (n8n, LangGraph, ADK)",
      "API integrations",
      "MCP integrations",
      "Deployment in enterprise VPCs"
    ]
  },
  {
    title: "Actuarial & Analytics",
    icon: <LineChart size={32} />,
    color: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-600",
    items: [
      "Non-life pricing",
      "Reserving",
      "Data analysis",
      "Predictive modeling"
    ]
  },
  {
    title: "IT & Workflow Automation",
    icon: <Workflow size={32} />,
    color: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-600",
    items: [
      "Business automation systems",
      "Custom tools",
      "End-to-end solutions"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-gray-900">Core <span className="text-gradient">Expertise</span></h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Specialized services bridging the gap between actuarial science and modern AI systems.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-gray-100 ${service.iconColor}`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">{service.title}</h3>
              
              <ul className="space-y-4 relative z-10">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${service.iconColor.replace('text-', 'bg-')}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
