import { motion } from 'motion/react';
import React, { useState, useRef, useEffect } from 'react';
import { GripVertical } from 'lucide-react';

const ImageSlider = ({ before, after, label }: { before: string, after: string, label: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ('touches' in e) ? e.touches[0].clientX : (e as MouseEvent | React.MouseEvent).clientX;
    const position = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
    setSliderPosition(position);
  };

  useEffect(() => {
    const stopDrag = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', stopDrag);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', stopDrag);
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', stopDrag);
    };
  }, [isDragging]);

  return (
    <div className="flex flex-col gap-4">
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize group select-none"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <img src={after} alt="After Detailing" className="w-full h-full object-cover pointer-events-none" />
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-white">After</div>
        </div>

        {/* Before Image (Foreground Masked) */}
        <div 
          className="absolute inset-0 z-10"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img src={before} alt="Before Detailing" className="w-full h-full object-cover pointer-events-none" />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-white">Before</div>
        </div>

        {/* Handle */}
        <div 
          className="absolute top-0 bottom-0 z-20 w-1 bg-electric-blue/50 flex items-center justify-center -ml-0.5"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 bg-white text-black rounded-full shadow-lg flex items-center justify-center transition-transform group-hover:scale-110">
            <GripVertical className="w-4 h-4" />
          </div>
        </div>
      </div>
      <h3 className="text-center font-display font-bold uppercase tracking-wider text-lg">{label}</h3>
    </div>
  );
};

export default function BeforeAfter() {
  return (
    <section id="results" className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-electric-blue/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-4">
            From Dirty To <span className="luxury-gradient-text">Dominant.</span>
          </h2>
          <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
            Your vehicle should look like it just left the showroom. Slide to see the transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ImageSlider 
              before="https://images.unsplash.com/photo-1587352349195-2dd811d73507?auto=format&fit=crop&q=80&w=800" 
              after="https://images.unsplash.com/photo-1600021966141-8f2e21b2cb82?auto=format&fit=crop&q=80&w=800" 
              label="Interior Deep Clean"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <ImageSlider 
              before="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=800" 
              after="https://images.unsplash.com/photo-1618844883908-160f2e0220db?auto=format&fit=crop&q=80&w=800" 
              label="Luxury Exterior Finish"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
