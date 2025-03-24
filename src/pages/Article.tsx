
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import { sampleArticles } from '@/lib/data';
import { Share, ChevronLeft, Clock, User } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState(sampleArticles[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedArticles, setRelatedArticles] = useState<typeof sampleArticles>([]);
  
  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    
    // Find the article by ID
    const foundArticle = sampleArticles.find(article => article.id === id);
    
    if (foundArticle) {
      setArticle(foundArticle);
      
      // Find related articles (same category, excluding current)
      const related = sampleArticles
        .filter(a => a.category === foundArticle.category && a.id !== foundArticle.id)
        .slice(0, 3);
      
      setRelatedArticles(related);
    }
    
    // Finish loading after a delay to simulate API fetch
    setTimeout(() => {
      setIsLoading(false);
      // Scroll to top
      window.scrollTo(0, 0);
    }, 300);
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse space-y-8 w-full max-w-3xl px-4">
            <div className="h-10 bg-secondary rounded w-3/4"></div>
            <div className="h-6 bg-secondary rounded w-1/2"></div>
            <div className="h-64 bg-secondary rounded"></div>
            <div className="space-y-4">
              <div className="h-4 bg-secondary rounded"></div>
              <div className="h-4 bg-secondary rounded"></div>
              <div className="h-4 bg-secondary rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20 animate-fade-in">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
            
            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-secondary text-primary mb-4">
              {article.category}
            </span>
            
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-balance">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground mb-6">
              <span className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                By {article.author}
              </span>
              
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {formatDistanceToNow(article.publishedAt, { addSuffix: true })}
              </span>
              
              <span>Source: {article.source}</span>
            </div>
          </div>
          
          <div className="mb-8 aspect-video rounded-lg overflow-hidden bg-secondary">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="prose prose-lg max-w-none mb-10" dangerouslySetInnerHTML={{ __html: article.content }} />
          
          <div className="flex justify-center mb-10 pt-6 border-t">
            <Button variant="outline" className="gap-2">
              <Share className="h-4 w-4" />
              Share this article
            </Button>
          </div>
        </article>
        
        {relatedArticles.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t">
            <h2 className="text-2xl font-semibold mb-6">Related Articles</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((article) => (
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
          </section>
        )}
      </main>
      
      {/* Simplified footer */}
      <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-background border-t text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Ghana News Nexus. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Article;
