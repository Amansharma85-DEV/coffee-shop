import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedDesserts } from './components/FeaturedDesserts';
import { SpecialCoffee } from './components/SpecialCoffee';
import { FeatureBanner } from './components/FeatureBanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CoffeeMenu } from './components/CoffeeMenu';
import { Testimonials } from './components/Testimonials';
import { GallerySection } from './components/GallerySection';
import { InstagramSection } from './components/InstagramSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ReservationModal } from './components/ReservationModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import type { MenuItem, CartItem } from './types/cafe';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  
  // Persist Cart in localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('aura_oak_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isReservationOpen, setIsReservationOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('aura_oak_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to sync cart to localStorage:', e);
    }
  }, [cartItems]);

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Section observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'desserts', 'special', 'why-us', 'menu', 'gallery', 'testimonials'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      } else {
        return [...prev, { item, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, ci) => acc + ci.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-[#0A1713] text-[#2C1810] dark:text-[#F7F2EB] selection:bg-[#D4AF37] selection:text-[#0F231C]">
      {/* Navigation Header */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
      />

      {/* Main Page Content */}
      <main>
        <HeroSection onOpenReservation={() => setIsReservationOpen(true)} />
        <FeaturedDesserts onAddToCart={handleAddToCart} />
        <SpecialCoffee onAddToCart={handleAddToCart} />
        <FeatureBanner />
        <WhyChooseUs />
        <CoffeeMenu onAddToCart={handleAddToCart} />
        <Testimonials />
        <GallerySection />
        <InstagramSection />
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Side Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Mobile Bottom Navigation & WhatsApp Bar */}
      <MobileBottomNav
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
        activeSection={activeSection}
      />
    </div>
  );
}

export default App;
