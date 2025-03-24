
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const categories = [
  'Politics',
  'Business',
  'Sports',
  'Entertainment',
  'Technology',
  'Health',
  'Education',
  'Other'
];

const SubmitForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    source: '',
    contactEmail: '',
    contactPhone: '',
    authorName: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: 'Submission Received',
      description: 'Thank you for your contribution to Ghana News Nexus!',
    });
    
    setFormData({
      title: '',
      content: '',
      category: '',
      source: '',
      contactEmail: '',
      contactPhone: '',
      authorName: '',
    });
    
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">News Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter a concise, informative title"
            required
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select 
            value={formData.category} 
            onValueChange={handleCategoryChange}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="content">News Content</Label>
          <Textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your news article here. Include all relevant details."
            required
            className="min-h-[200px] w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="source">Source</Label>
          <Input
            id="source"
            name="source"
            value={formData.source}
            onChange={handleChange}
            placeholder="Original source (if applicable)"
            className="w-full"
          />
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="authorName">Your Name</Label>
            <Input
              id="authorName"
              name="authorName"
              value={formData.authorName}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="contactEmail">Email Address</Label>
            <Input
              id="contactEmail"
              name="contactEmail"
              type="email"
              value={formData.contactEmail}
              onChange={handleChange}
              placeholder="Your email address"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="contactPhone">Phone Number (Optional)</Label>
          <Input
            id="contactPhone"
            name="contactPhone"
            type="tel"
            value={formData.contactPhone}
            onChange={handleChange}
            placeholder="Your phone number"
          />
        </div>
      </div>
      
      <div className="pt-4">
        <Button 
          type="submit" 
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit News'}
        </Button>
      </div>
    </form>
  );
};

export default SubmitForm;
