import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/src/components/layout/Layout';
import Home from '@/src/pages/Home';
import Fixtures from '@/src/pages/Fixtures';
import Membership from '@/src/pages/Membership';
import Teams from '@/src/pages/Teams';
import Contact from '@/src/pages/Contact';
import News from '@/src/pages/News';
import AdminLogin from '@/src/pages/admin/Login';
import AdminDashboard from '@/src/pages/admin/Dashboard';
import AdminAuth from '@/src/components/admin/AdminAuth';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fixtures" element={<Fixtures />} />
          <Route path="membership" element={<Membership />} />
          <Route path="teams" element={<Teams />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <AdminAuth>
              <AdminDashboard />
            </AdminAuth>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}
