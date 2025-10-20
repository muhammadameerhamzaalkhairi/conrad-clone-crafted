import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Brasserie from "./pages/Brasserie";
import GoldenLeaf from "./pages/GoldenLeaf";
import GardenCafe from "./pages/GardenCafe";
import LobbyLounge from "./pages/LobbyLounge";
import PacificBar from "./pages/PacificBar";
import CakeShop from "./pages/CakeShop";
import NewsOffers from "./pages/NewsOffers";
import EShop from "./pages/EShop";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/brasserie" element={<Brasserie />} />
          <Route path="/golden-leaf" element={<GoldenLeaf />} />
          <Route path="/garden-cafe" element={<GardenCafe />} />
          <Route path="/lobby-lounge" element={<LobbyLounge />} />
          <Route path="/pacific-bar" element={<PacificBar />} />
          <Route path="/cake-shop" element={<CakeShop />} />
          <Route path="/news" element={<NewsOffers />} />
          <Route path="/eshop" element={<EShop />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
