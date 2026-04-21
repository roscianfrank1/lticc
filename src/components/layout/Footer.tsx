import { Trophy, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-brand-gold p-2 rounded-lg">
                <Trophy className="w-6 h-6 text-brand-navy" />
              </div>
              <span className="text-xl font-display font-extrabold tracking-tighter">
                LTICC
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Luton Town & Indians Cricket Club is a premier cricket club in Bedfordshire, 
              fostering talent and community since 1920 at the historic Wardown Park.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Col */}
          <div className="space-y-6">
            <h4 className="text-brand-gold font-display font-bold uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <span>Wardown Park, Old Bedford Road,<br />Luton, LU2 7HA</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span>info@lticc.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span>01582 123456</span>
              </li>
            </ul>
          </div>

          {/* Links Col 1 */}
          <div className="space-y-6">
            <h4 className="text-brand-gold font-display font-bold uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to="/fixtures" className="hover:text-brand-gold transition-colors">Fixtures & Results</Link></li>
              <li><Link to="/teams" className="hover:text-brand-gold transition-colors">Our Teams</Link></li>
              <li><Link to="/membership" className="hover:text-brand-gold transition-colors">Join the Club</Link></li>
              <li><Link to="/news" className="hover:text-brand-gold transition-colors">Latest News</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="space-y-6">
            <h4 className="text-brand-gold font-display font-bold uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Safeguarding</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Club Constitution</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/40 font-bold">
          <p>© 2026 Luton Town & Indians Cricket Club. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Design inspired by Wardown Park heritage</p>
        </div>
      </div>
    </footer>
  );
}
