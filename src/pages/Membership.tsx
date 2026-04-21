import { Check, ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

const tiers = [
  {
    name: 'Senior Player',
    price: '£240',
    period: '/ Season',
    color: 'bg-brand-navy',
    accent: 'text-brand-gold',
    features: [
      'Unlimited Outdoor Training',
      'Reduced Match Fees',
      'Clubhouse Access & Events',
      'Vote in AGM',
      'Includes Playing Shirt'
    ],
    button: 'Join as Senior'
  },
  {
    name: 'Junior Player',
    price: '£120',
    period: '/ Season',
    color: 'bg-emerald-600',
    accent: 'text-emerald-100',
    features: [
      'Weekly Coaching Sessions',
      'All Match Fees Included',
      'Family Clubhouse Access',
      'Development Pathway',
      'Kit Discount'
    ],
    button: 'Join as Junior'
  },
  {
    name: 'Social Member',
    price: '£60',
    period: '/ Season',
    color: 'bg-brand-gold',
    accent: 'text-brand-navy',
    features: [
      'Full Clubhouse Access',
      'Invitations to All Social Events',
      'Support the Club',
      'Non-Voting Member',
      'Newsletter Subscription'
    ],
    button: 'Join as Social'
  },
];

export default function Membership() {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-brand-navy text-white">
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay z-0"
          style={{
            backgroundImage: 'url("https://picsum.photos/seed/cricket-field/1920/1080")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-display font-black mb-8 tracking-tighter drop-shadow-2xl"
          >
            JOIN THE <span className="text-brand-gold">LTICC FAMILY</span><br />
            AT WARDOWN PARK.
          </motion.h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto font-medium leading-relaxed mb-12 drop-shadow-lg">
            Experience the spirit of cricket, community, and competition. 
            Choose the membership that fits your game.
          </p>
          <button className="bg-brand-gold text-brand-navy px-12 py-5 rounded-full font-black text-lg hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-2xl">
            Explore Memberships
          </button>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "rounded-[40px] p-10 flex flex-col items-center text-center shadow-xl hover:translate-y-[-12px] transition-transform duration-500",
                tier.color,
                tier.name === 'Junior Player' ? 'text-white' : (tier.name === 'Social Member' ? 'text-brand-navy' : 'text-white')
              )}
            >
              <span className="uppercase tracking-[0.2em] font-bold text-xs mb-6 opacity-80">{tier.name.split(' ')[0]}</span>
              <h3 className="text-3xl font-display font-black mb-2">{tier.name}</h3>
              <div className="flex items-baseline mb-10">
                <span className="text-5xl font-black">{tier.price}</span>
                <span className="text-sm font-bold opacity-60 ml-1">{tier.period}</span>
              </div>
              
              <ul className="space-y-4 mb-12 text-left w-full flex-grow">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center space-x-3 text-sm font-medium">
                    <Check className={cn("w-5 h-5 shrink-0", tier.accent)} />
                    <span className="opacity-90">{f}</span>
                  </li>
                ))}
              </ul>
              
              <button className={cn(
                "w-full py-4 rounded-2xl font-bold transition-all duration-300",
                tier.name === 'Social Member' ? 'bg-brand-navy text-white hover:bg-black' : 'bg-white text-brand-navy hover:bg-brand-gold'
              )}>
                {tier.button}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Registration Form (Visual Preview) */}
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-[40px] p-8 md:p-16 border border-gray-100 shadow-sm">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Membership Registration</h2>
            <div className="flex items-center justify-center space-x-4 max-w-xs mx-auto">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm",
                    step === s ? "bg-brand-navy text-white" : "bg-white text-brand-navy/30 border border-gray-200"
                  )}>
                    {s}
                  </div>
                  {s < 3 && <div className="w-12 h-[2px] bg-gray-200 mx-2" />}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-brand-navy/40">
              {step === 1 ? 'Personal Details (Active)' : (step === 2 ? 'Choose Membership' : 'Payment')}
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-navy/60">Full Name</label>
                <input type="text" placeholder="Full Name" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-navy outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-navy/60">Email Address</label>
                <input type="email" placeholder="Email Address" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-navy outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-navy/60">Phone Number</label>
                <input type="tel" placeholder="Phone Number" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-navy outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-navy/60">Date of Birth</label>
                <input type="date" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-navy outline-none" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-brand-navy/60">Address</label>
              <textarea placeholder="Address" rows={3} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-navy outline-none resize-none"></textarea>
            </div>
            <button className="w-full bg-brand-navy text-white py-4 rounded-xl font-bold text-lg hover:bg-black transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Continue</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials & Gallery */}
      <section className="py-32 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight">Why Join Us</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              {[
                { name: 'Rajesh K.', role: 'Senior Player', quote: 'LTICC is more than a club; its a community. The coaching and facilities at Wardown Park are top-tier.' },
                { name: 'Sarah L.', role: 'Parent', quote: 'My kids love the junior program. Great coaches and a welcoming environment.' },
              ].map((t) => (
                <div key={t.name} className="flex space-x-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Star className="text-brand-gold fill-brand-gold w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xl font-light italic leading-relaxed text-white/80">"{t.quote}"</p>
                    <div>
                      <p className="font-bold text-brand-gold">{t.name}</p>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/40">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/ground1/400/300" className="rounded-3xl h-full object-cover" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/ground2/400/300" className="rounded-3xl h-full object-cover translate-y-4" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/ground3/400/300" className="rounded-3xl h-full object-cover -translate-y-4" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/ground4/400/300" className="rounded-3xl h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
