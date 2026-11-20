import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-serif text-6xl text-rose mb-4">404</p>
        <h1 className="font-serif text-3xl text-foreground mb-3">Page not found</h1>
        <p className="text-foreground/70 font-light mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center rounded-full bg-cocoa px-7 py-3 text-sm text-white transition-opacity hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
