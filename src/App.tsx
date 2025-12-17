import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { Dashboard } from "./components/Dashboard";
import { AddProduct } from "./components/AddProduct";
import { TheCoven } from "./components/TheCoven";
import { ArtistStore } from "./components/ArtistStore";
import { ProductsPage } from "./components/ProductsPage";
import { WebsiteBuilder } from "./components/WebsiteBuilder";

type Screen = "landing" | "dashboard" | "addProduct" | "coven" | "store" | "products" | "websiteBuilder";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("landing");

  return (
    <div className="min-h-screen">
      {currentScreen === "landing" && (
        <LandingPage onStartTrial={() => setCurrentScreen("dashboard")} />
      )}
      
      {currentScreen === "dashboard" && (
        <Dashboard
          onAddProduct={() => setCurrentScreen("addProduct")}
          onViewCoven={() => setCurrentScreen("coven")}
          onViewStore={() => setCurrentScreen("store")}
          onViewProducts={() => setCurrentScreen("products")}
          onViewWebsiteBuilder={() => setCurrentScreen("websiteBuilder")}
        />
      )}
      
      {currentScreen === "addProduct" && (
        <AddProduct onBack={() => setCurrentScreen("dashboard")} />
      )}
      
      {currentScreen === "coven" && (
        <TheCoven onBack={() => setCurrentScreen("dashboard")} />
      )}
      
      {currentScreen === "store" && (
        <ArtistStore onBack={() => setCurrentScreen("dashboard")} />
      )}
      
      {currentScreen === "products" && (
        <ProductsPage 
          onBack={() => setCurrentScreen("dashboard")}
          onAddProduct={() => setCurrentScreen("addProduct")}
        />
      )}
      
      {currentScreen === "websiteBuilder" && (
        <WebsiteBuilder 
          onBack={() => setCurrentScreen("dashboard")}
          onPreview={() => setCurrentScreen("store")}
        />
      )}
    </div>
  );
}