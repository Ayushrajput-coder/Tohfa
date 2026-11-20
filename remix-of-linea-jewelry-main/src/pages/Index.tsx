import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import AboutSection from "@/components/site/AboutSection";
import Collection from "@/components/site/Collection";
import Highlights from "@/components/site/Highlights";
import InstagramSection from "@/components/site/InstagramSection";
import ContactSection from "@/components/site/ContactSection";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import CartDrawer from "@/components/site/CartDrawer";
import { CartProvider } from "@/lib/cart";

const Index = () => {
  return (
    <CartProvider>
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <Collection />
        <Highlights />
        <InstagramSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CartDrawer />
    </div>
    </CartProvider>
  );
};

export default Index;
