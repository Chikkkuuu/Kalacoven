import { ArrowLeft, Mail, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ArtistStoreProps {
  onBack: () => void;
}

export function ArtistStore({ onBack }: ArtistStoreProps) {
  const [activeTab, setActiveTab] = useState<"home" | "gallery" | "about" | "contact">("home");

  const artworks = [
    {
      id: 1,
      title: "Traditional Mandala",
      medium: "Acrylic on Canvas",
      price: 18500,
      image: "https://images.unsplash.com/photo-1755499800012-c9619791dfe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMEluZGlhbiUyMGFydHdvcmt8ZW58MXx8fHwxNzYyODg0MjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      dimensions: "24\" × 36\"",
    },
    {
      id: 2,
      title: "Handwoven Textile",
      medium: "Cotton & Silk",
      price: 12000,
      image: "https://images.unsplash.com/photo-1759738096144-b43206226765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0ZXh0aWxlJTIwd2VhdmluZ3xlbnwxfHx8fDE3NjI4ODQyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      dimensions: "48\" × 72\"",
    },
    {
      id: 3,
      title: "Sunset Over the Ganges",
      medium: "Oil on Canvas",
      price: 25000,
      image: "https://images.unsplash.com/photo-1612519537078-7c9836b5666c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBhcnRpc3QlMjBwYWludGluZyUyMHN0dWRpb3xlbnwxfHx8fDE3NjI4ODQyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      dimensions: "30\" × 40\"",
    },
    {
      id: 4,
      title: "Abstract Composition",
      medium: "Mixed Media",
      price: 15000,
      image: "https://images.unsplash.com/photo-1558259299-5d46c4408730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjB3b3Jrc3BhY2UlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjI4NTcwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      dimensions: "20\" × 20\"",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card border-b border-border">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <button onClick={onBack} className="p-2 -ml-2">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <span className="text-sm text-muted-foreground">priya.kalacoven.com</span>
          </div>

          <h1 className="text-3xl mb-4">Priya's Studio</h1>

          {/* Navigation */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-1">
            <button
              onClick={() => setActiveTab("home")}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeTab === "home"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeTab === "gallery"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => setActiveTab("about")}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeTab === "about"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              About Me
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeTab === "contact"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-6 py-6">
        {activeTab === "home" && (
          <div className="space-y-12 pb-6">
            {/* Hero Section */}
            <section className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1612519537078-7c9836b5666c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBhcnRpc3QlMjBwYWludGluZyUyMHN0dWRpb3xlbnwxfHx8fDE3NjI4ODQyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hero Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h2 className="mb-3">Contemporary Indian Art with Traditional Roots</h2>
                <p className="text-muted-foreground mb-6">
                  Discover unique artworks that blend traditional Indian motifs with modern aesthetics
                </p>
                <Button 
                  onClick={() => setActiveTab("gallery")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12"
                >
                  Explore Gallery
                </Button>
              </div>
            </section>

            {/* Featured Products */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2>Featured Works</h2>
                <Button 
                  variant="ghost" 
                  className="text-primary"
                  onClick={() => setActiveTab("gallery")}
                >
                  View All
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {artworks.slice(0, 4).map((artwork) => (
                  <Card key={artwork.id} className="overflow-hidden rounded-2xl">
                    <div className="aspect-square overflow-hidden">
                      <ImageWithFallback
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="text-sm mb-1">{artwork.title}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{artwork.medium}</p>
                      <p className="text-primary">₹{artwork.price.toLocaleString()}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* About Me Preview */}
            <section>
              <Card className="p-6 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1612519537078-7c9836b5666c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBhcnRpc3QlMjBwYWludGluZyUyMHN0dWRpb3xlbnwxfHx8fDE3NjI4ODQyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Priya"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2">About Me</h3>
                    <p className="text-muted-foreground text-sm">
                      I'm Priya, a contemporary artist based in Bangalore, India. My work is deeply 
                      influenced by traditional Indian art forms, reimagined through a modern lens.
                    </p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full rounded-full border-2"
                  onClick={() => setActiveTab("about")}
                >
                  Read Full Story
                </Button>
              </Card>
            </section>

            {/* Footer */}
            <footer className="pt-8 border-t border-border">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="mb-4">Stay Connected</h3>
                  <div className="flex justify-center gap-4">
                    <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                      <Mail className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                      <Instagram className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                      <Facebook className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">Bangalore, India</p>
                  <p className="text-sm text-muted-foreground">priya@kalacoven.com</p>
                  <p className="text-sm text-muted-foreground">@priyastudio</p>
                </div>

                <div className="text-center pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    © 2024 Priya's Studio. Powered by KalaCoven
                  </p>
                </div>
              </div>
            </footer>
          </div>
        )}

        {activeTab === "gallery" && (
          <div className="grid grid-cols-1 gap-6">
            {artworks.map((artwork) => (
              <Card key={artwork.id} className="overflow-hidden rounded-3xl">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2">{artwork.title}</h3>
                  <p className="text-muted-foreground text-sm mb-1">{artwork.medium}</p>
                  <p className="text-muted-foreground text-sm mb-4">{artwork.dimensions}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl text-primary">₹{artwork.price.toLocaleString()}</p>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
                      Purchase
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "about" && (
          <div className="space-y-8">
            {/* Hero Image */}
            <div className="w-full h-80 rounded-3xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1612519537078-7c9836b5666c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBhcnRpc3QlMjBwYWludGluZyUyMHN0dWRpb3xlbnwxfHx8fDE3NjI4ODQyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Priya in her studio"
                className="w-full h-full object-cover"
              />
            </div>

            {/* My Story */}
            <section>
              <h2 className="mb-4">My Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm Priya, a contemporary artist based in Bangalore, India. My work is deeply 
                  influenced by traditional Indian art forms, reimagined through a modern lens.
                </p>
                <p>
                  Growing up surrounded by the vibrant colors and intricate patterns of Indian 
                  textiles and folk art, I developed a passion for preserving these ancient 
                  techniques while making them accessible to contemporary audiences.
                </p>
              </div>
            </section>

            {/* My Process */}
            <section>
              <h2 className="mb-4">My Process</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Each piece begins with extensive research into traditional motifs and symbolism. 
                  I spend weeks sketching and planning before touching the canvas.
                </p>
                <p>
                  I work primarily with natural pigments and handmade materials, ensuring that 
                  every artwork is not just visually stunning but also tells a story of 
                  craftsmanship and cultural heritage.
                </p>
              </div>
            </section>

            {/* Cultural Heritage */}
            <section>
              <h2 className="mb-4">Cultural Heritage</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My art celebrates the rich tapestry of Indian culture — from the intricate 
                  mandalas of Rajasthan to the bold geometric patterns of tribal art.
                </p>
                <p>
                  Through my work, I aim to bridge the gap between tradition and modernity, 
                  creating pieces that resonate with both Indian and global audiences.
                </p>
              </div>
            </section>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="max-w-md mx-auto">
            <Card className="p-8 rounded-3xl text-center space-y-6">
              <div>
                <h2 className="mb-2">Get in Touch</h2>
                <p className="text-muted-foreground">
                  I'd love to hear from you! Whether you have questions about my work or are 
                  interested in commissioning a piece.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <Button 
                  variant="outline" 
                  className="w-full h-14 rounded-full border-2 justify-start px-6"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  priya@kalacoven.com
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full h-14 rounded-full border-2 justify-start px-6"
                >
                  <Instagram className="w-5 h-5 mr-3" />
                  @priyastudio
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full h-14 rounded-full border-2 justify-start px-6"
                >
                  <Facebook className="w-5 h-5 mr-3" />
                  Priya's Art Studio
                </Button>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Studio visits available by appointment
                </p>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}