import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      text: "SSJ Detailing Luxury brought my car back to life. The interior looked completely different.",
      author: "Michael T.",
      type: "Interior Detail"
    },
    {
      text: "Super professional, clean work, and the car looked amazing when it was done.",
      author: "Sarah J.",
      type: "Full Detail Package"
    },
    {
      text: "Best detailing service in Ypsilanti. The shine was crazy.",
      author: "David R.",
      type: "Paint Correction & Ceramic"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-luxury-gold/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4">
              Client <span className="gold-gradient-text">Results.</span>
            </h2>
            <p className="text-lg text-white/60 font-light max-w-xl">
              Don't just take our word for it. See what our clients have to say about the SSJ experience.
            </p>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-luxury-gold fill-luxury-gold" />
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-panel p-8 rounded-2xl relative border border-white/5 hover:border-luxury-gold/30 transition-colors group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-luxury-gold/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-luxury-gold fill-luxury-gold" />
                ))}
              </div>
              
              <p className="text-lg font-light leading-relaxed mb-8 relative z-10 text-white/90">
                "{review.text}"
              </p>
              
              <div className="mt-auto border-t border-white/10 pt-4 flex justify-between items-center">
                <span className="font-bold uppercase tracking-wider text-sm">{review.author}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-electric-blue border border-electric-blue/30 px-2 py-1 rounded bg-electric-blue/10">
                  {review.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
