import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Trophy } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Fixtures & Results', href: '/fixtures' },
  { name: 'Teams', href: '/teams' },
  { name: 'Membership', href: '/membership' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-brand-navy text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-brand-gold p-2 rounded-lg transform group-hover:rotate-12 transition-transform duration-300">
              <Trophy className="w-8 h-8 text-brand-navy" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-extrabold tracking-tighter leading-none">
                LTICC
              </span>
              <span className="text-[10px] uppercase tracking-widest text-brand-gold/80 font-semibold">
                Est. 1920
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-all duration-300 hover:text-brand-gold",
                  location.pathname === link.href ? "text-brand-gold border-b-2 border-brand-gold pb-1" : "text-white/80"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/membership"
              className="bg-brand-gold hover:bg-brand-gold/90 text-brand-navy px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-brand-navy border-t border-white/10 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-4 rounded-md text-base font-medium transition-colors",
                  location.pathname === link.href ? "bg-white/10 text-brand-gold" : "text-white/80 hover:bg-white/5"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/membership"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-brand-gold text-brand-navy px-3 py-4 rounded-md font-bold text-base mt-2"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
