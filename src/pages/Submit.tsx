
import React from 'react';
import Header from '@/components/Header';
import SubmitForm from '@/components/SubmitForm';

const Submit = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 animate-fade-in">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold mb-4">Submit Your News</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ghana News Nexus welcomes submissions from citizen journalists, community members, and organizations. 
              Share your stories, events, and perspectives with our readers.
            </p>
          </div>
          
          {/* Guidelines */}
          <div className="mb-10 p-6 bg-secondary rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Submission Guidelines</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Ensure your news is accurate, factual, and can be verified.</li>
              <li>Focus on events, stories, or issues relevant to Ghana or Ghanaians.</li>
              <li>Provide complete details including who, what, when, where, and why.</li>
              <li>Include your contact information so we can verify details if needed.</li>
              <li>For news events, submit within 48 hours for timely consideration.</li>
              <li>Submissions may be edited for clarity, length, and style.</li>
            </ul>
          </div>
          
          {/* Form */}
          <SubmitForm />
        </div>
      </main>
      
      {/* Simplified footer */}
      <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-background border-t text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Ghana News Nexus. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Submit;
