import React from 'react';
import { Home, Coffee, Calendar, ShoppingBag, MessageSquare } from 'lucide-react';

interface MobileBottomNavProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
  activeSection: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
  activeSection,
}) => {
  return (
    <>
      {/* Floating WhatsApp Quick Action Button */}
      <a
        href="https://wa.me/917045940218?text=Hello%20Aura%20%26%20Oak!%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-20 right-4 z-40 w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform"
        aria-label="Chat on WhatsApp"
        title="Chat with Barista on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>

      {/* Fixed Mobile Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 glass-nav border-t border-cream-300/60 dark:border-forest-800 px-4 py-2 flex items-center justify-around shadow-2xl">
        <a
          href="#hero"
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold ${
            activeSection === 'hero' || !activeSection
              ? 'text-gold-600 dark:text-gold-400'
              : 'text-coffee-700 dark:text-cream-300'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </a>

        <a
          href="#menu"
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold ${
            activeSection === 'menu'
              ? 'text-gold-600 dark:text-gold-400'
              : 'text-coffee-700 dark:text-cream-300'
          }`}
        >
          <Coffee className="w-5 h-5" />
          <span>Menu</span>
        </a>

        <button
          onClick={onOpenReservation}
          className="flex flex-col items-center gap-1 text-[10px] font-semibold text-coffee-700 dark:text-cream-300 hover:text-gold-500"
        >
          <Calendar className="w-5 h-5" />
          <span>Reserve</span>
        </button>

        <button
          onClick={onOpenCart}
          className="relative flex flex-col items-center gap-1 text-[10px] font-semibold text-coffee-700 dark:text-cream-300 hover:text-gold-500"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-gold-500 text-forest-950 font-bold text-[9px] rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <span>Cart</span>
        </button>
      </nav>
    </>
  );
};
