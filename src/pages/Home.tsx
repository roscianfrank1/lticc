import Hero from '@/src/components/home/Hero';
import LiveTicker from '@/src/components/home/LiveTicker';
import { Trophy, ArrowRight, MapPin, ExternalLink, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getResults, type Result } from '@/src/services/cmsService';

const mockHomeResults: Result[] = [
  { id: 'r1', team: '1st XI', opponent: 'Radlett CC', date: new Date(Date.now() - 86400000 * 2).toISOString(), outcome: 'Win', lticcScore: '245/6', opponentScore: '210/10', margin: 'won by 35 runs' },
  { id: 'r2', team: '2nd XI', opponent: 'Welwyn Garden City', date: new Date(Date.now() - 86400000 * 3).toISOString(), outcome: 'Loss', lticcScore: '185/10', opponentScore: '188/4', margin: 'lost by 6 wickets' }
];

export default function Home() {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getResults(2).then(res => {
      setResults(res.length > 0 ? res : mockHomeResults);
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <LiveTicker />
      <Hero />
      
      {/* Recent Results Section */}
      <section className="bg-brand-navy py-16 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold uppercase tracking-tight">
              Recent Results
            </h2>
            <Link to="/fixtures" className="flex items-center space-x-2 text-brand-gold font-bold hover:translate-x-2 transition-transform duration-300">
              <span>View All Results</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loading ? (
              <div className="col-span-full flex justify-center py-10">
                <Loader2 className="w-8 h-8 text-brand-gold animate-spin" />
              </div>
            ) : results.length > 0 ? (
              results.map((res, i) => (
                <motion.div
                  key={res.id}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold mb-2 block">
                        {res.team}
                      </span>
                      <h3 className="text-2xl font-display font-bold">vs {res.opponent}</h3>
                    </div>
                    <Trophy className={res.outcome === 'Win' ? "text-brand-gold w-8 h-8" : "text-white/20 w-8 h-8"} />
                  </div>
                  <p className="text-lg font-bold text-white mb-2">
                    {res.lticcScore} vs {res.opponentScore}
                  </p>
                  <p className="text-brand-gold font-semibold uppercase tracking-widest text-xs">LTICC {res.margin}</p>
                </motion.div>
              ))
            ) : (
              <p className="col-span-full text-center py-10 text-white/30 font-medium">No recent results found. Check back soon!</p>
            )}
          </div>
        </div>
        
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 text-9xl font-display font-black text-white/5 whitespace-nowrap pointer-events-none select-none uppercase">
          PERFORMANCE PRIDE PASSION
        </div>
      </section>

      {/* History & Visit Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* History */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4 block">Our Legacy</span>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8">
                FOUNDED IN 1920,<br />
                <span className="text-brand-gold">ESTABLISHED FOREVER.</span>
              </h2>
              <div className="space-y-6 text-brand-navy text-lg leading-relaxed font-medium">
                <p>
                  Established in 1920, Luton Town & Indians Cricket Club (LTICC) stands as a proud beacon of cricketing excellence in the heart of Bedfordshire. 
                  Based at the historic Wardown Park, our club represents a rich tapestry of cultures and generations, brought together by a shared love for the gentleman's game.
                </p>
                <p>
                  As an ECB Clubmark accredited club, we are committed to providing a safe, inclusive, and high-performance environment. 
                  From our top-tier senior competitive squads in the Hertfordshire Premier League to our flourishing Junior Academy, 
                  we nurture talent at every level while maintaining the deep-rooted values of sportsmanship and community.
                </p>
              </div>
              <Link to="/membership" className="inline-block mt-10 px-8 py-3 border-2 border-brand-navy rounded-full font-bold hover:bg-brand-navy hover:text-white transition-all duration-300">
                Learn our Story
              </Link>
            </motion.div>

            {/* Visit Us */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-brand-navy rounded-[40px] p-10 text-white overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-3xl font-display font-bold mb-8">VISIT THE OVAL</h3>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-brand-gold" />
                      </div>
                      <div>
                        <p className="text-xl font-display font-black mb-1 text-brand-gold uppercase tracking-tight">Wardown Park</p>
                        <p className="text-white font-medium">Old Bedford Road, Luton, LU2 7HA</p>
                      </div>
                    </div>
                    
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Wardown+Park+Old+Bedford+Road+Luton+LU2+7HA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-64 bg-gray-200 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                    >
                      <img 
                        src="https://picsum.photos/seed/map/600/400" 
                        alt="Map location" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </a>
                    
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Wardown+Park+Old+Bedford+Road+Luton+LU2+7HA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-brand-gold text-brand-navy rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-white transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
                
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
