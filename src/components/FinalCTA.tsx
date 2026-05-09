import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden min-h-[70vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center brightness-[0.2] scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-bg-dark/50" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tighter mb-6 leading-[0.9]">
            Your Car Deserves To <br />
            <span className="gold-gradient-text">Look Expensive.</span>
          </h2>
          
          <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto">
            Book your detail with SSJ Detailing Luxury today and bring your vehicle back to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#contact" className="group relative inline-flex items-center justify-center px-10 py-5 bg-luxury-gold text-black font-bold uppercase tracking-widest text-sm rounded-full overflow-hidden glow-shadow-gold shadow-luxury-gold/50 transition-transform hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Book My Detail <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
            </a>
            
            <a href="tel:7344741430" className="inline-flex items-center justify-center px-10 py-5 bg-transparent border border-white/50 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-sm group">
              <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Call (734) 474-1430
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
