import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '@/src/lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

const ADMIN_EMAIL = 'roscian.frank@ten10.com';

interface AdminAuthProps {
  children: ReactNode;
}

export default function AdminAuth({ children }: AdminAuthProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u && u.email === ADMIN_EMAIL && u.emailVerified) {
        setUser(u);
      } else {
        setUser(null);
        if (!loading) navigate('/admin/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-navy">
        <div className="w-8 h-8 border-4 border-brand-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}
