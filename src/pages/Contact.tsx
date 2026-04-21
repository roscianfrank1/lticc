import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-brand-navy py-32 text-white text-center rounded-b-[60px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-display font-black mb-6 tracking-tighter"
          >
            GET IN <span className="text-brand-gold">TOUCH</span>
          </motion.h1>
          <p className="text-xl text-white/60 max-w-xl mx-auto font-light">
            Have a question about membership, our ground, or joining a team? 
            We're here to help.
          </p>
        </div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 -mt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Card */}
          <div className="bg-brand-gold rounded-[40px] p-10 text-brand-navy shadow-2xl space-y-12 h-full">
            <div>
              <h2 className="text-2xl font-display font-black mb-6 uppercase tracking-tight">Contact Details</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-navy/10 p-3 rounded-2xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Wardown Park</p>
                    <p className="text-sm opacity-70">Old Bedford Road, Luton, LU2 7HA</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-navy/10 p-3 rounded-2xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Email Us</p>
                    <p className="text-sm opacity-70">info@lticc.com<br />membership@lticc.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-navy/10 p-3 rounded-2xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Call Us</p>
                    <p className="text-sm opacity-70">01582 123456</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-brand-navy/10">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 opacity-60">Follow our updates</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-4 bg-brand-navy text-white rounded-3xl hover:scale-110 transition-transform"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="p-4 bg-brand-navy text-white rounded-3xl hover:scale-110 transition-transform"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="p-4 bg-brand-navy text-white rounded-3xl hover:scale-110 transition-transform"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-[40px] p-10 md:p-16 border border-gray-100 shadow-xl">
            <h2 className="text-3xl font-display font-black text-brand-navy mb-10">Send a Message</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="E.g. John Doe"
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold outline-none text-sm font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="E.g. john@example.com"
                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold outline-none text-sm font-medium"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40 ml-1">Subject</label>
                <select className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold outline-none text-sm font-medium appearance-none">
                  <option>General Inquiry</option>
                  <option>Membership Question</option>
                  <option>Junior Academy</option>
                  <option>Venue Hire</option>
                  <option>Sponsorship</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/40 ml-1">Message</label>
                <textarea 
                  rows={6}
                  placeholder="How can we help you?"
                  className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-gold outline-none text-sm font-medium resize-none"
                ></textarea>
              </div>

              <button className="bg-brand-navy text-white px-10 py-4 rounded-2xl font-bold flex items-center space-x-3 hover:bg-black transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                <span>Send Message</span>
                <Send className="w-4 h-4 text-brand-gold" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] w-full bg-gray-200">
        {/* Placeholder for real map */}
        <div className="w-full h-full relative group cursor-pointer overflow-hidden">
          <img 
            src="https://picsum.photos/seed/map-location/1920/800" 
            alt="Club Location Map" 
            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-[40px] shadow-2xl text-center max-w-sm transform group-hover:scale-110 transition-transform duration-500">
              <MapPin className="w-12 h-12 text-brand-red mx-auto mb-4 animate-bounce" />
              <h3 className="text-xl font-display font-black mb-2">LUTON TOWN & INDIANS CC</h3>
              <p className="text-sm text-brand-navy/60">Wardown Park, Luton, LU2 7HA</p>
              <button className="mt-6 text-brand-gold font-bold uppercase tracking-widest text-[10px] underline underline-offset-8">Get Directions</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
