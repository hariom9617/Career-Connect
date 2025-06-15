
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Briefcase } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Briefcase className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">CareerConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/jobs" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Find Jobs
            </Link>
            <Link to="/companies" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Companies
            </Link>
            <Link to="/post-job" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Post a Job
            </Link>
            <Link to="/career-advice" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Career Advice
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <Link to="/jobs" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Find Jobs
              </Link>
              <Link to="/companies" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Companies
              </Link>
              <Link to="/post-job" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Post a Job
              </Link>
              <Link to="/career-advice" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Career Advice
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/signin">Sign In</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
