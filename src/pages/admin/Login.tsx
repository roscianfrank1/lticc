import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithGoogle, auth } from '@/src/lib/firebase';
import { Trophy, LogIn } from 'lucide-react';

const ADMIN_EMAIL = 'roscian.frank@ten10.com';

export default function AdminLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser?.email === ADMIN_EMAIL) {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const user = await loginWithGoogle();
      if (user?.email === ADMIN_EMAIL) {
        navigate('/admin/dashboard');
      } else {
        await auth.signOut();
        setError('Unauthorized access. Admin only.');
      }
    } catch (err) {
      setError('Failed to login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-navy p-4">
      <div className="max-w-md w-full bg-white rounded-[40px] p-10 text-center shadow-2xl">
        <div className="bg-brand-gold w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-brand-gold/20">
          <Trophy className="w-10 h-10 text-brand-navy" />
        </div>
        
        <h1 className="text-3xl font-display font-extrabold text-brand-navy mb-2">LTICC Admin</h1>
        <p className="text-brand-navy/60 mb-10 font-medium tracking-tight">Access the club management portal</p>
        
        {error && (
          <div className="bg-rose-50 text-rose-600 p-4 rounded-2xl text-sm font-bold mb-6 border border-rose-100 italic">
            {error}
          </div>
        )}
        
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center space-x-3 bg-brand-navy text-white p-4 rounded-2xl font-bold hover:bg-black transition-all duration-300 disabled:opacity-50"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <LogIn className="w-5 h-5 text-brand-gold" />
              <span>Login with Google</span>
            </>
          )}
        </button>
        
        <p className="mt-8 text-[10px] uppercase font-bold tracking-[0.2em] text-brand-navy/30">
          Restricted access for LTICC administrators only
        </p>
      </div>
    </div>
  );
}
