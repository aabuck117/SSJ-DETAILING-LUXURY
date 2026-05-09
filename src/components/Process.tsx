import { motion } from 'motion/react';
import { Phone, ListChecks, CarFront } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Phone,
      title: "Call or Request a Quote",
      description: "Reach out to us to discuss your vehicle's needs."
    },
    {
      icon: ListChecks,
      title: "Choose Your Package",
      description: "Select the detailing level that fits your goals and budget."
    },
    {
      icon: CarFront,
      title: "Drive Away Looking Brand New",
      description: "Experience the luxury feeling of a perfectly clean car."
    }
  ];

  return (
    <section id="process" className="py-24 bg-card-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-electric-blue uppercase tracking-widest text-xs font-bold mb-2 block">Simple & Seamless</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">
            Our <span className="luxury-gradient-text">Process</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent hidden md:block" />
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Number Indicator Background */}
                <div className="absolute -top-6 -right-4 text-[8rem] font-display font-bold text-white/[0.02] -z-10 group-hover:text-white/[0.05] transition-colors">
                  0{index + 1}
                </div>

                <div className="w-24 h-24 rounded-full glass-card border border-white/10 flex items-center justify-center mb-6 text-electric-blue group-hover:border-electric-blue/50 group-hover:glow-shadow transition-all duration-500 relative">
                  <step.icon className="w-10 h-10" />
                  <div className="absolute inset-2 rounded-full border border-electric-blue/20 animate-[spin_10s_linear_infinite]" />
                </div>
                
                <h3 className="text-xl font-display font-bold uppercase tracking-wider mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 font-light max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
