import { MapPin, Phone, Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bg-dark border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="font-display font-bold text-2xl tracking-tighter uppercase text-white">
                SSJ <span className="text-electric-blue">Detailing</span>
              </span>
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase bg-white/10 text-white border border-white/20">
                Luxury
              </span>
            </a>
            <p className="text-white/60 font-light max-w-sm mb-8 leading-relaxed">
              Premium car detailing in Ypsilanti, Michigan. We specialize in luxury results, high-end care, and complete vehicle transformations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-electric-blue hover:border-electric-blue hover:text-white transition-all text-white/60">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-electric-blue hover:border-electric-blue hover:text-white transition-all text-white/60">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#contact" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-electric-blue hover:border-electric-blue hover:text-white transition-all text-white/60">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-wider mb-6 text-sm">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-white/60 hover:text-electric-blue transition-colors text-sm uppercase tracking-wider">Services</a></li>
              <li><a href="#results" className="text-white/60 hover:text-electric-blue transition-colors text-sm uppercase tracking-wider">Results</a></li>
              <li><a href="#process" className="text-white/60 hover:text-electric-blue transition-colors text-sm uppercase tracking-wider">Process</a></li>
              <li><a href="#reviews" className="text-white/60 hover:text-electric-blue transition-colors text-sm uppercase tracking-wider">Reviews</a></li>
              <li><a href="#faq" className="text-white/60 hover:text-electric-blue transition-colors text-sm uppercase tracking-wider">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-wider mb-6 text-sm">Contact Info</h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-electric-blue shrink-0 mt-0.5" />
                <span className="text-sm">919 Madison St<br/>Ypsilanti, MI 48197</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-electric-blue shrink-0" />
                <a href="tel:7344741430" className="text-sm hover:text-white transition-colors">(734) 474-1430</a>
              </li>
              <li className="text-sm mt-4 text-white/40">
                Opens 8 AM Sunday
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-light tracking-wide">
            &copy; {currentYear} SSJ Detailing Luxury. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/40 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
