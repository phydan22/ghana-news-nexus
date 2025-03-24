
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { sampleArticles, categories } from '@/lib/data';
import { Search, SlidersHorizontal } from 'lucide-react';

const Categories = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredArticles, setFilteredArticles] = useState(sampleArticles);
  
  useEffect(() => {
    // Get category from URL query params
    const searchParams = new URLSearchParams(location.search);
    const catParam = searchParams.get('cat');
    
    if (catParam) {
      const category = categories.find(c => c.slug === catParam);
      if (category) {
        setSelectedCategory(category.name);
      }
    } else {
      setSelectedCategory(null);
    }
  }, [location.search]);
  
  useEffect(() => {
    // Filter articles based on selected category and search term
    let filtered = [...sampleArticles];
    
    if (selectedCategory) {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        article => 
          article.title.toLowerCase().includes(term) ||
          article.excerpt.toLowerCase().includes(term) ||
          article.content.toLowerCase().includes(term)
      );
    }
    
    setFilteredArticles(filtered);
  }, [selectedCategory, searchTerm]);
  
  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };
  
  // Handle category selection
  const handleCategorySelect = (categoryName: string) => {
    const category = categories.find(c => c.name === categoryName);
    if (category) {
      navigate(`/categories?cat=${category.slug}`);
    }
  };
  
  // Clear filters
  const clearFilters = () => {
    setSearchTerm('');
    navigate('/categories');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">
              {selectedCategory ? `${selectedCategory} News` : 'All Categories'}
            </h1>
            <p className="text-muted-foreground">
              {selectedCategory 
                ? `Browse the latest ${selectedCategory.toLowerCase()} news from across Ghana` 
                : 'Browse news articles by category or search for specific topics'}
            </p>
          </div>
          
          {/* Search and filter */}
          <div className="mb-8">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <Button type="submit" variant="default">Search</Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={clearFilters}
                  className="px-3"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  <span className="sr-only">Clear filters</span>
                </Button>
              </div>
            </form>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategorySelect(category.name)}
                  className="mb-2"
                >
                  {category.name}
                  <span className="ml-1 text-xs opacity-70">({category.count})</span>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Results */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Showing {filteredArticles.length} articles
            </p>
          </div>
          
          {filteredArticles.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
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
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      {/* Simplified footer */}
      <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-background border-t text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Ghana News Nexus. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Categories;
