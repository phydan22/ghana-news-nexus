
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, BookOpen, PlusCircle, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
  
  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="h-4 w-4 mr-1" /> },
    { name: 'Categories', path: '/categories', icon: <BookOpen className="h-4 w-4 mr-1" /> },
    { name: 'Submit News', path: '/submit', icon: <PlusCircle className="h-4 w-4 mr-1" /> },
  ];
  
  const navClasses = cn(
    'fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300',
    isScrolled ? 'bg-white/90 shadow-sm' : 'bg-white/50'
  );
  
  return (
    <header className={navClasses}>
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 animate-scale-in-fast">
          <div className="flex space-x-1">
            <div className="h-5 w-1 bg-ghana-red rounded-sm" />
            <div className="h-5 w-1 bg-ghana-yellow rounded-sm" />
            <div className="h-5 w-1 bg-ghana-green rounded-sm" />
          </div>
          <h1 className="text-xl font-semibold tracking-tight">
            Ghana News Nexus
          </h1>
        </Link>

        {isMobile ? (
          <>
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-secondary"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            
            {menuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white shadow-md animate-slide-in">
                <nav className="container mx-auto px-4 py-4">
                  <ul className="space-y-3">
                    {navItems.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          className={cn(
                            'flex items-center px-3 py-2 rounded-md w-full',
                            location.pathname === item.path
                              ? 'bg-secondary font-medium text-primary'
                              : 'text-muted-foreground hover:bg-secondary/50'
                          )}
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  location.pathname === item.path
                    ? 'bg-secondary text-primary'
                    : 'text-muted-foreground hover:bg-secondary/50 hover:text-primary'
                )}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
