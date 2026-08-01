import React from 'react';
import { Coffee, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-950 text-cream-200 pt-20 pb-28 md:pb-14 border-t border-gold-500/20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giant Editorial Brand Banner in Footer */}
        <div className="pb-16 border-b border-forest-800 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-gold-400 block">
              ESTABLISHED IN MUMBAl • 2012
            </span>
            <h2 className="font-serif font-extrabold text-5xl sm:text-7xl lg:text-8xl text-cream-100 tracking-tight">
              AURA & OAK
            </h2>
            <p className="font-script text-3xl sm:text-4xl text-gold-400">
              Artisanal Coffee House & Dessert Sanctuary
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#hero"
              className="px-8 py-3.5 rounded-full bg-gold-500 text-forest-950 font-bold text-xs uppercase tracking-wider shadow-glow-gold hover:bg-gold-400 transition-all"
            >
              Back to Top ↑
            </a>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-16 border-b border-forest-800">
          
          {/* Brand Story (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-forest-950 font-serif font-bold text-xl shadow-md">
                <Coffee className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl tracking-wide text-cream-100">
                  Coffee <span className="text-gold-500 font-script text-3xl font-normal">Shop</span>
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream-400 font-light leading-relaxed max-w-sm">
              An iconic luxury coffee house inspired by rich editorial design, hanging garden lanterns, and artisanal roasts. Sweet moments start right here.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-forest-900 border border-forest-700 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-forest-950 transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>

              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-forest-900 border border-forest-700 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-forest-950 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.714 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
              </a>

              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-forest-900 border border-forest-700 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-forest-950 transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-base text-gold-400">Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm font-light text-cream-300">
              <li><a href="#hero" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#desserts" className="hover:text-gold-400 transition-colors">Featured Desserts</a></li>
              <li><a href="#special" className="hover:text-gold-400 transition-colors">Müil Special Roast</a></li>
              <li><a href="#menu" className="hover:text-gold-400 transition-colors">Full Menu & Eats</a></li>
              <li><a href="#gallery" className="hover:text-gold-400 transition-colors">Photo Gallery</a></li>
            </ul>
          </div>

          {/* Working Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-gold-400">Working Hours</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light text-cream-300">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-cream-100">Mon - Fri:</span>
                  <span>7:30 AM – 10:30 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-cream-100">Sat - Sun:</span>
                  <span>8:00 AM – 11:30 PM</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Details & Location Map Note (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-gold-400">Visit Us</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light text-cream-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span>Alongside Prithvi Theatre, 20 Juhu Rd, Janki Kutir, Mumbai 400049</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="tel:+917045940218" className="hover:text-gold-400">+91 70459 40218</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a href="mailto:hello@auracafe.com" className="hover:text-gold-400">hello@auracafe.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400 font-light">
          <p>© 2026 Coffee Shop & Roastery. Crafted with passion.</p>

          <div className="flex items-center gap-4 text-cream-300 font-semibold text-[11px]">
            <span>We Accept:</span>
            <span className="px-2 py-1 bg-forest-900 rounded border border-forest-700">VISA</span>
            <span className="px-2 py-1 bg-forest-900 rounded border border-forest-700">MasterCard</span>
            <span className="px-2 py-1 bg-forest-900 rounded border border-forest-700">Apple Pay</span>
            <span className="px-2 py-1 bg-forest-900 rounded border border-forest-700">UPI / GPay</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
