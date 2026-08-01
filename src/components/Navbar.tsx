import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sun, Moon, Menu, X, Calendar, Search, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
  darkMode,
  setDarkMode,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Desserts', href: '#desserts' },
    { name: 'Special Blend', href: '#special' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#why-us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3.5 shadow-luxury' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-forest-900 dark:bg-gold-500 flex items-center justify-center text-cream-100 dark:text-forest-950 font-serif font-bold text-xl shadow-md transition-transform group-hover:scale-105">
              <Coffee className="w-5 h-5 text-gold-400 dark:text-forest-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-2xl tracking-wide text-forest-900 dark:text-cream-100 flex items-center gap-1">
                Coffee <span className="text-gold-500 font-script text-3xl font-normal ml-0.5">Shop</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-coffee-600 dark:text-gold-400 font-medium">
                Artisanal Roastery
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 bg-cream-200/60 dark:bg-forest-900/60 backdrop-blur-md px-6 py-2 rounded-full border border-cream-300/40 dark:border-forest-700/50">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold-500 relative py-1 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-gold-500 font-semibold'
                    : 'text-coffee-900 dark:text-cream-200'
                }`}
              >
                {link.name}
                {activeSection === link.href.replace('#', '') && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-3">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-full text-coffee-900 dark:text-cream-200 hover:bg-cream-300/50 dark:hover:bg-forest-800 transition-colors"
              aria-label="Search Menu"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full text-coffee-900 dark:text-cream-200 hover:bg-cream-300/50 dark:hover:bg-forest-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-gold-400" />
              ) : (
                <Moon className="w-5 h-5 text-forest-900" />
              )}
            </button>

            {/* Cart Button with Count Badge */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full text-coffee-900 dark:text-cream-200 hover:bg-cream-300/50 dark:hover:bg-forest-800 transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-gold-500 text-forest-950 font-bold text-xs rounded-full flex items-center justify-center shadow-md"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            {/* Table Reservation Button */}
            <button
              onClick={onOpenReservation}
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest-900 text-cream-100 dark:bg-gold-500 dark:text-forest-950 font-semibold text-sm hover:bg-forest-800 dark:hover:bg-gold-400 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Table</span>
            </button>

            {/* Mobile Menu Toggle Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full text-coffee-900 dark:text-cream-200 hover:bg-cream-300/50 dark:hover:bg-forest-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Search Bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-xl mx-auto px-4 mt-3"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search coffee, desserts, or snacks (e.g. Irish Coffee)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const menuEl = document.getElementById('menu');
                    if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-cream-100/90 dark:bg-forest-800/90 border border-gold-500/40 text-coffee-900 dark:text-cream-100 placeholder-coffee-400 dark:placeholder-cream-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-500 text-sm"
              />
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-gold-600" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card mt-2 border-b border-cream-300/50 overflow-hidden px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif font-medium text-coffee-900 dark:text-cream-100 hover:text-gold-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-cream-300/50 dark:border-forest-700/50 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-3 rounded-full bg-forest-900 text-cream-100 dark:bg-gold-500 dark:text-forest-950 font-semibold text-center text-sm shadow-md"
                >
                  Book a Table
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
