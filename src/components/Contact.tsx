import { motion } from 'motion/react';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-card-dark relative overflow-hidden">
      {/* Cinematic background accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-electric-blue/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Copy & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tighter leading-[1] mb-6">
              Ready To Make Your Car <span className="blue-gradient-text">Look Luxury</span> Again?
            </h2>
            <p className="text-xl text-white/60 font-light mb-12 max-w-md">
              Secure your spot. Fill out the form or give us a call directly to schedule your detailing service.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-electric-blue/30 flex items-center justify-center text-electric-blue shrink-0 bg-electric-blue/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-1">Location</h4>
                  <p className="text-lg font-medium">919 Madison St<br/>Ypsilanti, MI 48197</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-electric-blue/30 flex items-center justify-center text-electric-blue shrink-0 bg-electric-blue/10">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-1">Phone</h4>
                  <a href="tel:7344741430" className="text-xl font-medium hover:text-electric-blue transition-colors">(734) 474-1430</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-electric-blue/30 flex items-center justify-center text-electric-blue shrink-0 bg-electric-blue/10">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-1">Hours</h4>
                  <p className="text-lg font-medium">Opens 8 AM Sunday</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a href="tel:7344741430" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-electric-blue text-white font-bold uppercase tracking-widest text-sm rounded-full glow-shadow hover:scale-105 transition-transform duration-300">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Right: Lead Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-10 rounded-2xl relative"
          >
            <h3 className="text-2xl font-display font-bold uppercase tracking-wider mb-8">Request a Quote</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue focus:bg-white/10 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Phone</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue focus:bg-white/10 transition-colors" placeholder="(734) 555-0123" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue focus:bg-white/10 transition-colors" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Vehicle Make & Model</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue focus:bg-white/10 transition-colors" placeholder="e.g. 2022 BMW M3" />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Desired Service</label>
                  <select className="w-full bg-[#1c1c1c] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue appearance-none cursor-pointer">
                    <option>Interior Detail</option>
                    <option>Exterior Detail</option>
                    <option>Full Detail Package</option>
                    <option>Luxury Detail</option>
                    <option>Paint Correction</option>
                    <option>Ceramic Coating</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Preferred Date</label>
                  <input type="date" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue focus:bg-white/10 transition-colors cursor-text" style={{ colorScheme: 'dark' }} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue focus:bg-white/10 transition-colors resize-none" placeholder="Tell us more about your vehicle's condition..."></textarea>
              </div>

              <button className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-electric-blue hover:text-white transition-colors duration-300">
                Submit Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
