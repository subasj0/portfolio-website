/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Particles from './components/Particles';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-purple-500/30">
      <CustomCursor />
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Experience />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
