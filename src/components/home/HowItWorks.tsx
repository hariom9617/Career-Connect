
import React from 'react';
import { Search, FileText, MessageSquare, Briefcase } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Search & Discover',
      description: 'Browse thousands of job opportunities tailored to your skills and preferences.',
      step: '01'
    },
    {
      icon: FileText,
      title: 'Create Profile',
      description: 'Build a compelling profile that showcases your experience and achievements.',
      step: '02'
    },
    {
      icon: MessageSquare,
      title: 'Apply & Connect',
      description: 'Submit applications and connect directly with hiring managers and recruiters.',
      step: '03'
    },
    {
      icon: Briefcase,
      title: 'Land Your Dream Job',
      description: 'Interview with confidence and secure the perfect role for your career growth.',
      step: '04'
    }
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started with CareerConnect is simple. Follow these easy steps to begin your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group relative">
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {step.step}
              </div>
              
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <step.icon className="h-10 w-10 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
