import { useState, useEffect } from 'react';
import { Trophy, MapPin, Bus, Clock, Calendar, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { getFixtures, getResults, type Fixture, type Result } from '@/src/services/cmsService';

const filters = ['All Teams', '1st XI', '2nd XI', 'Sunday XI', 'Youth Teams'];

const mockFixtures: Fixture[] = [
  { id: 'f1', team: '1st XI', opponent: 'St Albans CC', date: new Date(Date.now() + 86400000 * 5).toISOString(), venue: 'Wardown Park', status: 'Scheduled', type: 'Home' },
  { id: 'f2', team: '2nd XI', opponent: 'Harpenden CC', date: new Date(Date.now() + 86400000 * 6).toISOString(), venue: 'Redbourn Lane', status: 'Scheduled', type: 'Away' },
  { id: 'f3', team: 'Sunday XI', opponent: 'Luton Town CC', date: new Date(Date.now() + 86400000 * 12).toISOString(), venue: 'Wardown Park', status: 'Scheduled', type: 'Home' },
  { id: 'f4', team: 'Youth Teams', opponent: 'Northamptonshire Academy', date: new Date(Date.now() + 86400000 * 14).toISOString(), venue: 'County Ground', status: 'Scheduled', type: 'Away' }
];

const mockResults: Result[] = [
  { id: 'r1', team: '1st XI', opponent: 'Radlett CC', date: new Date(Date.now() - 86400000 * 2).toISOString(), outcome: 'Win', lticcScore: '245/6', opponentScore: '210/10', margin: 'won by 35 runs' },
  { id: 'r2', team: '2nd XI', opponent: 'Welwyn Garden City', date: new Date(Date.now() - 86400000 * 3).toISOString(), outcome: 'Loss', lticcScore: '185/10', opponentScore: '188/4', margin: 'lost by 6 wickets' },
  { id: 'r3', team: '1st XI', opponent: 'Potters Bar CC', date: new Date(Date.now() - 86400000 * 7).toISOString(), outcome: 'Win', lticcScore: '290/4', opponentScore: '150/10', margin: 'won by 140 runs' },
  { id: 'r4', team: 'Sunday XI', opponent: 'Bedford CC', date: new Date(Date.now() - 86400000 * 8).toISOString(), outcome: 'Win', lticcScore: '212/5', opponentScore: '211/9', margin: 'won by 5 wickets' }
];

export default function Fixtures() {
  const [activeFilter, setActiveFilter] = useState('All Teams');
  const [fixtures, setFixtures] = useState<Fixture[]>([]);
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [f, r] = await Promise.all([getFixtures(), getResults()]);
        setFixtures(f.length > 0 ? f : mockFixtures);
        setResults(r.length > 0 ? r : mockResults);
      } catch (err) {
        console.error(err);
        setFixtures(mockFixtures);
        setResults(mockResults);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredFixtures = fixtures.filter(f => activeFilter === 'All Teams' || f.team === activeFilter);
  const filteredResults = results.filter(r => activeFilter === 'All Teams' || r.team === activeFilter);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F0F7FF]">
        <Loader2 className="w-10 h-10 text-sky-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0F7FF] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-extrabold text-brand-navy mb-4"
          >
            Fixtures and Results Dashboard
          </motion.h1>
          <p className="text-brand-navy/60 font-medium">Stay updated with Luton's finest cricket matches</p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 bg-white p-2 rounded-3xl shadow-sm border border-brand-navy/5 max-w-4xl mx-auto">
          <div className="px-6 py-2 bg-gray-50 rounded-2xl text-xs font-bold uppercase tracking-widest text-brand-navy/40 mr-2">Filter</div>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300",
                activeFilter === filter 
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-200 scale-105" 
                  : "text-brand-navy/60 hover:bg-sky-50 hover:text-sky-600"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upcoming Fixtures */}
          <div>
            <div className="flex items-center justify-between mb-8 px-2">
              <h2 className="text-2xl font-display font-bold flex items-center gap-3">
                <Calendar className="w-6 h-6 text-sky-500" />
                Upcoming Fixtures
              </h2>
            </div>
            
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredFixtures.length > 0 ? (
                  filteredFixtures.map((fix) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={fix.id}
                      className="group bg-white p-6 rounded-[32px] border border-brand-navy/5 shadow-sm hover:shadow-xl hover:shadow-sky-100 transition-all duration-500 flex items-center"
                    >
                      <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-500">
                        <Trophy className="w-8 h-8 text-sky-500" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-1">vs {fix.opponent}</h3>
                        <p className="text-brand-navy/50 text-sm font-medium flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {new Date(fix.date).toLocaleString()}
                        </p>
                        <p className="text-brand-navy/50 text-sm font-medium flex items-center gap-2 mt-1">
                          <MapPin className="w-4 h-4" />
                          Venue: {fix.venue} ({fix.type})
                        </p>
                      </div>
                      <div className="shrink-0 p-3 bg-gray-50 rounded-2xl">
                        {fix.type === 'Home' ? <Trophy className="w-5 h-5 text-gray-400" /> : <Bus className="w-5 h-5 text-gray-400" />}
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-center py-10 text-brand-navy/30 font-medium">No upcoming fixtures found.</p>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Recent Results */}
          <div>
            <div className="flex items-center justify-between mb-8 px-2">
              <h2 className="text-2xl font-display font-bold flex items-center gap-3">
                <Trophy className="w-6 h-6 text-brand-gold" />
                Recent Results
              </h2>
            </div>

            <div className="space-y-4">
              {filteredResults.length > 0 ? (
                filteredResults.map((res) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={res.id}
                    className={cn(
                      "p-6 rounded-[32px] border shadow-sm transition-all duration-500",
                      res.outcome === 'Win' 
                        ? "bg-emerald-50/50 border-emerald-100/50 hover:shadow-emerald-100" 
                        : "bg-rose-50/50 border-rose-100/50 hover:shadow-rose-100"
                    )}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                        res.outcome === 'Win' ? "bg-emerald-500 text-white" : "bg-rose-500 text-white"
                      )}>
                        {res.outcome}
                      </span>
                      <span className="text-xs font-bold text-brand-navy/30 uppercase tracking-widest">{res.team}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">vs {res.opponent}</h3>
                    <p className="text-sm font-medium mb-1 text-brand-navy/70">
                      LTICC {res.lticcScore} | {res.opponent} {res.opponentScore}
                    </p>
                    <p className={cn(
                      "text-sm font-bold italic",
                      res.outcome === 'Win' ? "text-emerald-600" : "text-rose-600"
                    )}>
                      LTICC {res.margin}
                    </p>
                  </motion.div>
                ))
              ) : (
                <p className="text-center py-10 text-brand-navy/30 font-medium">No results found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
