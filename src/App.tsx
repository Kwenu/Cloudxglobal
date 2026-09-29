import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { Services } from './components/Services';
import { Solutions } from './components/Solutions';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { WhyCloudX } from './components/WhyCloudX';
import { About } from './components/About';
import { Careers } from './components/Careers';
import { CtaBand } from './components/CtaBand';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="w-full bg-black font-sans text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <Services />
        <Solutions />
        <Process />
        <Portfolio />
        <WhyCloudX />
        <About />
        <Careers />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </div>);

}