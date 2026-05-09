import { motion } from 'motion/react';
import { Target, ThumbsUp, Calendar, Zap, MapPin, Award, Gem, CheckCircle2 } from 'lucide-react';

export default function WhyChoose() {
  const features = [
    { icon: MapPin, title: "Local Ypsilanti Service" },
    { icon: Gem, title: "Premium Products" },
    { icon: Target, title: "Sharp Attention To Detail" },
    { icon: ThumbsUp, title: "Clean Interior Feel" },
    { icon: Zap, title: "Glossy Exterior Finish" },
    { icon: Calendar, title: "Easy Booking" },
    { icon: Award, title: "Professional Results" },
    { icon: CheckCircle2, title: "Customer-Focused Service" },
  ];

  return (
    <section className="py-24 bg-bg-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6 max-w-4xl mx-auto leading-tight">
            Detailing Isn't Just Cleaning.<br/>
            <span className="blue-gradient-text">It's Restoring Pride.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:bg-white/5 transition-colors group"
            >
              <feature.icon className="w-8 h-8 text-electric-blue/70 group-hover:text-electric-blue transition-colors" />
              <h4 className="font-bold uppercase tracking-wider text-xs md:text-sm text-white/90">
                {feature.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
