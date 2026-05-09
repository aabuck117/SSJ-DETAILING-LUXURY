/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import BeforeAfter from './components/BeforeAfter';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import PremiumExperience from './components/PremiumExperience';
import Process from './components/Process';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-white selection:bg-electric-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <BeforeAfter />
        <Services />
        <WhyChoose />
        <PremiumExperience />
        <Process />
        <Reviews />
        <Contact />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
