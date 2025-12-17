import image_da4ad50535d016bff63d70635495da0e9f6e8f84 from 'figma:asset/da4ad50535d016bff63d70635495da0e9f6e8f84.png';
import image_00164d9c67869e829830b47d2614d632138eeea7 from 'figma:asset/00164d9c67869e829830b47d2614d632138eeea7.png';
import { Sparkles, IndianRupee, Store, Wand2, Truck, Shield, SearchCheck, PenTool, Layout } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "figma:asset/04fcf0c8108a185413ddf6b2648dc8ca13d37015.png";

interface LandingPageProps {
  onStartTrial: () => void;
}

export function LandingPage({ onStartTrial }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Logo Header */}
      <header className="px-6 pt-8 pb-4">
        <div className="max-w-md mx-auto flex justify-center">
          <img src={logo} alt="KalaCoven" className="h-16 w-16" />
        </div>
      </header>

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
      <section className="py-16 bg-card">
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
    </div>
  );
}