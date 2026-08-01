import React from 'react';
import { Truck, ShieldCheck, Award, Headphones } from 'lucide-react';

export const FeatureBanner: React.FC = () => {
  return (
    <div className="bg-forest-900 text-cream-100 py-6 border-y border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center text-gold-400 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-cream-100">Free Delivery</h4>
              <p className="text-xs text-cream-400">On orders over ₹499</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center text-gold-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-cream-100">Secure Payment</h4>
              <p className="text-xs text-cream-400">100% secure checkout</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center text-gold-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-cream-100">Premium Quality</h4>
              <p className="text-xs text-cream-400">Best coffee, always</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center text-gold-400 shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-cream-100">24/7 Support</h4>
              <p className="text-xs text-cream-400">We're here for you</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
