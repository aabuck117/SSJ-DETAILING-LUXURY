import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ question, answer }: { question: string, answer: string, key?: number | string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-lg font-display font-medium uppercase tracking-wider group-hover:text-electric-blue transition-colors">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-white/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-white/60 font-light leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: "How long does a detail take?",
      answer: "The duration depends on the package and the initial condition of the vehicle. A standard interior or exterior detail typically takes 2-3 hours, while full luxury details or paint correction can take 4-8 hours or more."
    },
    {
      question: "Do I need an appointment?",
      answer: "Yes, appointments are highly recommended to ensure we can dedicate the proper time to your vehicle. You can book an appointment by calling us or requesting a quote through our website."
    },
    {
      question: "What detailing packages do you offer?",
      answer: "We offer tailored packages including Interior Detailing, Exterior Detailing, Full Detail Packages, a Luxury Detail for top-tier results, Paint Correction, and Ceramic Protection. See our services section for details."
    },
    {
      question: "Do you do interior and exterior detailing?",
      answer: "Absolutely. We specialize in both deep interior cleaning (stain removal, extraction, leather treatment) and exterior restoration (hand washing, paint decontamination, paint correction)."
    },
    {
      question: "What is paint correction?",
      answer: "Paint correction is the process of removing minor scratches, swirl marks, and oxidation from the clear coat using machine polishing. It restores the paint's true depth and gloss, making it look brand new."
    },
    {
      question: "Is ceramic coating worth it?",
      answer: "Yes, if you want long-term protection and easier maintenance. Ceramic coatings provide a durable, hydrophobic layer that protects against UV rays, bird droppings, and chemical stains while keeping your car consistently glossy."
    },
    {
      question: "How do I book?",
      answer: "You can book by calling us directly at (734) 474-1430, or by filling out the lead form in the contact section of our website to request a quote and preferred date."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-bg-dark">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-electric-blue uppercase tracking-widest text-xs font-bold mb-2 block">Got Questions?</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">
            Frequently Asked <span className="luxury-gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="border-t border-white/10">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
