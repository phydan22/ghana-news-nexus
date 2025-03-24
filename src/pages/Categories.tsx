
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import { sampleArticles, categories } from '@/lib/data';
import { fetchAllFeeds } from '@/lib/rss-service';
import { NewsArticle } from '@/lib/data';
import { useToast } from '@/components/ui/use-toast';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Categories = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('cat') || '';
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Fetch news from RSS feeds
  useEffect(() => {
    const loadFeeds = async () => {
      try {
        setIsLoading(true);
        const feedArticles = await fetchAllFeeds();
        
        if (feedArticles.length > 0) {
          setArticles(feedArticles);
        } else {
          // Fall back to sample data if no articles were fetched
          setArticles(sampleArticles);
          toast({
            title: "Using sample data",
            description: "We couldn't fetch the latest news, so we're showing sample articles instead.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Error loading feeds:', error);
        setArticles(sampleArticles);
        toast({
          title: "Connection error",
          description: "Failed to load news feeds. Using sample data instead.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadFeeds();
  }, [toast]);

  // Filter articles by selected category
  useEffect(() => {
    if (selectedCategory) {
      const categoryName = categories.find(c => c.slug === selectedCategory)?.name || '';
      setFilteredArticles(
        articles.filter(article => 
          article.category.toLowerCase() === categoryName.toLowerCase() || 
          article.category.toLowerCase() === selectedCategory.toLowerCase()
        )
      );
    } else {
      setFilteredArticles(articles);
    }
  }, [selectedCategory, articles]);

  const getCategoryInfo = () => {
    return categories.find(c => c.slug === selectedCategory) || {
      name: 'All Categories',
      description: 'Browse all news articles from across Ghana',
      count: filteredArticles.length
    };
  };

  const categoryInfo = getCategoryInfo();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 animate-fade-in">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">{categoryInfo.name}</h1>
            <p className="text-muted-foreground mb-6">
              {categoryInfo.description}
            </p>
            
            {/* Category filter buttons */}
            <div className="overflow-x-auto pb-4">
              <div className="flex space-x-2 min-w-max">
                <Button
                  key="all"
                  variant={!selectedCategory ? "default" : "outline"}
                  size="sm"
                  className="whitespace-nowrap"
                  onClick={() => {
                    const params = new URLSearchParams();
                    window.history.pushState({}, '', `/categories?${params.toString()}`);
                    setFilteredArticles(articles);
                  }}
                >
                  All Categories
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.slug ? "default" : "outline"}
                    size="sm"
                    className="whitespace-nowrap"
                    onClick={() => {
                      const params = new URLSearchParams();
                      params.set('cat', category.slug);
                      window.history.pushState({}, '', `/categories?${params.toString()}`);
                      setFilteredArticles(
                        articles.filter(article => 
                          article.category.toLowerCase() === category.name.toLowerCase() || 
                          article.category.toLowerCase() === category.slug.toLowerCase()
                        )
                      );
                    }}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Articles grid */}
          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-64 bg-secondary animate-pulse rounded-lg"></div>
              ))}
            </div>
          ) : filteredArticles.length > 0 ? (
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
            <div className="text-center p-10 bg-secondary rounded-lg">
              <p className="text-lg mb-2">No articles found</p>
              <p className="text-muted-foreground">
                There are currently no articles in this category. Please check back later or explore other categories.
              </p>
            </div>
          )}
        </div>
      </main>
      
      {/* Categories Overview - Summary table */}
      {!selectedCategory && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Categories Overview</h2>
            <div className="bg-background rounded-lg overflow-hidden">
              <Table>
                <TableCaption>A list of all news categories</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Articles</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {categories.map((category) => {
                    const count = articles.filter(
                      article => article.category.toLowerCase() === category.name.toLowerCase() || 
                                article.category.toLowerCase() === category.slug.toLowerCase()
                    ).length;
                    
                    return (
                      <TableRow key={category.id}>
                        <TableCell className="font-medium">
                          <a 
                            href={`/categories?cat=${category.slug}`}
                            className="hover:text-primary transition-colors"
                          >
                            {category.name}
                          </a>
                        </TableCell>
                        <TableCell>{category.description}</TableCell>
                        <TableCell className="text-right">{count}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
      )}
      
      {/* Simplified footer */}
      <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-background border-t text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Ghana News Nexus. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Categories;
