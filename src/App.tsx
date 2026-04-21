import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/src/components/layout/Layout';
import Home from '@/src/pages/Home';
import Fixtures from '@/src/pages/Fixtures';
import Membership from '@/src/pages/Membership';

// Placeholder pages for non-fail build
const Teams = () => <div className="py-20 text-center font-display text-4xl">Teams Page Coming Soon</div>;
const Contact = () => <div className="py-20 text-center font-display text-4xl">Contact Page Coming Soon</div>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fixtures" element={<Fixtures />} />
          <Route path="membership" element={<Membership />} />
          <Route path="teams" element={<Teams />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
