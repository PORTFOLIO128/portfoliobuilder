'use client';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import CallToAction from '../components/CallToAction';
import PaymentSection from '../components/PaymentSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CallToAction />
      <PaymentSection />
      <Footer />
    </div>
  );
}