import { useState } from "react";
import { ArrowLeft, Sparkles, Eye, Layout, Type, Palette, Image as ImageIcon, Save, AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline, ZoomIn, ZoomOut, Maximize2, Edit3 } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Slider } from "./ui/slider";
import logo from "figma:asset/04fcf0c8108a185413ddf6b2648dc8ca13d37015.png";

interface WebsiteBuilderProps {
  onBack: () => void;
  onPreview: () => void;
}

export function WebsiteBuilder({ onBack, onPreview }: WebsiteBuilderProps) {
  const [activeSection, setActiveSection] = useState<"landing" | "products" | "about">("landing");
  const [heroTitle, setHeroTitle] = useState("Priya's Art Studio");
  const [heroSubtitle, setHeroSubtitle] = useState("Contemporary Indian Art & Traditional Crafts");
  const [aboutText, setAboutText] = useState("I'm a contemporary artist based in Mumbai, specializing in traditional Indian art forms with a modern twist.");

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <header className="px-6 pt-8 pb-6 bg-card border-b border-border sticky top-0 z-10">
        <div className="flex items-center gap-4 mb-4">
          <Button
            onClick={onBack}
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl">Website Builder</h1>
            <p className="text-muted-foreground text-sm mt-1">priya.kalacoven.com</p>
          </div>
          <img src={logo} alt="KalaCoven" className="h-8 w-8" />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={onPreview}
            variant="outline"
            className="flex-1 rounded-full border-2 h-12"
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12"
          >
            <Save className="w-4 h-4 mr-2" />
            Publish
          </Button>
        </div>
      </header>

      {/* AI Improvement Card */}
      <section className="px-6 py-4">
        <Card className="rounded-3xl p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm mb-1">AI Website Improvements</h3>
              <p className="text-xs text-muted-foreground mb-3">
                Let AI analyze your website and suggest improvements for better engagement
              </p>
              <Button
                variant="outline"
                className="rounded-full h-9 text-sm border-primary text-primary hover:bg-primary/10"
              >
                <Sparkles className="w-3 h-3 mr-2" />
                Get AI Suggestions
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Section Tabs */}
      <section className="px-6 py-4">
        <Tabs value={activeSection} onValueChange={(v) => setActiveSection(v as any)}>
          <TabsList className="w-full grid grid-cols-3 rounded-full h-12 bg-muted p-1">
            <TabsTrigger value="landing" className="rounded-full">
              <Layout className="w-4 h-4 mr-2" />
              Landing
            </TabsTrigger>
            <TabsTrigger value="products" className="rounded-full">
              <ImageIcon className="w-4 h-4 mr-2" />
              Products
            </TabsTrigger>
            <TabsTrigger value="about" className="rounded-full">
              <Type className="w-4 h-4 mr-2" />
              About
            </TabsTrigger>
          </TabsList>

          {/* Landing Page Editor */}
          <TabsContent value="landing" className="mt-6 space-y-4">
            <Card className="rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Type className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm">Hero Section</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Hero Title</label>
                  <div className="relative">
                    <Input
                      value={heroTitle}
                      onChange={(e) => setHeroTitle(e.target.value)}
                      className="rounded-xl h-11 pr-12"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg text-primary hover:bg-primary/10"
                    >
                      <Sparkles className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Text Formatting Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex border border-border rounded-lg p-1">
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <Bold className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <Italic className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <Underline className="w-3 h-3" />
                      </Button>
                    </div>
                    <div className="flex border border-border rounded-lg p-1">
                      <Button variant="ghost" size="icon" className="h-7 w-7 bg-primary/10">
                        <AlignLeft className="w-3 h-3 text-primary" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <AlignCenter className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <AlignRight className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Hero Subtitle</label>
                  <div className="relative">
                    <Input
                      value={heroSubtitle}
                      onChange={(e) => setHeroSubtitle(e.target.value)}
                      className="rounded-xl h-11 pr-12"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg text-primary hover:bg-primary/10"
                    >
                      <Sparkles className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Text Formatting Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex border border-border rounded-lg p-1">
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <Bold className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <Italic className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <Underline className="w-3 h-3" />
                      </Button>
                    </div>
                    <div className="flex border border-border rounded-lg p-1">
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <AlignLeft className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7 bg-primary/10">
                        <AlignCenter className="w-3 h-3 text-primary" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <AlignRight className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Hero Description</label>
                  <div className="relative">
                    <Textarea
                      defaultValue="Discover unique contemporary art pieces that blend traditional Indian techniques with modern aesthetics."
                      className="rounded-xl min-h-[80px] resize-none pr-12"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-1 top-2 h-8 w-8 rounded-lg text-primary hover:bg-primary/10"
                    >
                      <Sparkles className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Call-to-Action Button Text</label>
                  <div className="relative">
                    <Input
                      defaultValue="Explore My Collection"
                      className="rounded-xl h-11 pr-12"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg text-primary hover:bg-primary/10"
                    >
                      <Sparkles className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Button Style Options */}
                  <div className="mt-2">
                    <label className="text-xs text-muted-foreground mb-2 block">Button Style</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button className="h-9 rounded-lg bg-primary text-primary-foreground text-xs border-2 border-primary">
                        Filled
                      </button>
                      <button className="h-9 rounded-lg border-2 border-border text-xs hover:border-primary">
                        Outline
                      </button>
                      <button className="h-9 rounded-lg bg-muted text-xs border-2 border-transparent hover:border-primary">
                        Subtle
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="rounded-2xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                    <ImageIcon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-sm">Hero Image</h3>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-primary">
                  <Edit3 className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="aspect-video bg-muted rounded-xl overflow-hidden mb-3 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1755499800012-c9619791dfe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMEluZGlhbiUyMGFydHdvcmt8ZW58MXx8fHwxNzYyODg0MjcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Hero"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button variant="secondary" size="icon" className="h-10 w-10 rounded-full">
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                  <Button variant="secondary" size="icon" className="h-10 w-10 rounded-full">
                    <Edit3 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="rounded-xl h-10 text-sm">
                    <ImageIcon className="w-3 h-3 mr-2" />
                    Upload
                  </Button>
                  <Button variant="outline" className="rounded-xl h-10 text-sm">
                    <Sparkles className="w-3 h-3 mr-2" />
                    AI Generate
                  </Button>
                </div>
                
                {/* Image Adjustment Controls */}
                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground">Image Position</label>
                  <select className="w-full h-10 rounded-xl border border-input bg-background px-3 text-sm">
                    <option>Cover (Fill)</option>
                    <option>Contain (Fit)</option>
                    <option>Center</option>
                    <option>Stretch</option>
                  </select>
                </div>
              </div>
            </Card>

            <Card className="rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Palette className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm">Color Theme</h3>
              </div>
              
              <div className="grid grid-cols-5 gap-2 mb-3">
                <button className="w-full aspect-square rounded-xl bg-primary border-2 border-primary" />
                <button className="w-full aspect-square rounded-xl bg-secondary border-2 border-transparent hover:border-primary" />
                <button className="w-full aspect-square rounded-xl bg-green-500 border-2 border-transparent hover:border-primary" />
                <button className="w-full aspect-square rounded-xl bg-blue-500 border-2 border-transparent hover:border-primary" />
                <button className="w-full aspect-square rounded-xl bg-pink-500 border-2 border-transparent hover:border-primary" />
              </div>
              
              {/* Custom Color Picker */}
              <div className="space-y-2">
                <label className="text-xs text-muted-foreground">Custom Color</label>
                <div className="flex gap-2">
                  <input 
                    type="color" 
                    defaultValue="#A855F7"
                    className="h-10 w-14 rounded-lg border border-input cursor-pointer"
                  />
                  <Input 
                    defaultValue="#A855F7"
                    className="rounded-xl h-10 text-sm"
                  />
                </div>
              </div>
            </Card>
            
            <Card className="rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Maximize2 className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm">Section Spacing</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-muted-foreground">Top Padding</label>
                    <span className="text-xs text-muted-foreground">48px</span>
                  </div>
                  <Slider defaultValue={[48]} max={100} step={4} className="w-full" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-muted-foreground">Bottom Padding</label>
                    <span className="text-xs text-muted-foreground">48px</span>
                  </div>
                  <Slider defaultValue={[48]} max={100} step={4} className="w-full" />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Products Section Editor */}
          <TabsContent value="products" className="mt-6 space-y-4">
            <Card className="rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Layout className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm">Products Layout</h3>
              </div>
              
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <button className="aspect-square rounded-xl border-2 border-primary bg-primary/5 p-3 flex flex-col items-center justify-center">
                    <div className="grid grid-cols-2 gap-1 w-8 h-8">
                      <div className="bg-primary rounded" />
                      <div className="bg-primary rounded" />
                      <div className="bg-primary rounded" />
                      <div className="bg-primary rounded" />
                    </div>
                    <span className="text-xs mt-2 text-primary">Grid</span>
                  </button>
                  <button className="aspect-square rounded-xl border-2 border-border p-3 flex flex-col items-center justify-center hover:border-primary">
                    <div className="flex gap-1 w-8 h-8">
                      <div className="flex-1 bg-muted-foreground rounded" />
                      <div className="flex-1 bg-muted-foreground rounded" />
                      <div className="flex-1 bg-muted-foreground rounded" />
                    </div>
                    <span className="text-xs mt-2 text-muted-foreground">List</span>
                  </button>
                </div>
                
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Grid Columns</label>
                  <select className="w-full h-11 rounded-xl border border-input bg-background px-3">
                    <option>2 Columns (Mobile)</option>
                    <option>3 Columns</option>
                    <option>4 Columns</option>
                  </select>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs text-muted-foreground">Card Spacing</label>
                    <span className="text-xs text-muted-foreground">16px</span>
                  </div>
                  <Slider defaultValue={[16]} max={48} step={4} className="w-full" />
                </div>
                
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Section Title</label>
                  <div className="relative">
                    <Input
                      defaultValue="Featured Artworks"
                      className="rounded-xl h-11 pr-12"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg text-primary hover:bg-primary/10"
                    >
                      <Sparkles className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Text Alignment */}
                  <div className="flex border border-border rounded-lg p-1 mt-2 w-fit">
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <AlignLeft className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7 bg-primary/10">
                      <AlignCenter className="w-3 h-3 text-primary" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <AlignRight className="w-3 h-3" />
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Section Subtitle</label>
                  <div className="relative">
                    <Input
                      defaultValue="Handpicked selections from my latest collection"
                      className="rounded-xl h-11 pr-12"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg text-primary hover:bg-primary/10"
                    >
                      <Sparkles className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Section Description</label>
                  <div className="relative">
                    <Textarea
                      defaultValue="Each piece is crafted with care, inspired by traditional Indian art forms and reimagined for modern spaces."
                      className="rounded-xl min-h-[80px] resize-none pr-12"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-1 top-2 h-8 w-8 rounded-lg text-primary hover:bg-primary/10"
                    >
                      <Sparkles className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Products to Show</label>
                  <select className="w-full h-11 rounded-xl border border-input bg-background px-3">
                    <option>All Products</option>
                    <option>Featured Only</option>
                    <option>Recent Products</option>
                    <option>Best Sellers</option>
                  </select>
                </div>
              </div>
            </Card>
            
            <Card className="rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ImageIcon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm">Card Style</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Card Border Radius</label>
                  <div className="grid grid-cols-4 gap-2">
                    <button className="h-10 rounded border-2 border-transparent bg-muted flex items-center justify-center hover:border-primary">
                      <div className="w-6 h-6 bg-primary" />
                    </button>
                    <button className="h-10 rounded border-2 border-transparent bg-muted flex items-center justify-center hover:border-primary">
                      <div className="w-6 h-6 bg-primary rounded-sm" />
                    </button>
                    <button className="h-10 rounded border-2 border-primary bg-muted flex items-center justify-center">
                      <div className="w-6 h-6 bg-primary rounded-lg" />
                    </button>
                    <button className="h-10 rounded border-2 border-transparent bg-muted flex items-center justify-center hover:border-primary">
                      <div className="w-6 h-6 bg-primary rounded-full" />
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Show Shadows</label>
                  <div className="flex gap-2">
                    <button className="flex-1 h-10 rounded-lg border-2 border-primary bg-primary/5 text-xs text-primary">
                      Yes
                    </button>
                    <button className="flex-1 h-10 rounded-lg border-2 border-border text-xs hover:border-primary">
                      No
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* About Section Editor */}
          <TabsContent value="about" className="mt-6 space-y-4">
            <Card className="rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Type className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm">About Me</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Artist Name</label>
                  <div className="relative">
                    <Input
                      defaultValue="Priya Sharma"
                      className="rounded-xl h-11 pr-12"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg text-primary hover:bg-primary/10"
                    >
                      <Sparkles className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Location</label>
                  <div className="relative">
                    <Input
                      defaultValue="Mumbai, India"
                      className="rounded-xl h-11 pr-12"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg text-primary hover:bg-primary/10"
                    >
                      <Sparkles className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Specialization</label>
                  <div className="relative">
                    <Input
                      defaultValue="Contemporary Indian Art & Traditional Crafts"
                      className="rounded-xl h-11 pr-12"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg text-primary hover:bg-primary/10"
                    >
                      <Sparkles className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Years of Experience</label>
                  <div className="relative">
                    <Input
                      defaultValue="12+ years"
                      className="rounded-xl h-11 pr-12"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg text-primary hover:bg-primary/10"
                    >
                      <Sparkles className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Artist Bio</label>
                  <div className="relative">
                    <Textarea
                      value={aboutText}
                      onChange={(e) => setAboutText(e.target.value)}
                      className="rounded-xl min-h-[120px] resize-none pr-12"
                      placeholder="Tell your story..."
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-1 top-2 h-8 w-8 rounded-lg text-primary hover:bg-primary/10"
                    >
                      <Sparkles className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="rounded-2xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                    <ImageIcon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-sm">Profile Photo</h3>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-primary">
                  <Edit3 className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="aspect-square bg-muted rounded-xl overflow-hidden mb-3 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI4ODQyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button variant="secondary" size="icon" className="h-10 w-10 rounded-full">
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                  <Button variant="secondary" size="icon" className="h-10 w-10 rounded-full">
                    <Edit3 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="rounded-xl h-10 text-sm">
                    <ImageIcon className="w-3 h-3 mr-2" />
                    Upload
                  </Button>
                  <Button variant="outline" className="rounded-xl h-10 text-sm">
                    <Sparkles className="w-3 h-3 mr-2" />
                    AI Generate
                  </Button>
                </div>
                
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Photo Style</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="h-9 rounded-lg border-2 border-primary bg-primary/5 text-xs text-primary">
                      Circle
                    </button>
                    <button className="h-9 rounded-lg border-2 border-border text-xs hover:border-primary">
                      Square
                    </button>
                    <button className="h-9 rounded-lg border-2 border-border text-xs hover:border-primary">
                      Rounded
                    </button>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Layout className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm">Section Layout</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Content Alignment</label>
                  <div className="flex border border-border rounded-lg p-1 w-fit">
                    <Button variant="ghost" size="icon" className="h-7 w-7 bg-primary/10">
                      <AlignLeft className="w-3 h-3 text-primary" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <AlignCenter className="w-3 h-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <AlignRight className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <label className="text-xs text-muted-foreground mb-2 block">Background Style</label>
                  <select className="w-full h-11 rounded-xl border border-input bg-background px-3">
                    <option>Default</option>
                    <option>With Background Color</option>
                    <option>With Border</option>
                    <option>Minimal</option>
                  </select>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Template Selection */}
      <section className="px-6 py-4">
        <h3 className="mb-4">Choose Template</h3>
        <div className="grid grid-cols-2 gap-3">
          <Card className="rounded-2xl overflow-hidden border-2 border-primary">
            <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 p-3 flex flex-col justify-between">
              <div className="bg-card/80 rounded-lg h-12" />
              <div className="space-y-2">
                <div className="bg-card/80 rounded-lg h-20" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-card/80 rounded-lg h-16" />
                  <div className="bg-card/80 rounded-lg h-16" />
                </div>
              </div>
            </div>
            <div className="p-2 bg-primary/10">
              <p className="text-xs text-center text-primary">Modern (Active)</p>
            </div>
          </Card>

          <Card className="rounded-2xl overflow-hidden border-2 border-border hover:border-primary cursor-pointer">
            <div className="aspect-[3/4] bg-gradient-to-br from-secondary/20 to-primary/20 p-3 flex flex-col justify-between">
              <div className="bg-card/80 rounded-lg h-8" />
              <div className="space-y-2">
                <div className="bg-card/80 rounded-lg h-24" />
                <div className="bg-card/80 rounded-lg h-12" />
              </div>
            </div>
            <div className="p-2">
              <p className="text-xs text-center text-muted-foreground">Minimal</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}