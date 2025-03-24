
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { formatDistanceToNow, format } from 'date-fns';
import { sampleArticles } from '@/lib/data';
import { fetchAllFeeds } from '@/lib/rss-service';
import { NewsArticle } from '@/lib/data';
import { useToast } from '@/components/ui/use-toast';

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Fetch article data
  useEffect(() => {
    const loadArticle = async () => {
      try {
        setIsLoading(true);
        
        // Try to get real data first
        const allArticles = await fetchAllFeeds();
        let foundArticle: NewsArticle | undefined;
        
        if (allArticles.length > 0) {
          // Find the article with the matching ID
          foundArticle = allArticles.find(a => a.id === id);
          
          // If found, set related articles from the same category
          if (foundArticle) {
            setArticle(foundArticle);
            setRelatedArticles(
              allArticles
                .filter(a => a.id !== id && a.category === foundArticle.category)
                .slice(0, 3)
            );
            return;
          }
        }
        
        // Fallback to sample data if article not found in RSS feeds
        foundArticle = sampleArticles.find(a => a.id === id);
        
        if (foundArticle) {
          setArticle(foundArticle);
          setRelatedArticles(
            sampleArticles
              .filter(a => a.id !== id && a.category === foundArticle.category)
              .slice(0, 3)
          );
        } else {
          toast({
            title: "Article not found",
            description: "The article you're looking for couldn't be found.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Error loading article:', error);
        toast({
          title: "Error loading article",
          description: "There was a problem loading the article. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      loadArticle();
    }
  }, [id, toast]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 animate-fade-in">
            <div className="w-full h-64 bg-secondary animate-pulse rounded-lg mb-8"></div>
            <div className="space-y-4">
              <div className="h-10 bg-secondary animate-pulse rounded-lg w-3/4"></div>
              <div className="h-6 bg-secondary animate-pulse rounded-lg w-1/2"></div>
              <div className="h-4 bg-secondary animate-pulse rounded-lg w-full"></div>
              <div className="h-4 bg-secondary animate-pulse rounded-lg w-full"></div>
              <div className="h-4 bg-secondary animate-pulse rounded-lg w-3/4"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 animate-fade-in">
          {/* Back button */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="pl-0 hover:pl-1 transition-all">
              <Link to="/" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to News
              </Link>
            </Button>
          </div>
          
          {/* Article header */}
          <header className="mb-10">
            <div className="mb-6">
              <span 
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                  ${article.category === 'Politics' ? 'bg-red-100 text-red-800' :
                   article.category === 'Business' ? 'bg-blue-100 text-blue-800' :
                   article.category === 'Sports' ? 'bg-green-100 text-green-800' :
                   article.category === 'Entertainment' ? 'bg-purple-100 text-purple-800' :
                   article.category === 'Technology' ? 'bg-indigo-100 text-indigo-800' :
                   'bg-gray-100 text-gray-800'}
                `}
              >
                {article.category}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground">
              {article.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                <span>{article.author || article.source}</span>
              </div>
              
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                <time dateTime={article.publishedAt.toISOString()}>
                  {format(article.publishedAt, 'MMMM d, yyyy')}
                </time>
              </div>
              
              <div>
                {formatDistanceToNow(article.publishedAt, { addSuffix: true })}
              </div>
              
              <div>
                Source: {article.source}
              </div>
            </div>
          </header>
          
          {/* Featured image */}
          <div className="mb-10 rounded-lg overflow-hidden">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </article>
        
        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-16">
            <h2 className="text-2xl font-semibold mb-6">Related Articles</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((related) => (
                <NewsCard
                  key={related.id}
                  id={related.id}
                  title={related.title}
                  excerpt={related.excerpt}
                  category={related.category}
                  imageUrl={related.imageUrl}
                  publishedAt={related.publishedAt}
                  source={related.source}
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
