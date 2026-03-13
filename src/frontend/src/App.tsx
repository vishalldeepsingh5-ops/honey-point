import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenuSection";
import Navbar from "./components/Navbar";
import OrderInquirySection from "./components/OrderInquirySection";
import ReservationSection from "./components/ReservationSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <ReservationSection />
        <OrderInquirySection />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
