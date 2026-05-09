import { motion } from 'motion/react';
import { Car, Sparkles, Droplets, Gem, Settings, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Car,
      title: "Interior Detailing",
      description: "Deep vacuuming, wipe-downs, stain treatment, vents, panels, cupholders, seats, carpets, and full interior refresh.",
    },
    {
      icon: Droplets,
      title: "Exterior Detailing",
      description: "Hand wash, wheels, tires, trim, glass, paint-safe cleaning, and high-gloss finish.",
    },
    {
      icon: Sparkles,
      title: "Full Detail Package",
      description: "Complete interior and exterior transformation for vehicles that need the full reset.",
    },
    {
      icon: Gem,
      title: "Luxury Detail",
      description: "Premium service for high-end vehicles, daily drivers, and anyone who wants top-tier results.",
      highlight: true
    },
    {
      icon: Settings,
      title: "Paint Correction",
      description: "Reduce swirls, oxidation, light scratches, and restore depth and shine.",
    },
    {
      icon: Shield,
      title: "Ceramic Protection",
      description: "Long-lasting shine, protection, and easier maintenance.",
    }
  ];

  return (
    <section id="services" className="py-24 bg-card-dark relative">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4">
              Premium <span className="gold-gradient-text">Services.</span>
            </h2>
            <p className="text-lg text-white/60 font-light">
              We offer specialized packages tailored to restore, protect, and enhance your vehicle's appearance.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="#contact" className="inline-block px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-black transition-colors duration-300">
              View All Services
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-2xl glass-card border transition-all duration-300 hover:-translate-y-2
                ${service.highlight ? 'border-luxury-gold/30 hover:border-luxury-gold glow-shadow-gold' : 'border-white/5 hover:border-white/20 hover:glow-shadow'}
              `}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300
                ${service.highlight ? 'bg-luxury-gold/20 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-black' : 'bg-white/5 text-white group-hover:bg-electric-blue group-hover:text-white'}
              `}>
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-display font-bold uppercase tracking-wider mb-3">{service.title}</h3>
              <p className="text-white/60 font-light mb-8 line-clamp-3 group-hover:text-white/80 transition-colors">
                {service.description}
              </p>
              
              <a href="#contact" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-electric-blue group-hover:text-white transition-colors">
                Request Quote <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
