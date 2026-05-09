import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function PremiumExperience() {
  const benefits = [
    "Feel confident in your vehicle",
    "Protect your investment",
    "Restore cleanliness & comfort",
    "Improve overall appearance",
    "Enjoy a luxury-level detailing experience"
  ];

  return (
    <section className="relative py-32 overflow-hidden flex items-center min-h-[80vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-fixed bg-center blur-sm scale-110" />
        <div className="absolute inset-0 bg-bg-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tighter leading-[1.1] mb-10"
          >
            "Your car says something <span className="luxury-gradient-text font-bold italic">before you ever step out of it.</span>"
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-lg text-white/70 font-light mb-8">
              We go beyond the basic wash. SSJ Detailing Luxury is designed to help you:
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="flex items-center gap-3 text-white/90 font-medium tracking-wide uppercase text-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-electric-blue/20 flex items-center justify-center text-electric-blue shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
