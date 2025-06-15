
import React from 'react';
import { Briefcase, Users, Building, TrendingUp } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Briefcase,
      value: '50,000+',
      label: 'Active Jobs',
      description: 'New opportunities added daily'
    },
    {
      icon: Users,
      value: '1M+',
      label: 'Job Seekers',
      description: 'Talented professionals registered'
    },
    {
      icon: Building,
      value: '10,000+',
      label: 'Companies',
      description: 'Trusted employers worldwide'
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Success Rate',
      description: 'Successful job placements'
    }
  ];

  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover-scale">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
