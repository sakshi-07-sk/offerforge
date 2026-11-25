import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AIFeaturesSection from './components/AIFeaturesSection';
import DashboardPreview from './components/DashboardPreview';
import WorkflowSection from './components/WorkflowSection';
import WhyChooseSection from './components/WhyChooseSection';
import StatisticsSection from './components/StatisticsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const LandingPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AIFeaturesSection />
        <WorkflowSection />
        <DashboardPreview />
        <WhyChooseSection />
        <StatisticsSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
