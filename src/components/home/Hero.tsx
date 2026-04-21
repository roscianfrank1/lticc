import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden bg-brand-navy">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 scale-110 grayscale-[0.2]"
        style={{
          backgroundImage: 'url("https://picsum.photos/seed/cricket/1920/1080")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Wavy Overlays */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-0 w-full h-full wavy-bg bg-brand-navy/80" />
        <div className="absolute top-0 left-0 w-full h-full wavy-bg bg-brand-gold/20 translate-y-4" />
      </div>

      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 flex flex-col justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-6xl md:text-8xl font-display font-extrabold mb-6 leading-none tracking-tighter drop-shadow-2xl">
            CRICKET <br />
            <span className="text-brand-gold">COMMUNITY</span> <br />
            & PRIDE.
          </h1>
          <p className="text-xl text-white mb-10 max-w-lg font-medium leading-relaxed drop-shadow-md">
            Welcome to Wardown Park, where history meets the modern game. 
            Join Bedfordshire's most vibrant cricket family.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/fixtures" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105">
              Fixtures & Results
            </Link>
            <Link to="/membership" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Our History
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Batsman Image (Faded in background like the mockup) */}
      <div className="absolute bottom-0 right-0 z-10 w-full h-full pointer-events-none opacity-40 mix-blend-overlay">
        <img 
          src="https://picsum.photos/seed/batsman/800/800" 
          alt="" 
          className="h-full w-auto object-contain object-right-bottom"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
}
