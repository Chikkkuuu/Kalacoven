import image_da4ad50535d016bff63d70635495da0e9f6e8f84 from 'figma:asset/da4ad50535d016bff63d70635495da0e9f6e8f84.png';
import image_00164d9c67869e829830b47d2614d632138eeea7 from 'figma:asset/00164d9c67869e829830b47d2614d632138eeea7.png';
import { Sparkles, IndianRupee, Store, Wand2, Truck, Shield, SearchCheck, PenTool, Layout, Menu, X, Users, Target, Lightbulb } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "figma:asset/04fcf0c8108a185413ddf6b2648dc8ca13d37015.png";
import { useState } from "react";

interface LandingPageProps {
  onStartTrial: () => void;
}

export function LandingPage({ onStartTrial }: LandingPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
          <img src={logo} alt="KalaCoven" className="h-10 w-10" />
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-foreground"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="bg-background border-t border-border">
            <div className="max-w-md mx-auto px-6 py-4 flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('plans')}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Plans
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Community
              </button>
              <button 
                onClick={onStartTrial}
                className="text-primary hover:text-primary/80 transition-colors text-left"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-[72px]"></div>

      {/* Hero Section */}
      <section className="px-6 pt-4 pb-16">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <h1 className="text-4xl mb-4">Your Art. Your Brand. Your Profits.</h1>
            <p className="text-muted-foreground text-lg">
              The all-in-one platform for Indian artists to sell D2C. Graduate from Instagram DMs.
            </p>
          </div>
          
          <div className="w-full h-64 rounded-3xl overflow-hidden mb-8">
            <ImageWithFallback
              src={image_da4ad50535d016bff63d70635495da0e9f6e8f84}
              alt="Traditional Indian art"
              className="w-full h-full object-cover"
            />
          </div>

          <Button 
            onClick={onStartTrial}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14"
          >
            Start Your 14-Day Free Trial
          </Button>
        </div>
      </section>

      {/* The KalaCoven Model */}
      <section className="py-16 bg-card" id="plans">
        <div className="max-w-md mx-auto px-6">
          <h2 className="text-center mb-8">The KalaCoven Model</h2>
        </div>
        
        <div className="overflow-x-auto px-6 pb-4">
          <div className="flex gap-4 min-w-max">
            <div className="w-72 bg-background rounded-3xl p-8 border border-border flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <IndianRupee className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2">₹1,000 / month</h3>
              <p className="text-muted-foreground">A flat, simple subscription.</p>
            </div>

            <div className="w-72 bg-background rounded-3xl p-8 border border-border flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2">0% Commission</h3>
              <p className="text-muted-foreground">We take zero cut. You keep 100% of your art's price.</p>
            </div>

            <div className="w-72 bg-background rounded-3xl p-8 border border-border flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Store className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2">Your Own Store</h3>
              <p className="text-muted-foreground">yourname.kalacoven.com</p>
            </div>

            <div className="w-72 bg-background rounded-3xl p-8 border border-border flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Wand2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2">AI Powered</h3>
              <p className="text-muted-foreground">Smart pricing, website building, and content generation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-6 py-16">
        <div className="max-w-md mx-auto">
          <h2 className="text-center mb-12">Everything You Need to Succeed</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card rounded-3xl p-6 shadow-sm border border-border">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
                  <Wand2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2">AI Art-Pricing Tool</h3>
                <p className="text-muted-foreground text-sm">
                  Data-backed price recommendations based on medium, size, and time.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-6 shadow-sm border border-border">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2">Kala-Logistics</h3>
                <p className="text-muted-foreground text-sm">
                  Fine-art shipping with crating, insurance, and white-glove delivery.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-6 shadow-sm border border-border">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2">Kala-Protect</h3>
                <p className="text-muted-foreground text-sm">
                  Built-in DRM and watermarking for secure digital art sales.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-6 shadow-sm border border-border">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
                  <SearchCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2">AI Plagiarism Checker</h3>
                <p className="text-muted-foreground text-sm">
                  Protect your originality with AI-powered plagiarism detection.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-6 shadow-sm border border-border">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
                  <PenTool className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2">AI Write</h3>
                <p className="text-muted-foreground text-sm">
                  Generate compelling product descriptions and artist bios instantly.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-6 shadow-sm border border-border">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
                  <Layout className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2">AI Website Builder</h3>
                <p className="text-muted-foreground text-sm">
                  Beautiful artist websites created and optimized by AI.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Button 
              onClick={onStartTrial}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 bg-card" id="about">
        <div className="max-w-md mx-auto">
          <h2 className="text-center mb-12">About KalaCoven</h2>
          
          {/* Why Kala Coven */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3>Why Kala Coven</h3>
            </div>
            <p className="text-muted-foreground">
              We built KalaCoven because Indian artists deserve better than high marketplace commissions and the friction of Instagram selling. We believe artists should keep 100% of what they earn and have professional tools to build their brand. No more losing 30-40% to platforms or juggling DMs for sales.
            </p>
          </div>

          {/* Founders */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3>Our Founders</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              KalaCoven was founded by a team passionate about art and technology. With backgrounds in e-commerce, AI, and the Indian art scene, we understand the unique challenges artists face and are committed to solving them.
            </p>
            <div className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Founded by artists, built for artists</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Vision */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3>Our Vision</h3>
            </div>
            <p className="text-muted-foreground">
              Our vision is to become the #1 platform for Indian artists to sell their work D2C, creating a sustainable ecosystem where art is valued, artists are empowered, and collectors discover authentic Indian art directly from creators. We're building the Shopify for art, tailored specifically for the Indian market.
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="px-6 py-16" id="community">
        <div className="max-w-md mx-auto">
          <h2 className="text-center mb-8">Join Our Community</h2>
          <p className="text-muted-foreground text-lg">
            Connect with fellow artists, share your work, and grow your brand. Our community is a space for collaboration, inspiration, and support.
          </p>
          <div className="mt-8">
            <Button 
              onClick={onStartTrial}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14"
            >
              Join Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}