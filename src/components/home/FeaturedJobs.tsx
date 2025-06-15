
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign, Bookmark } from 'lucide-react';

const FeaturedJobs = () => {
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $160k',
      posted: '2 days ago',
      logo: '🚀',
      tags: ['React', 'TypeScript', 'Next.js'],
      description: 'Join our innovative team to build cutting-edge web applications...'
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Innovation Labs',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$100k - $140k',
      posted: '1 day ago',
      logo: '💡',
      tags: ['Product Strategy', 'Analytics', 'Agile'],
      description: 'Lead product development from conception to launch...'
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      company: 'Creative Studio',
      location: 'Remote',
      type: 'Contract',
      salary: '$80k - $110k',
      posted: '3 days ago',
      logo: '🎨',
      tags: ['Figma', 'User Research', 'Prototyping'],
      description: 'Create beautiful and intuitive user experiences...'
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'Analytics Pro',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$130k - $170k',
      posted: '1 day ago',
      logo: '📊',
      tags: ['Python', 'Machine Learning', 'SQL'],
      description: 'Analyze complex data to drive business insights...'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'CloudTech',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$110k - $150k',
      posted: '4 days ago',
      logo: '☁️',
      tags: ['AWS', 'Docker', 'Kubernetes'],
      description: 'Build and maintain scalable cloud infrastructure...'
    },
    {
      id: 6,
      title: 'Marketing Manager',
      company: 'Growth Co.',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$75k - $95k',
      posted: '2 days ago',
      logo: '📈',
      tags: ['Digital Marketing', 'SEO', 'Content'],
      description: 'Drive marketing campaigns and brand growth...'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Job Opportunities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover hand-picked opportunities from top companies looking for talented professionals like you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {jobs.map((job) => (
            <Card key={job.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{job.logo}</div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{job.posted}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{job.type}</Badge>
                  <div className="flex items-center space-x-1 text-sm font-medium text-primary">
                    <DollarSign className="h-4 w-4" />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Jobs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
