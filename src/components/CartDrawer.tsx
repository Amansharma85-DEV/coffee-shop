import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { CartItem } from '../types/cafe';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [tipPercentage, setTipPercentage] = useState<number>(10);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.item.price * item.quantity, 0);
  const deliveryFee = subtotal > 499 || subtotal === 0 ? 0 : 49;
  const tax = subtotal * 0.05; // 5% GST
  const tip = Math.round((subtotal * tipPercentage) / 100);
  const grandTotal = Math.round(subtotal + deliveryFee + tax + tip);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderPlaced(true);
    }, 1500);
  };

  const handleFinish = () => {
    setOrderPlaced(false);
    onClearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-cream-100 dark:bg-forest-950 shadow-2xl flex flex-col border-l border-gold-500/20"
          >
            {/* Header */}
            <div className="p-6 border-b border-cream-300/60 dark:border-forest-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-gold-500" />
                <h3 className="font-serif font-bold text-xl text-forest-950 dark:text-cream-100">
                  Your Order ({cartItems.reduce((a, b) => a + b.quantity, 0)})
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-coffee-900 dark:text-cream-200 hover:bg-black/10 dark:hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {orderPlaced ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-serif font-bold text-2xl text-forest-950 dark:text-cream-100">
                    Order Confirmed!
                  </h4>
                  <p className="text-xs text-coffee-600 dark:text-cream-300 max-w-xs mx-auto">
                    Your barista is preparing your roast. Estimated pickup/delivery in 15–20 minutes.
                  </p>
                  <div className="p-4 rounded-2xl bg-cream-200/60 dark:bg-forest-900 text-left text-xs space-y-1 font-mono">
                    <p className="font-bold text-forest-900 dark:text-cream-100">Receipt #AO-{Math.floor(100000 + Math.random() * 900000)}</p>
                    <p>Total Paid: ₹{grandTotal}</p>
                    <p>Payment: UPI / Apple Pay</p>
                  </div>
                  <button
                    onClick={handleFinish}
                    className="w-full py-3 rounded-full bg-forest-900 text-cream-100 dark:bg-gold-500 dark:text-forest-950 font-bold text-sm"
                  >
                    Done
                  </button>
                </div>
              ) : cartItems.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-cream-200 dark:bg-forest-900 flex items-center justify-center mx-auto text-coffee-400">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-forest-900 dark:text-cream-100">
                    Your cart is empty
                  </h4>
                  <p className="text-xs text-coffee-600 dark:text-cream-400 font-light">
                    Explore our menu and add your favorite espresso or desserts!
                  </p>
                </div>
              ) : (
                cartItems.map((ci) => (
                  <div
                    key={ci.item.id}
                    className="flex items-center gap-4 p-3 rounded-2xl bg-cream-200/60 dark:bg-forest-900/60 border border-cream-300/40 dark:border-forest-800"
                  >
                    <img
                      src={ci.item.image}
                      alt={ci.item.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif font-bold text-sm text-forest-950 dark:text-cream-100 truncate">
                        {ci.item.name}
                      </h4>
                      <p className="text-xs font-bold text-gold-600 dark:text-gold-400">
                        ₹{ci.item.price}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 bg-cream-100 dark:bg-forest-800 px-2 py-1 rounded-full border border-cream-300/50">
                      <button
                        onClick={() => onUpdateQuantity(ci.item.id, -1)}
                        className="p-1 text-coffee-900 dark:text-cream-200 hover:text-gold-500"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center">{ci.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(ci.item.id, 1)}
                        className="p-1 text-coffee-900 dark:text-cream-200 hover:text-gold-500"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(ci.item.id)}
                      className="p-1.5 text-rose-500 hover:bg-rose-500/10 rounded-full"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer Summary */}
            {!orderPlaced && cartItems.length > 0 && (
              <div className="p-6 border-t border-cream-300/60 dark:border-forest-800 space-y-4 bg-cream-200/40 dark:bg-forest-900/40">
                {/* Tip Selector */}
                <div>
                  <span className="text-xs font-semibold text-coffee-700 dark:text-cream-300 block mb-2">
                    Add Barista Tip:
                  </span>
                  <div className="flex gap-2">
                    {[5, 10, 15].map((percent) => (
                      <button
                        key={percent}
                        onClick={() => setTipPercentage(percent)}
                        className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                          tipPercentage === percent
                            ? 'bg-gold-500 text-forest-950'
                            : 'bg-cream-300/60 dark:bg-forest-800 text-coffee-900 dark:text-cream-200'
                        }`}
                      >
                        {percent}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* Subtotal Calculations */}
                <div className="space-y-1.5 text-xs text-coffee-800 dark:text-cream-300">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery {subtotal > 499 && '(Free over ₹499)'}</span>
                    <span className="font-semibold">₹{deliveryFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST (5%)</span>
                    <span className="font-semibold">₹{tax.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Barista Tip ({tipPercentage}%)</span>
                    <span className="font-semibold">₹{tip}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-cream-300 dark:border-forest-700 text-sm font-bold text-forest-950 dark:text-cream-100">
                    <span>Total</span>
                    <span className="text-gold-600 dark:text-gold-400 font-serif text-lg">
                      ₹{grandTotal}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full py-4 rounded-full bg-forest-900 text-cream-100 dark:bg-gold-500 dark:text-forest-950 font-bold text-sm shadow-luxury hover:shadow-luxury-hover transition-all flex items-center justify-center gap-2"
                >
                  {isCheckingOut ? (
                    <span>Processing Payment...</span>
                  ) : (
                    <>
                      <span>Checkout Now • ₹{grandTotal}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
