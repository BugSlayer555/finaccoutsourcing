import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { House } from "@phosphor-icons/react";

const NotFound = () => {
  return (
    <Layout>
      <section className="section-padding bg-background min-h-[60vh] flex items-center">
        <div className="container-custom text-center">
          <div className="text-9xl font-bold text-primary/20 mb-8">404</div>
          <h1 className="heading-lg text-foreground mb-4">Page Not Found</h1>
          <p className="text-muted-foreground font-light text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/">
              <House size={20} weight="bold" />
              Back to Home
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
