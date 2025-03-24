
import Parser from 'rss-parser';
import { NewsArticle } from './data';

// Custom type for our RSS parser
type CustomItem = {
  title: string;
  link: string;
  content: string;
  contentSnippet: string;
  guid: string;
  categories?: string[];
  isoDate?: string;
  creator?: string;
  'media:content'?: {
    $: {
      url: string;
    }
  };
  'content:encoded'?: string;
};

type CustomFeed = {
  title: string;
  link: string;
  items: CustomItem[];
};

// Define the proper types for the parser options
// Using type assertion to match the library's expected types
const parserOptions: Parser.ParserOptions<CustomFeed, CustomItem> = {
  customFields: {
    item: [
      'media:content',
      'creator',
      ['content:encoded', 'content:encoded'],
      'content',
    ] as Parser.CustomFieldItem<CustomItem>[], // Type assertion to make TypeScript happy
  },
};

// List of RSS feed URLs from Ghanaian news sources
const FEED_URLS = [
  // 'https://www.myjoyonline.com/feed/', - Removed as requested
  'https://ghanaiantimes.com.gh/feed/',
  'https://accramail.com/feed/',
  'https://www.pulse.com.gh/rss'
];

// Get category from RSS categories or default to "General"
const getCategory = (item: CustomItem): string => {
  if (item.categories && item.categories.length > 0) {
    return item.categories[0];
  }
  return "General";
};

// Get image URL from various possible sources in RSS feed
const getImageUrl = (item: CustomItem): string => {
  // Try to get image from media:content
  if (item['media:content'] && item['media:content'].$ && item['media:content'].$.url) {
    return item['media:content'].$.url;
  }
  
  // Try to extract image from content if it exists
  if (item.content) {
    const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
    if (imgMatch && imgMatch[1]) {
      return imgMatch[1];
    }
  }
  
  // Default placeholder image
  return 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
};

// Convert an RSS item to our NewsArticle format
const convertRssItemToArticle = (item: CustomItem, source: string): NewsArticle => {
  return {
    id: item.guid || item.link,
    title: item.title,
    excerpt: item.contentSnippet || '',
    content: item.content || item['content:encoded'] || '',
    category: getCategory(item),
    imageUrl: getImageUrl(item),
    publishedAt: item.isoDate ? new Date(item.isoDate) : new Date(),
    source: source,
    author: item.creator || 'Ghana News Nexus'
  };
};

// Helper function to fetch a single feed using a proxy service
const fetchFeed = async (url: string): Promise<CustomFeed | null> => {
  try {
    // Use a free RSS to JSON proxy service to avoid CORS issues and browser compatibility problems
    const rssToJsonServiceUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`;
    
    const response = await fetch(rssToJsonServiceUrl);
    const data = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error(`RSS feed returned status: ${data.status}`);
    }
    
    // Convert the RSS2JSON format to our CustomFeed format
    const feed: CustomFeed = {
      title: data.feed.title,
      link: data.feed.link,
      items: data.items.map((item: any) => {
        return {
          title: item.title,
          link: item.link,
          content: item.content,
          contentSnippet: item.description,
          guid: item.guid || item.link,
          categories: item.categories,
          isoDate: item.pubDate,
          creator: item.author,
        };
      }),
    };
    
    return feed;
  } catch (error) {
    console.error(`Error fetching feed from ${url}:`, error);
    return null;
  }
};

// Fetch RSS feeds from all sources and convert to NewsArticle[]
export const fetchAllFeeds = async (): Promise<NewsArticle[]> => {
  try {
    const allPromises = FEED_URLS.map(async (url) => {
      try {
        const feed = await fetchFeed(url);
        if (!feed) return [];
        
        const source = feed.title || new URL(url).hostname;
        return feed.items.map(item => convertRssItemToArticle(item, source));
      } catch (error) {
        console.error(`Error processing feed from ${url}:`, error);
        return [];
      }
    });

    const results = await Promise.all(allPromises);
    const allArticles = results.flat();
    
    // Sort articles by publication date (newest first)
    return allArticles.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  } catch (error) {
    console.error('Error fetching RSS feeds:', error);
    return [];
  }
};
