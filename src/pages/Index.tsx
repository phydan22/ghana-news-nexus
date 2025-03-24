
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { sampleArticles, categories } from '@/lib/data';
import { Search } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get the featured article (most recent)
  const featuredArticle = sampleArticles[0];
  
  // Get the rest of the articles
  const recentArticles = sampleArticles.slice(1);
  
  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // In a real app, this would navigate to search results
      console.log('Searching for:', searchTerm);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero section with search */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Ghana News Nexus
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your trusted source for the latest news and stories from across Ghana
          </p>
          
          <form onSubmit={handleSearch} className="flex w-full max-w-lg mx-auto gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search for news..."
                className="pl-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button type="submit">Search</Button>
          </form>
        </div>
      </section>
      
      {/* Categories quick select */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="overflow-x-auto pb-2">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                size="sm"
                className="whitespace-nowrap"
                onClick={() => navigate(`/categories?cat=${category.slug}`)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Article */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h2 className="text-2xl font-semibold mb-6">Featured Story</h2>
        <NewsCard
          id={featuredArticle.id}
          title={featuredArticle.title}
          excerpt={featuredArticle.excerpt}
          category={featuredArticle.category}
          imageUrl={featuredArticle.imageUrl}
          publishedAt={featuredArticle.publishedAt}
          source={featuredArticle.source}
          variant="featured"
        />
      </section>
      
      {/* Recent Articles */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h2 className="text-2xl font-semibold mb-6">Latest News</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentArticles.map((article) => (
            <NewsCard
              key={article.id}
              id={article.id}
              title={article.title}
              excerpt={article.excerpt}
              category={article.category}
              imageUrl={article.imageUrl}
              publishedAt={article.publishedAt}
              source={article.source}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" onClick={() => navigate('/categories')}>
            View More Articles
          </Button>
        </div>
      </section>
      
      {/* Submit news CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Story to Share?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ghana News Nexus welcomes submissions from citizen journalists across the country.
            Share your local stories, events, and perspectives with our readers.
          </p>
          <Button size="lg" onClick={() => navigate('/submit')}>
            Submit Your News
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 px-4 sm:px-6 lg:px-8 bg-background border-t">
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-semibold mb-3">Ghana News Nexus</h3>
            <p className="text-sm text-muted-foreground">
              Your trusted source for news and stories from across Ghana.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <ul className="text-sm space-y-2">
              {categories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <a href={`/categories?cat=${category.slug}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Advertise</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-10 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ghana News Nexus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
