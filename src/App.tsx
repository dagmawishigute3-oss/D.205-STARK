import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [pathname]);
  return null;
}
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { Home } from './pages/Home';
import { Emergency } from './pages/Emergency';
import { Diseases } from './pages/Diseases';
import { DiseaseDetail } from './pages/DiseaseDetail';
import { FirstAid } from './pages/FirstAid';
import { HealthTips } from './pages/HealthTips';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export default function App() {
  useEffect(() => { document.title = 'Tenaye'; }, []);
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <ScrollToTop />
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/diseases" element={<Diseases />} />
            <Route path="/diseases/:id" element={<DiseaseDetail />} />
            <Route path="/first-aid" element={<FirstAid />} />
            <Route path="/health-tips" element={<HealthTips />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
        <AIAssistant />
      </div>
    </BrowserRouter>
  );
}
