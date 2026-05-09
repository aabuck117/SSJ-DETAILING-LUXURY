import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, MapPin, Award, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-bg-dark/50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-electric-blue mb-6 backdrop-blur-md">
              <Sparkles className="w-3 h-3" />
              Premium Detailing in Ypsilanti
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] uppercase tracking-tighter mb-6">
              Luxury Detailing <br />
              <span className="luxury-gradient-text text-transparent bg-clip-text">That Makes Your Car Look Unreal.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 font-light leading-relaxed">
              Premium car detailing in Ypsilanti, Michigan — built for people who care how their vehicle looks, feels, and represents them.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full overflow-hidden glow-shadow transition-transform hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Book Your Detail <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-electric-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
            </a>
            
            <a href="tel:7344741430" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
              Call Now: (734) 474-1430
            </a>
          </motion.div>

          {/* Floating Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
          >
            {[
              { icon: Award, text: "Premium Detailing" },
              { icon: ShieldCheck, text: "Total Protection" },
              { icon: MapPin, text: "Ypsilanti, MI" },
              { icon: Sparkles, text: "Luxury Results" },
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="p-2 bg-electric-blue/20 rounded-lg text-electric-blue">
                  <badge.icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-white/80">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
