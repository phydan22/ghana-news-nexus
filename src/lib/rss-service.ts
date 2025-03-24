
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
  'content:encoded'?: string; // Add this field to match the custom field declaration
};

type CustomFeed = {
  title: string;
  link: string;
  items: CustomItem[];
};

// Create a new RSS parser instance
const parser: Parser<CustomFeed, CustomItem> = new Parser({
  customFields: {
    item: [
      'media:content',
      'creator',
      ['content:encoded', 'content:encoded'], // Fix: Use an array format to map the field correctly
      'content',
    ],
  },
});

// List of RSS feed URLs from Ghanaian news sources
const FEED_URLS = [
  'https://www.myjoyonline.com/feed/',
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
    content: item.content || '',
    category: getCategory(item),
    imageUrl: getImageUrl(item),
    publishedAt: item.isoDate ? new Date(item.isoDate) : new Date(),
    source: source,
    author: item.creator || 'Ghana News Nexus'
  };
};

// Fetch RSS feeds from all sources and convert to NewsArticle[]
export const fetchAllFeeds = async (): Promise<NewsArticle[]> => {
  try {
    const allPromises = FEED_URLS.map(async (url) => {
      try {
        const feed = await parser.parseURL(url);
        const source = feed.title || new URL(url).hostname;
        
        return feed.items.map(item => convertRssItemToArticle(item, source));
      } catch (error) {
        console.error(`Error fetching feed from ${url}:`, error);
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
