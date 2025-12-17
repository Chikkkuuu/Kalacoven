import { ArrowLeft, Plus, MessageCircle, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface TheCovenProps {
  onBack: () => void;
}

export function TheCoven({ onBack }: TheCovenProps) {
  const [activeTab, setActiveTab] = useState<"community" | "academy">("community");

  const communityPosts = [
    {
      id: 1,
      author: "Anika Sharma",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anika",
      title: "How do you handle shipping for large canvases?",
      comments: 24,
      timeAgo: "2h ago",
    },
    {
      id: 2,
      author: "Rohan Patel",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan",
      title: "Just sold my first piece on KalaCoven! 🎉",
      comments: 47,
      timeAgo: "5h ago",
    },
    {
      id: 3,
      author: "Maya Iyer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya",
      title: "Tips for photographing intricate textile work?",
      comments: 18,
      timeAgo: "1d ago",
    },
    {
      id: 4,
      author: "Vikram Desai",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
      title: "Best practices for pricing mixed media art",
      comments: 32,
      timeAgo: "2d ago",
    },
  ];

  const academyArticles = [
    {
      id: 1,
      title: "How to Price Your Art: A Complete Guide",
      image: "https://images.unsplash.com/photo-1558259299-5d46c4408730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjB3b3Jrc3BhY2UlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjI4NTcwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "SEO for Artists: Making Your Store Discoverable",
      image: "https://images.unsplash.com/photo-1612519537078-7c9836b5666c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBhcnRpc3QlMjBwYWludGluZyUyMHN0dWRpb3xlbnwxfHx8fDE3NjI4ODQyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "12 min read",
    },
    {
      id: 3,
      title: "A Beginner's Guide to GST for Artists",
      image: "https://images.unsplash.com/photo-1755499800012-c9619791dfe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMEluZGlhbiUyMGFydHdvcmt8ZW58MXx8fHwxNzYyODg0MjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Building Your Artist Brand on Social Media",
      image: "https://images.unsplash.com/photo-1759738096144-b43206226765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0ZXh0aWxlJTIwd2VhdmluZ3xlbnwxfHx8fDE3NjI4ODQyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "10 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card border-b border-border">
        <div className="px-6 py-4">
          <div className="flex items-center gap-3 mb-4">
            <button onClick={onBack} className="p-2 -ml-2">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h2>The Coven</h2>
          </div>

          {/* Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("community")}
              className={`flex-1 py-3 px-4 rounded-2xl transition-colors ${
                activeTab === "community"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              Community
            </button>
            <button
              onClick={() => setActiveTab("academy")}
              className={`flex-1 py-3 px-4 rounded-2xl transition-colors ${
                activeTab === "academy"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              Artist Academy
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-6 py-6">
        {activeTab === "community" && (
          <div className="space-y-3">
            {communityPosts.map((post) => (
              <Card key={post.id} className="p-4 rounded-2xl hover:shadow-md transition-shadow border border-border">
                <div className="flex items-start gap-3">
                  <ImageWithFallback
                    src={post.avatar}
                    alt={post.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground">{post.author}</p>
                    <h4 className="mt-1 mb-2">{post.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments} comments
                      </span>
                      <span>{post.timeAgo}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "academy" && (
          <div className="space-y-4">
            {academyArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden rounded-3xl hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="mb-2">{article.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      {activeTab === "community" && (
        <button className="fixed bottom-24 right-6 w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
          <Plus className="w-8 h-8" />
        </button>
      )}
    </div>
  );
}