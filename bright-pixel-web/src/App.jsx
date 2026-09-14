import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import LoadingScreen from './components/LoadingScreen';
import ServiceDetail from './pages/ServiceDetail';
import ChatAssistant from './components/ChatAssistant';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <Projects />
            <About />
            <Testimonials />
            <FAQ />
            <Contact />
          </>
        } />
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
      <ChatAssistant />
      <Footer />
    </div>
  );
}

export default App;
