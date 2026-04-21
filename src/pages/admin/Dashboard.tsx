import { useState, useEffect } from 'react';
import { 
  getFixtures, saveFixture, deleteFixture, 
  getResults, saveResult, deleteResult,
  type Fixture, type Result 
} from '@/src/services/cmsService';
import { Trophy, Plus, Save, Trash2, Calendar, LayoutDashboard, LogOut, ChevronRight } from 'lucide-react';
import { auth } from '@/src/lib/firebase';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'fixtures' | 'results'>('fixtures');
  const [fixtures, setFixtures] = useState<Fixture[]>([]);
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const [f, r] = await Promise.all([getFixtures(), getResults()]);
    setFixtures(f);
    setResults(r);
    setLoading(false);
  };

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/admin/login');
  };

  const [newFixture, setNewFixture] = useState<Partial<Fixture>>({
    team: '1st XI',
    type: 'Home',
    status: 'Scheduled',
    date: new Date().toISOString().slice(0, 16)
  });

  const [newResult, setNewResult] = useState<Partial<Result>>({
    team: '1st XI',
    outcome: 'Win',
    date: new Date().toISOString().slice(0, 10)
  });

  const onAddFixture = async () => {
    if (!newFixture.opponent || !newFixture.venue) return;
    await saveFixture(newFixture);
    setNewFixture({ team: '1st XI', type: 'Home', status: 'Scheduled', date: new Date().toISOString().slice(0, 16) });
    fetchData();
  };

  const onAddResult = async () => {
    if (!newResult.opponent || !newResult.lticcScore || !newResult.opponentScore) return;
    await saveResult(newResult);
    setNewResult({ team: '1st XI', outcome: 'Win', date: new Date().toISOString().slice(0, 10) });
    fetchData();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-navy text-white p-6 flex flex-col shrink-0">
        <div className="flex items-center space-x-3 mb-12">
          <div className="bg-brand-gold p-2 rounded-lg">
            <Trophy className="w-5 h-5 text-brand-navy" />
          </div>
          <span className="text-xl font-display font-black tracking-tighter">LTICC CMS</span>
        </div>

        <nav className="space-y-2 flex-grow">
          <button
            onClick={() => setActiveTab('fixtures')}
            className={cn(
              "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all",
              activeTab === 'fixtures' ? "bg-brand-gold text-brand-navy" : "text-white/60 hover:bg-white/5"
            )}
          >
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5" />
              <span>Fixtures</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setActiveTab('results')}
            className={cn(
              "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all",
              activeTab === 'results' ? "bg-brand-gold text-brand-navy" : "text-white/60 hover:bg-white/5"
            )}
          >
            <div className="flex items-center space-x-3">
              <Trophy className="w-5 h-5" />
              <span>Results</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </button>
        </nav>

        <button 
          onClick={handleLogout}
          className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold text-white/40 hover:text-white hover:bg-rose-500 transition-all mt-auto"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-10 overflow-y-auto">
        <header className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-display font-extrabold capitalize">
            Manage {activeTab}
          </h1>
          <div className="text-xs font-bold text-brand-navy/30 uppercase tracking-widest">
            Logged in as {auth.currentUser?.email}
          </div>
        </header>

        {activeTab === 'fixtures' ? (
          <div className="space-y-12">
            {/* Add Fixture */}
            <section className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold mb-6 flex items-center space-x-3">
                <Plus className="w-5 h-5 text-sky-500" />
                <span>Add New Fixture</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/30">Team</label>
                  <select 
                    value={newFixture.team}
                    onChange={(e) => setNewFixture({...newFixture, team: e.target.value})}
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-brand-gold"
                  >
                    <option>1st XI</option>
                    <option>2nd XI</option>
                    <option>Sunday XI</option>
                    <option>Youth Teams</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/30">Opponent</label>
                  <input 
                    type="text" 
                    value={newFixture.opponent || ''}
                    onChange={(e) => setNewFixture({...newFixture, opponent: e.target.value})}
                    placeholder="Opponent Name"
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-brand-gold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/30">Venue</label>
                  <input 
                    type="text" 
                    value={newFixture.venue || ''}
                    onChange={(e) => setNewFixture({...newFixture, venue: e.target.value})}
                    placeholder="Venue"
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-brand-gold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/30">Date & Time</label>
                  <input 
                    type="datetime-local" 
                    value={newFixture.date || ''}
                    onChange={(e) => setNewFixture({...newFixture, date: e.target.value})}
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-brand-gold"
                  />
                </div>
              </div>
              <button 
                onClick={onAddFixture}
                className="mt-8 bg-brand-navy text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 hover:bg-black transition-all"
              >
                <Save className="w-4 h-4 text-brand-gold" />
                <span>Save Fixture</span>
              </button>
            </section>

            {/* List Fixtures */}
            <div className="grid grid-cols-1 gap-4">
              {fixtures.map(f => (
                <div key={f.id} className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-between group">
                  <div>
                    <span className="text-[10px] font-black text-sky-500 uppercase tracking-widest block mb-1">{f.team}</span>
                    <h3 className="font-bold">vs {f.opponent}</h3>
                    <p className="text-xs text-brand-navy/40 mt-1">{new Date(f.date).toLocaleString()} @ {f.venue}</p>
                  </div>
                  <button 
                    onClick={() => f.id && deleteFixture(f.id).then(fetchData)}
                    className="p-2 text-rose-500 opacity-0 group-hover:opacity-100 hover:bg-rose-50 rounded-lg transition-all"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Add Result */}
            <section className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold mb-6 flex items-center space-x-3">
                <Plus className="w-5 h-5 text-emerald-500" />
                <span>Add Match Result</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/30">Team</label>
                  <select 
                    value={newResult.team}
                    onChange={(e) => setNewResult({...newResult, team: e.target.value})}
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-brand-gold"
                  >
                    <option>1st XI</option>
                    <option>2nd XI</option>
                    <option>Sunday XI</option>
                    <option>Youth Teams</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/30">Opponent</label>
                  <input 
                    type="text" 
                    value={newResult.opponent || ''}
                    onChange={(e) => setNewResult({...newResult, opponent: e.target.value})}
                    placeholder="Opponent Name"
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-brand-gold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/30">Outcome</label>
                  <select 
                    value={newResult.outcome}
                    onChange={(e) => setNewResult({...newResult, outcome: e.target.value as any})}
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-brand-gold"
                  >
                    <option>Win</option>
                    <option>Loss</option>
                    <option>Draw</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/30">LTICC Score</label>
                  <input 
                    type="text" 
                    value={newResult.lticcScore || ''}
                    onChange={(e) => setNewResult({...newResult, lticcScore: e.target.value})}
                    placeholder="e.g. 210/7"
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-brand-gold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/30">Opponent Score</label>
                  <input 
                    type="text" 
                    value={newResult.opponentScore || ''}
                    onChange={(e) => setNewResult({...newResult, opponentScore: e.target.value})}
                    placeholder="e.g. 200/10"
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-brand-gold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/30">Margin Text</label>
                  <input 
                    type="text" 
                    value={newResult.margin || ''}
                    onChange={(e) => setNewResult({...newResult, margin: e.target.value})}
                    placeholder="e.g. won by 10 runs"
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-brand-gold"
                  />
                </div>
              </div>
              <button 
                onClick={onAddResult}
                className="mt-8 bg-brand-navy text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 hover:bg-black transition-all"
              >
                <Save className="w-4 h-4 text-brand-gold" />
                <span>Save Result</span>
              </button>
            </section>

             {/* List Results */}
             <div className="grid grid-cols-1 gap-4">
              {results.map(r => (
                <div key={r.id} className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-between group">
                  <div>
                    <div className="flex items-center space-x-3 mb-1">
                      <span className={cn(
                        "px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest",
                        r.outcome === 'Win' ? "bg-emerald-500 text-white" : "bg-rose-500 text-white"
                      )}>{r.outcome}</span>
                      <span className="text-[10px] font-black text-brand-navy/30 uppercase tracking-widest">{r.team}</span>
                    </div>
                    <h3 className="font-bold">vs {r.opponent}</h3>
                    <p className="text-xs text-brand-navy/40 mt-1">{r.lticcScore} vs {r.opponentScore} ({r.margin})</p>
                  </div>
                  <button 
                    onClick={() => r.id && deleteResult(r.id).then(fetchData)}
                    className="p-2 text-rose-500 opacity-0 group-hover:opacity-100 hover:bg-rose-50 rounded-lg transition-all"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
