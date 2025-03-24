
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-4 animate-fade-in">
          <div className="flex space-x-1 justify-center mb-6">
            <div className="h-8 w-1.5 bg-ghana-red rounded-sm" />
            <div className="h-8 w-1.5 bg-ghana-yellow rounded-sm" />
            <div className="h-8 w-1.5 bg-ghana-green rounded-sm" />
          </div>
          
          <h1 className="text-7xl font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for.
          </p>
          
          <Button asChild size="lg">
            <Link to="/" className="inline-flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Homepage
            </Link>
          </Button>
        </div>
      </main>
      
      {/* Simplified footer */}
      <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-background border-t text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Ghana News Nexus. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NotFound;
