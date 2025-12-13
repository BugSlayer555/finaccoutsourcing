import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "@phosphor-icons/react";

const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Outsourced Accounting for UK Firms",
    excerpt: "Discover how outsourcing accounting services can reduce costs by 40-50% while maintaining quality and compliance. Learn the strategic advantages that leading UK firms are leveraging.",
    date: "December 5, 2024",
    readTime: "5 min read",
    category: "Outsourcing",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Turnaround Efficiency: How to Speed Up Your Practice",
    excerpt: "Explore proven strategies for improving turnaround times in accounting practices. From workflow optimization to leveraging co-sourcing partnerships effectively.",
    date: "December 1, 2024",
    readTime: "7 min read",
    category: "Efficiency",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "How Modern Bookkeeping Tools Increase Accuracy",
    excerpt: "A deep dive into Xero, Sage, QuickBooks, and other modern tools that are revolutionizing bookkeeping accuracy and reducing human error in financial record-keeping.",
    date: "November 28, 2024",
    readTime: "6 min read",
    category: "Technology",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Security Standards in Financial Outsourcing",
    excerpt: "Understanding GDPR, GAPP, and other security protocols that protect your clients' data when partnering with outsourcing providers. A comprehensive security guide.",
    date: "November 22, 2024",
    readTime: "8 min read",
    category: "Security",
    image: "/placeholder.svg",
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
              Blog
            </span>
            <h1 className="heading-xl text-foreground mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Stay ahead of the curve with our expert insights on the accounting landscape. We explore the strategic benefits of outsourcing, share tips on improving practice efficiency, and analyze the latest industry trends—providing you with the knowledge resources you need to lead your firm into the future.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection>
            <Card variant="glass" className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/30">01</div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-4">
                    {blogPosts[0].category}
                  </span>
                  <h2 className="heading-md text-foreground mb-4">{blogPosts[0].title}</h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <Button variant="hero" className="w-fit" asChild>
                    <Link to={`/blog/${blogPosts[0].id}`}>
                      Read Article
                      <ArrowRight size={16} weight="bold" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <AnimatedSection className="mb-12">
            <h2 className="heading-lg text-foreground">Latest Articles</h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <StaggerItem key={post.id}>
                <Link to={`/blog/${post.id}`}>
                  <Card variant="glass" className="h-full overflow-hidden group cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                      <div className="text-5xl font-bold text-primary/30">0{post.id}</div>
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
                    </div>
                    <CardHeader className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground pt-2">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="heading-lg mb-4">Stay Updated</h2>
            <p className="text-background/70 font-light text-lg mb-8 max-w-2xl mx-auto">
              Get the latest insights on accounting best practices and industry trends.
            </p>
            <Button variant="outline" size="xl" className="border-background/30 text-background hover:bg-background hover:text-foreground" asChild>
              <Link to="/contact">
                Subscribe to Updates
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
