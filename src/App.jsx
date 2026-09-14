import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import WhatWeBuild from './components/WhatWeBuild';
import BusinessSolutions from './components/BusinessSolutions';
import WhyChooseUs from './components/WhyChooseUs';
import OurProcess from './components/OurProcess';
import Pricing from './components/Pricing';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
            <TrustBar />
            <WhatWeBuild />
            <BusinessSolutions />
            <WhyChooseUs />
            <OurProcess />
            <Pricing />
            <About />
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