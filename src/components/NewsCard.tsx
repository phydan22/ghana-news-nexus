
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  publishedAt: Date;
  source: string;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

const NewsCard = ({
  id,
  title,
  excerpt,
  category,
  imageUrl,
  publishedAt,
  source,
  variant = 'default',
  className,
}: NewsCardProps) => {
  const isFeatured = variant === 'featured';
  const isCompact = variant === 'compact';
  
  return (
    <Link 
      to={`/article/${id}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg border card-hover',
        isFeatured ? 'lg:flex-row' : '',
        isCompact ? 'flex-row h-24' : '',
        className
      )}
    >
      <div 
        className={cn(
          'relative overflow-hidden bg-secondary',
          isFeatured ? 'lg:w-2/3 aspect-[2/1]' : 'aspect-[3/2]',
          isCompact ? 'w-1/3 h-full' : ''
        )}
      >
        <img 
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      
      <div className={cn(
        'flex flex-1 flex-col p-4 sm:p-6',
        isFeatured ? 'lg:p-8' : '',
        isCompact ? 'p-3' : ''
      )}>
        <div className="mb-2 flex items-center space-x-2">
          <span className={cn(
            'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium',
            category === 'Politics' ? 'bg-red-100 text-red-800' :
            category === 'Business' ? 'bg-blue-100 text-blue-800' :
            category === 'Sports' ? 'bg-green-100 text-green-800' :
            category === 'Entertainment' ? 'bg-purple-100 text-purple-800' :
            category === 'Technology' ? 'bg-indigo-100 text-indigo-800' :
            'bg-gray-100 text-gray-800'
          )}>
            {category}
          </span>
          <span className="text-xs text-muted-foreground">
            {formatDistanceToNow(publishedAt, { addSuffix: true })}
          </span>
        </div>
        
        <h3 className={cn(
          'font-semibold leading-tight tracking-tight text-balance',
          isFeatured ? 'text-xl' : 'text-lg',
          isCompact ? 'text-base line-clamp-2' : ''
        )}>
          {title}
        </h3>
        
        {!isCompact && (
          <p className={cn(
            'mt-2 line-clamp-2 text-muted-foreground',
            isFeatured ? 'line-clamp-3' : ''
          )}>
            {excerpt}
          </p>
        )}
        
        {!isCompact && (
          <div className="mt-auto pt-4 text-xs text-muted-foreground">
            Source: {source}
          </div>
        )}
      </div>
    </Link>
  );
};

export default NewsCard;
