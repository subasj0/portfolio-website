import { motion } from 'motion/react';
import { Phone, Mail, Github, Linkedin, Instagram, Facebook, Send } from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/subash-joshi/' },
  { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/subasj0' },
  { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://www.instagram.com/subashjoshi__/' },
  { name: 'Facebook', icon: <Facebook size={20} />, url: 'https://www.facebook.com/Subas.joshi.0' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-gray-900">Let's <span className="text-gradient">Connect</span></h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Interested in collaborating or have a project in mind? Reach out to me.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <a href="tel:9862475531" className="flex items-center gap-4 text-gray-600 hover:text-cyan-600 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:bg-cyan-50 transition-colors border border-gray-200 shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <p className="font-medium text-gray-900">9862475531</p>
                  </div>
                </a>
                
                <a href="mailto:subasj0@gmail.com" className="flex items-center gap-4 text-gray-600 hover:text-purple-600 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:bg-purple-50 transition-colors border border-gray-200 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="font-medium text-gray-900">subasj0@gmail.com</p>
                  </div>
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Social Profiles</p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all border border-gray-200 shadow-sm"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 glass-panel p-8 md:p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-sm resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-gray-900 text-white font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-md"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
