import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(5, 5, 5, 0)', 'rgba(5, 5, 5, 0.85)']
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(16px)']
  );
  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ['1px solid rgba(255, 255, 255, 0)', '1px solid rgba(255, 255, 255, 0.05)']
  );

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'Process', href: '#process' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter, borderBottom }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 z-50 relative">
          <span className="font-display font-bold text-2xl tracking-tighter uppercase text-white">
            SSJ <span className="text-electric-blue">Detailing</span>
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase bg-white/10 text-white border border-white/20">
            Luxury
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 uppercase tracking-wider relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <a
            href="#contact"
            className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-electric-blue hover:text-white transition-all duration-300 glow-shadow"
          >
            <PhoneCall className="w-4 h-4" />
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 relative text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 bg-bg-dark z-40 flex flex-col items-center justify-center gap-8 md:hidden p-6"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-display font-bold uppercase tracking-widest text-white hover:text-electric-blue transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2 bg-electric-blue text-white w-full justify-center py-4 rounded-full font-bold uppercase tracking-widest mt-8 glow-shadow"
        >
          <PhoneCall className="w-5 h-5" />
          Call Now: (734) 474-1430
        </a>
      </motion.div>
    </motion.nav>
  );
}
