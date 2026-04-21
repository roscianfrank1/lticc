import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, Star, Clock, Loader2 } from 'lucide-react';
import { getNews, type NewsPost } from '@/src/services/cmsService';
import { Link } from 'react-router-dom';

const mockNews: NewsPost[] = [
  {
    id: '1',
    title: 'New Coaching Staff Announced for 2026 Season',
    content: 'We are thrilled to welcome former international players to our coaching roster. This marks a new era for our youth development pathway...',
    publishedAt: new Date().toISOString(),
    imageUrl: 'https://picsum.photos/seed/news1/800/600'
  },
  {
    id: '2',
    title: 'Wardown Park Pavilion Renovation Complete',
    content: 'The historic pavilion has undergone a major upgrade, featuring improved facilities for players and a new spacious lounge for members...',
    publishedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    imageUrl: 'https://picsum.photos/seed/news2/800/600'
  },
  {
    id: '3',
    title: 'Youth Registration Open for Summer Sessions',
    content: 'Calling all junior cricketers! Registration is now open for our summer holiday camps. All skill levels welcome from ages 5 to 16...',
    publishedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    imageUrl: 'https://picsum.photos/seed/news3/800/600'
  }
];

export default function News() {
  const [news, setNews] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews();
        setNews(data.length > 0 ? data : mockNews); // Fallback to mock if empty
      } catch (err) {
        setNews(mockNews);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-10 h-10 text-brand-gold animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Featured News */}
      <section className="bg-brand-navy pt-20 pb-40 text-white rounded-b-[80px]">
        <div className="max-w-7xl mx-auto px-4">
          <header className="mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-[10px] mb-4 block">Latest Updates</span>
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter">WARDOWN <br /><span className="text-brand-gold">FIELD REPORT</span></h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-video rounded-[60px] overflow-hidden shadow-2xl group cursor-pointer"
              >
                <img 
                  src={news[0]?.imageUrl} 
                  alt={news[0]?.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12">
                  <span className="bg-brand-gold text-brand-navy px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest self-start mb-6">Featured</span>
                  <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-4 group-hover:text-brand-gold transition-colors">{news[0]?.title}</h2>
                  <div className="flex items-center space-x-6 text-sm text-white/60 font-medium">
                    <span className="flex items-center space-x-2"><Calendar className="w-4 h-4" /> <span>{new Date(news[0]?.publishedAt).toLocaleDateString()}</span></span>
                    <span className="flex items-center space-x-2"><Clock className="w-4 h-4" /> <span>5 min read</span></span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 space-y-12">
              <h3 className="text-2xl font-display font-bold uppercase tracking-tight pb-4 border-b border-white/10 uppercase italic">Trending Topics</h3>
              <ul className="space-y-10">
                {news.slice(1, 3).map((item, i) => (
                  <motion.li 
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start space-x-6 group cursor-pointer"
                  >
                    <div className="w-24 h-24 rounded-3xl overflow-hidden shrink-0">
                      <img src={item.imageUrl} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-brand-gold uppercase block mb-1">Update</span>
                      <h4 className="text-xl font-bold line-clamp-2 leading-tight group-hover:text-brand-gold transition-colors">{item.title}</h4>
                      <p className="text-sm text-white/40 mt-1">{new Date(item.publishedAt).toLocaleDateString()}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 -mt-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col group cursor-pointer border border-gray-100"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="px-3 py-1 bg-gray-50 text-brand-navy/40 text-[10px] font-black uppercase tracking-widest rounded-full">Club News</span>
                  <span className="text-[10px] font-bold text-brand-navy/30">{new Date(item.publishedAt).toLocaleDateString()}</span>
                </div>
                <h3 className="text-2xl font-display font-bold leading-tight mb-4 group-hover:text-sky-600 transition-colors">{item.title}</h3>
                <p className="text-brand-navy/60 text-sm leading-relaxed mb-8 line-clamp-3">
                  {item.content}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center text-brand-navy font-bold text-sm tracking-tight group-hover:translate-x-2 transition-transform">
                  <span>Read Full Story</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-brand-gold" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="bg-brand-gold rounded-[60px] p-12 md:p-20 relative overflow-hidden text-brand-navy">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Star className="w-12 h-12 mb-6" />
              <h2 className="text-4xl md:text-5xl font-display font-black leading-none mb-6">STAY IN THE <br />CREASE.</h2>
              <p className="text-lg font-medium opacity-70 max-w-sm">
                Join our newsletter to receive weekly match reports, event invites, and club announcements directly.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-white/20 border-2 border-brand-navy/10 rounded-2xl px-8 py-5 focus:bg-white transition-all text-brand-navy placeholder:text-brand-navy/50 font-bold outline-none"
              />
              <button className="bg-brand-navy text-white px-10 py-5 rounded-2xl font-bold hover:bg-black transition-all">Subscribe</button>
            </form>
          </div>
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
      </section>
    </div>
  );
}
