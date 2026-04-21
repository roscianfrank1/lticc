import { motion } from 'motion/react';
import { Trophy, Users, Shield, Star } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

const teams = [
  {
    name: '1st XI',
    category: 'Senior Men',
    description: 'Our flagship team competing at the highest level of regional cricket. A blend of experienced veterans and rising stars.',
    captain: 'Adam Smith',
    stats: { matches: 24, won: 18, points: 340 },
    color: 'border-brand-gold bg-brand-gold/5',
    image: 'https://picsum.photos/seed/cricket-team-1/800/600'
  },
  {
    name: '2nd XI',
    category: 'Senior Men',
    description: 'The backbone of our competitive structure, providing a pathway for academy players into senior cricket.',
    captain: 'David Jones',
    stats: { matches: 22, won: 12, points: 210 },
    color: 'border-sky-500 bg-sky-50',
    image: 'https://picsum.photos/seed/cricket-team-2/800/600'
  },
  {
    name: 'Ladies XI',
    category: 'Senior Women',
    description: 'One of the fastest-growing sections of our club, promoting excellence in the female game across Bedfordshire.',
    captain: 'Sarah Williams',
    stats: { matches: 15, won: 11, points: 185 },
    color: 'border-rose-500 bg-rose-50',
    image: 'https://picsum.photos/seed/cricket-ladies/800/600'
  },
  {
    name: 'Youth Academy',
    category: 'U11 - U18',
    description: 'Nurturing the next generation of LTICC talent. Structured coaching and competitive age-group cricket.',
    headCoach: 'Michael Brown',
    stats: { players: 120, coaches: 8, awards: 12 },
    color: 'border-emerald-500 bg-emerald-50',
    image: 'https://picsum.photos/seed/cricket-youth/800/600'
  }
];

export default function Teams() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-brand-navy py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-extrabold mb-6 tracking-tight"
          >
            OUR <span className="text-brand-gold">TEAMS</span>
          </motion.h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            From our elite First XI to our thriving Youth Academy, we pride ourselves on 
            inclusivity and competitive excellence across all levels.
          </p>
        </div>
        
        {/* Background Graphic */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20rem] font-bold text-white/5 whitespace-nowrap pointer-events-none select-none -translate-x-1/4">
          SQUAD
        </div>
      </section>

      {/* Team List */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-20">
          {teams.map((team, i) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col lg:flex-row items-center gap-12 group",
                i % 2 !== 0 && "lg:flex-row-reverse"
              )}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative">
                <div className={cn(
                  "absolute inset-0 rounded-[40px] transform translate-x-4 translate-y-4 -z-10",
                  i % 2 === 0 ? "bg-brand-gold/20" : "bg-sky-200"
                )} />
                <div className="aspect-[4/3] overflow-hidden rounded-[40px] shadow-2xl relative">
                  <img 
                    src={team.image} 
                    alt={team.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                    <Link to="/contact" className="bg-white text-brand-navy px-6 py-2 rounded-full font-bold text-sm">
                      View Squad Details
                    </Link>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6 px-4">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-brand-navy text-brand-gold text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {team.category}
                  </span>
                  <Trophy className="w-5 h-5 text-brand-gold" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter">
                  {team.name}
                </h2>
                
                <p className="text-lg text-brand-navy/60 leading-relaxed max-w-xl">
                  {team.description}
                </p>

                <div className="grid grid-cols-3 gap-4 pt-6">
                  {Object.entries(team.stats).map(([label, value]) => (
                    <div key={label} className="text-center p-4 bg-gray-50 rounded-3xl border border-gray-100 group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                      <p className="text-2xl font-display font-black mb-1">{value}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-brand-navy" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/40 leading-none mb-1">
                      {team.captain ? 'Captain' : 'Head Coach'}
                    </p>
                    <p className="font-bold text-lg">{team.captain || team.headCoach}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Users className="w-16 h-16 text-brand-gold mx-auto mb-8" />
          <h2 className="text-4xl font-display font-black mb-6">WANT TO JOIN A SQUAD?</h2>
          <p className="text-lg text-brand-navy/60 mb-10">
            We are always looking for new players at all levels. Whether you're a seasoned pro 
            or just starting out, there's a place for you at LTICC.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/membership" className="bg-brand-navy text-white px-10 py-4 rounded-full font-bold hover:bg-black transition-all transform hover:scale-105">
              Membership Information
            </Link>
            <Link to="/contact" className="border-2 border-brand-navy text-brand-navy px-10 py-4 rounded-full font-bold hover:bg-brand-navy hover:text-white transition-all">
              Contact coaching team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
