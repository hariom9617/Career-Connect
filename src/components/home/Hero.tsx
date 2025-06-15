
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Briefcase } from 'lucide-react';

const Hero = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Find Your Dream{' '}
            <span className="text-primary">Career</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Connect with top employers and discover opportunities that match your skills, 
            interests, and career goals. Your next career move starts here.
          </p>

          {/* Job Search Form */}
          <div className="bg-card rounded-2xl shadow-xl p-8 mb-12 max-w-4xl mx-auto animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Job title or keyword"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Button size="lg" className="h-12 px-8">
                <Search className="h-5 w-5 mr-2" />
                Search Jobs
              </Button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
            <span className="text-sm text-muted-foreground">Popular searches:</span>
            {['Frontend Developer', 'Data Scientist', 'Product Manager', 'UX Designer', 'Marketing'].map((term) => (
              <Button key={term} variant="outline" size="sm" className="rounded-full">
                {term}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
