import { useState } from "react";
import { ArrowLeft, Upload, Sparkles, TrendingUp, Package } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Switch } from "./ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface AddProductProps {
  onBack: () => void;
}

export function AddProduct({ onBack }: AddProductProps) {
  const [showPricingTool, setShowPricingTool] = useState(false);
  const [pricingCalculated, setPricingCalculated] = useState(false);
  const [isDigital, setIsDigital] = useState(false);
  const [useKalaLogistics, setUseKalaLogistics] = useState(false);
  const [useKalaProtect, setUseKalaProtect] = useState(true);
  
  const [formData, setFormData] = useState({
    price: "",
    medium: "",
    width: "",
    height: "",
    hours: "",
  });

  const calculatePrice = () => {
    setPricingCalculated(true);
    setFormData({ ...formData, price: "20000" });
  };

  const useSuggestedPrice = () => {
    setShowPricingTool(false);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-10 px-6 py-4 bg-card border-b border-border">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2>Add New Product</h2>
        </div>
      </header>

      <div className="px-6 py-6 space-y-6">
        {/* Image Upload */}
        <div>
          <Label>Product Images</Label>
          <div className="mt-2 border-2 border-dashed border-border rounded-3xl p-12 text-center bg-card">
            <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground mb-2">Tap to upload images</p>
            <p className="text-sm text-muted-foreground">or drag and drop</p>
          </div>
        </div>

        {/* Product Name */}
        <div>
          <Label htmlFor="name">Product Name</Label>
          <Input
            id="name"
            placeholder="e.g., Sunset Over the Ganges"
            className="mt-2 h-12 rounded-2xl"
          />
        </div>

        {/* Description */}
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Tell the story behind your art..."
            className="mt-2 min-h-32 rounded-2xl"
          />
          <Button 
            variant="ghost" 
            className="mt-2 text-primary"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Write with AI
          </Button>
        </div>

        {/* Pricing Section */}
        <Card className="p-6 rounded-3xl bg-card border border-border">
          <h3 className="mb-4">Pricing</h3>
          
          <div>
            <Label htmlFor="price">Your Price (₹)</Label>
            <Input
              id="price"
              type="number"
              placeholder="0"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="mt-2 h-12 rounded-2xl"
            />
          </div>

          {!showPricingTool && (
            <Button
              onClick={() => setShowPricingTool(true)}
              variant="outline"
              className="w-full mt-4 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary/10"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Need help pricing?
            </Button>
          )}

          {/* AI Pricing Tool */}
          {showPricingTool && (
            <div className="mt-6 p-4 rounded-2xl bg-primary/5 border-2 border-primary/20">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h4 className="text-primary">AI Art-Pricing Tool</h4>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="medium">Medium</Label>
                  <Select 
                    value={formData.medium}
                    onValueChange={(value) => setFormData({ ...formData, medium: value })}
                  >
                    <SelectTrigger className="mt-2 h-12 rounded-2xl bg-white">
                      <SelectValue placeholder="Select medium" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="painting">Painting</SelectItem>
                      <SelectItem value="sculpture">Sculpture</SelectItem>
                      <SelectItem value="digital">Digital Art</SelectItem>
                      <SelectItem value="textile">Textile</SelectItem>
                      <SelectItem value="mixed">Mixed Media</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="width">Width (inches)</Label>
                    <Input
                      id="width"
                      type="number"
                      placeholder="24"
                      value={formData.width}
                      onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                      className="mt-2 h-12 rounded-2xl bg-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="height">Height (inches)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="36"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                      className="mt-2 h-12 rounded-2xl bg-white"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="hours">Hours Spent</Label>
                  <Input
                    id="hours"
                    type="number"
                    placeholder="40"
                    value={formData.hours}
                    onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                    className="mt-2 h-12 rounded-2xl bg-white"
                  />
                </div>

                <Button
                  onClick={calculatePrice}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12"
                >
                  Calculate Price
                </Button>

                {pricingCalculated && (
                  <div className="p-4 rounded-2xl bg-white border-2 border-primary">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-1" />
                      <div className="flex-1">
                        <p className="mb-2">Suggested Range:</p>
                        <p className="text-2xl text-primary mb-3">₹18,000 - ₹22,500</p>
                        <Button
                          onClick={useSuggestedPrice}
                          variant="outline"
                          className="w-full rounded-full border-2 border-primary text-primary hover:bg-primary/10"
                        >
                          Use this price
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </Card>

        {/* Shipping Section */}
        <Card className="p-6 rounded-3xl bg-card border border-border">
          <h3 className="mb-4">Shipping</h3>
          
          <div className="space-y-4">
            <label className="flex items-start gap-3 p-4 rounded-2xl border-2 border-border cursor-pointer hover:border-primary transition-colors">
              <input 
                type="radio" 
                name="shipping" 
                value="standard"
                checked={!useKalaLogistics}
                onChange={() => setUseKalaLogistics(false)}
                className="mt-1"
              />
              <div>
                <p>Standard Shipping</p>
                <p className="text-sm text-muted-foreground">Customer arranges pickup or you ship yourself</p>
              </div>
            </label>

            <label className="flex items-start gap-3 p-4 rounded-2xl border-2 border-border cursor-pointer hover:border-primary transition-colors">
              <input 
                type="radio" 
                name="shipping" 
                value="kala"
                checked={useKalaLogistics}
                onChange={() => setUseKalaLogistics(true)}
                className="mt-1"
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Package className="w-4 h-4 text-primary" />
                  <p>Enable Kala-Logistics</p>
                </div>
                <p className="text-sm text-muted-foreground">For high-value, fragile art. Includes crating & insurance.</p>
              </div>
            </label>
          </div>
        </Card>

        {/* Digital Product Section */}
        <Card className="p-6 rounded-3xl bg-card border border-border">
          <div className="flex items-center justify-between mb-4">
            <h3>Digital Product</h3>
            <Switch
              checked={isDigital}
              onCheckedChange={setIsDigital}
            />
          </div>

          {isDigital && (
            <div className="space-y-4 pt-4 border-t border-border">
              <div>
                <Label>Upload File</Label>
                <div className="mt-2 border-2 border-dashed border-border rounded-2xl p-6 text-center bg-muted/30">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Upload digital file</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-primary/5">
                <Switch
                  checked={useKalaProtect}
                  onCheckedChange={setUseKalaProtect}
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p>Enable Kala-Protect</p>
                  </div>
                  <p className="text-sm text-muted-foreground">DRM & watermarking to protect your digital art</p>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-card border-t border-border">
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14">
          Publish Product
        </Button>
      </div>
    </div>
  );
}