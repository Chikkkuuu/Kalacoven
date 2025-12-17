import { ArrowLeft, Plus, MoreVertical, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import logo from "figma:asset/04fcf0c8108a185413ddf6b2648dc8ca13d37015.png";

interface ProductsPageProps {
  onBack: () => void;
  onAddProduct: () => void;
}

export function ProductsPage({ onBack, onAddProduct }: ProductsPageProps) {
  const products = [
    {
      id: 1,
      name: "Traditional Mandala",
      category: "Acrylic on Canvas",
      price: "₹18,500",
      status: "Active",
      image: "https://images.unsplash.com/photo-1755499800012-c9619791dfe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMEluZGlhbiUyMGFydHdvcmt8ZW58MXx8fHwxNzYyODg0MjcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      name: "Handwoven Textile",
      category: "Cotton & Silk",
      price: "₹12,000",
      status: "Active",
      image: "https://images.unsplash.com/photo-1759738096144-b43206226765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0ZXh0aWxlJTIwd2VhdmluZ3xlbnwxfHx8fDE3NjI4ODQyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      name: "Madhubani Art",
      category: "Digital Print",
      price: "₹2,500",
      status: "Active",
      image: "https://images.unsplash.com/photo-1582274528913-3c95c5de0e0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWRodWJhbmklMjBhcnR8ZW58MXx8fHwxNzYyODg0MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      name: "Contemporary Portrait",
      category: "Oil on Canvas",
      price: "₹35,000",
      status: "Sold",
      image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBhaW50aW5nfGVufDF8fHx8MTc2Mjg4NDI3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 5,
      name: "Abstract Series #3",
      category: "Mixed Media",
      price: "₹22,000",
      status: "Active",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydHxlbnwxfHx8fDE3NjI4ODQyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 6,
      name: "Warli Painting",
      category: "Acrylic on Canvas",
      price: "₹8,500",
      status: "Active",
      image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXYXJsaSUyMGFydHxlbnwxfHx8fDE3NjI4ODQyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <header className="px-6 pt-8 pb-6 bg-card border-b border-border sticky top-0 z-10">
        <div className="flex items-center gap-4 mb-6">
          <Button
            onClick={onBack}
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl">Your Products</h1>
            <p className="text-muted-foreground text-sm mt-1">{products.length} artworks</p>
          </div>
          <img src={logo} alt="KalaCoven" className="h-8 w-8" />
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-12 h-12 rounded-full bg-background"
          />
        </div>
      </header>

      {/* Products Grid */}
      <section className="px-6 py-6">
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <Card key={product.id} className="rounded-2xl overflow-hidden">
              <div className="aspect-square bg-muted overflow-hidden relative">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.status === "Sold" && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full">
                      Sold
                    </span>
                  </div>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 rounded-full w-8 h-8"
                >
                  <MoreVertical className="w-4 h-4 text-white" />
                </Button>
              </div>
              <div className="p-3">
                <h4 className="text-sm">{product.name}</h4>
                <p className="text-muted-foreground text-xs mt-1">{product.category}</p>
                <p className="text-primary mt-2">{product.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Floating Add Button */}
      <Button
        onClick={onAddProduct}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
      >
        <Plus className="w-6 h-6" />
      </Button>
    </div>
  );
}
