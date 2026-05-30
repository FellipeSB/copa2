import { useEffect } from 'react';
import TopBanner from './components/TopBanner';
import Hero from './components/Hero';
import WhyItSells from './components/WhyItSells';
import Opportunity from './components/Opportunity';
import ProfitCalculator from './components/ProfitCalculator';
import HowItWorks from './components/HowItWorks';
import WhatYouGet from './components/WhatYouGet';
import SocialProof from './components/SocialProof';
import WhereToSell from './components/WhereToSell';
import Offer from './components/Offer';
import FAQ from './components/FAQ';
import FloatingNotification from './components/FloatingNotification';
import Footer from './components/Footer';
import { trackPageView } from './utils/tracking';

export default function App() {
  useEffect(() => {
    trackPageView();
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-800 selection:bg-green-200">
      <TopBanner />
      <main>
        <Hero />
        <WhyItSells />
        <Opportunity />
        <HowItWorks />
        <ProfitCalculator />
        <WhatYouGet />
        <SocialProof />
        <WhereToSell />
        <Offer />
        <FAQ />
      </main>
      <Footer />
      <FloatingNotification />
    </div>
  );
}
