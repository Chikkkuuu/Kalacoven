import { Plus, Package, Users, BookOpen, Home, Settings } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import logo from "figma:asset/04fcf0c8108a185413ddf6b2648dc8ca13d37015.png";
import { Sparkles, Eye, Globe } from "lucide-react";

interface DashboardProps {
  onAddProduct: () => void;
  onViewCoven: () => void;
  onViewStore: () => void;
  onViewProducts: () => void;
  onViewWebsiteBuilder: () => void;
}

export function Dashboard({ onAddProduct, onViewCoven, onViewStore, onViewProducts, onViewWebsiteBuilder }: DashboardProps) {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="px-6 pt-8 pb-6 bg-card border-b border-border">
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="KalaCoven" className="h-10 w-10" />
          <div className="flex-1">
            <h1 className="text-3xl">Hi, Priya!</h1>
            <p className="text-muted-foreground mt-1">Welcome back to your studio</p>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="px-6 py-6">
        <div className="space-y-3 mb-4">
          {/* Revenue Card - Full Width with Graph */}
          <Card className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Total Revenue</p>
                    <p className="text-3xl mt-1">₹48,500</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20">
                <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="text-xs text-green-500">+12% from last month</span>
              </div>
            </div>
            
            {/* 3-Month Revenue Graph */}
            <div className="relative h-24 mt-4">
              <svg className="w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
                {/* Grid lines */}
                <line x1="0" y1="60" x2="300" y2="60" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/20" />
                <line x1="0" y1="40" x2="300" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/20" />
                <line x1="0" y1="20" x2="300" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/20" />
                
                {/* Revenue line - showing upward trend over 3 months */}
                <path
                  d="M 0 65 Q 25 60, 50 58 T 100 55 T 150 45 T 200 35 T 250 25 T 300 15"
                  fill="none"
                  stroke="url(#revenueGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                
                {/* Gradient fill under line */}
                <path
                  d="M 0 65 Q 25 60, 50 58 T 100 55 T 150 45 T 200 35 T 250 25 T 300 15 L 300 80 L 0 80 Z"
                  fill="url(#revenueAreaGradient)"
                />
                
                {/* Data points */}
                <circle cx="100" cy="55" r="3" fill="currentColor" className="text-primary" />
                <circle cx="200" cy="35" r="3" fill="currentColor" className="text-primary" />
                <circle cx="300" cy="15" r="4" fill="currentColor" className="text-primary" />
                
                <defs>
                  <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#A855F7" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#A855F7" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="revenueAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#A855F7" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Month labels */}
              <div className="flex justify-between mt-2">
                <span className="text-xs text-muted-foreground">Sep</span>
                <span className="text-xs text-muted-foreground">Oct</span>
                <span className="text-xs text-muted-foreground">Nov</span>
              </div>
            </div>
          </Card>

          {/* Orders and Visitors - Side by Side */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="p-4 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Orders</p>
                  <p className="text-2xl mt-1">12</p>
                  <div className="flex items-center gap-1 mt-1">
                    <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span className="text-xs text-green-500">+8%</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Visitors</p>
                  <p className="text-2xl mt-1">342</p>
                  <div className="flex items-center gap-1 mt-1">
                    <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span className="text-xs text-green-500">+24%</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Your Website Section */}
      <section className="px-6 py-4">
        <h3 className="mb-4">Your Website</h3>
        <Card className="rounded-3xl overflow-hidden border border-border">
          <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <Globe className="w-16 h-16 text-primary/60" />
          </div>
          <div className="p-6 space-y-4">
            <div>
              <h4 className="mb-1">priya.kalacoven.com</h4>
              <p className="text-sm text-muted-foreground">Your personal artist storefront</p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={onViewWebsiteBuilder}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12"
              >
                Edit Website
              </Button>
              <Button
                onClick={onViewStore}
                variant="outline"
                className="flex-1 rounded-full border-2 h-12"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </div>
            <Button
              variant="ghost"
              className="w-full text-primary rounded-full"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Ask AI to Improve My Website
            </Button>
          </div>
        </Card>
      </section>

      {/* Quick Actions */}
      <section className="px-6 py-4">
        <h3 className="mb-4">Quick Actions</h3>
        <div className="flex gap-3 overflow-x-auto pb-2">
          <Button
            onClick={onAddProduct}
            className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 bg-primary text-primary-foreground hover:bg-primary/90 rounded-3xl"
          >
            <Plus className="w-8 h-8 mb-2" />
            <span>Add Product</span>
          </Button>
          
          <Button
            variant="outline"
            className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 rounded-3xl border-2"
          >
            <Package className="w-8 h-8 mb-2 text-secondary" />
            <span className="text-secondary">Orders</span>
          </Button>
          
          <Button
            onClick={onViewCoven}
            variant="outline"
            className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 rounded-3xl border-2"
          >
            <Users className="w-8 h-8 mb-2 text-secondary" />
            <span className="text-secondary">The Coven</span>
          </Button>
          
          <Button
            variant="outline"
            className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 rounded-3xl border-2"
          >
            <BookOpen className="w-8 h-8 mb-2 text-secondary" />
            <span className="text-secondary">Academy</span>
          </Button>
        </div>
      </section>

      {/* Recent Products */}
      <section className="px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <h3>Your Products</h3>
          <Button onClick={onViewProducts} variant="ghost" className="text-primary">View All</Button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Card className="rounded-2xl overflow-hidden" onClick={onViewStore}>
            <div className="aspect-square bg-muted overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1755499800012-c9619791dfe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMEluZGlhbiUyMGFydHdvcmt8ZW58MXx8fHwxNzYyODg0MjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Traditional Mandala"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h4 className="text-sm">Traditional Mandala</h4>
              <p className="text-muted-foreground text-xs mt-1">Acrylic on Canvas</p>
              <p className="text-primary mt-2">₹18,500</p>
            </div>
          </Card>

          <Card className="rounded-2xl overflow-hidden">
            <div className="aspect-square bg-muted overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1759738096144-b43206226765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0ZXh0aWxlJTIwd2VhdmluZ3xlbnwxfHx8fDE3NjI4ODQyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Handwoven Textile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h4 className="text-sm">Handwoven Textile</h4>
              <p className="text-muted-foreground text-xs mt-1">Cotton & Silk</p>
              <p className="text-primary mt-2">₹12,000</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="flex items-center justify-around px-6 py-4">
          <button className="flex flex-col items-center gap-1">
            <Home className="w-6 h-6 text-primary" />
            <span className="text-xs text-primary">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Package className="w-6 h-6 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Products</span>
          </button>
          <button onClick={onViewCoven} className="flex flex-col items-center gap-1">
            <Users className="w-6 h-6 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">The Coven</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Settings className="w-6 h-6 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  );
}