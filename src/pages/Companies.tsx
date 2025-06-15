
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, Users, MapPin } from 'lucide-react';

const Companies = () => {
  const companies = [
    {
      id: 1,
      name: 'TechCorp Inc.',
      description: 'Leading technology company focused on innovative solutions',
      industry: 'Technology',
      size: '1000-5000',
      location: 'San Francisco, CA',
      openJobs: 15,
      logo: '🏢'
    },
    {
      id: 2,
      name: 'StartupXYZ',
      description: 'Fast-growing startup revolutionizing the fintech industry',
      industry: 'Fintech',
      size: '50-200',
      location: 'New York, NY',
      openJobs: 8,
      logo: '🚀'
    },
    {
      id: 3,
      name: 'Design Studio',
      description: 'Creative agency specializing in digital experiences',
      industry: 'Design',
      size: '10-50',
      location: 'Remote',
      openJobs: 5,
      logo: '🎨'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Top Companies</h1>
          <p className="text-muted-foreground">
            Discover amazing companies and find your next opportunity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Card key={company.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{company.logo}</div>
                  <div>
                    <CardTitle>{company.name}</CardTitle>
                    <CardDescription>{company.industry}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{company.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{company.size} employees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{company.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="secondary">
                    {company.openJobs} open positions
                  </Badge>
                  <Button variant="outline" size="sm">
                    View Jobs
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Companies;
