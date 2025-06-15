
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import FeaturedJobs from '@/components/home/FeaturedJobs';
import Stats from '@/components/home/Stats';
import HowItWorks from '@/components/home/HowItWorks';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <FeaturedJobs />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
