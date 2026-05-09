import { motion } from 'motion/react';
import { Shield, Droplets, MapPin, Star } from 'lucide-react';

export default function TrustBar() {
  const stats = [
    { icon: Star, value: "100%", label: "Satisfaction Focused" },
    { icon: Shield, value: "Premium", label: "Products Used" },
    { icon: Droplets, value: "Interior & Exterior", label: "Complete Services" },
    { icon: MapPin, value: "Ypsilanti", label: "Local Detailer" },
  ];

  return (
    <section className="border-y border-white/5 bg-card-dark relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center justify-center gap-3"
            >
              <stat.icon className="w-8 h-8 text-electric-blue mb-2 opacity-80" />
              <div className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/50">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
