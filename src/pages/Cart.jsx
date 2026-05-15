import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart()
  const navigate = useNavigate()

  const handleCheckout = () => {
    // Dummy checkout: just clear and go to success page
    clearCart()
    navigate('/order-success')
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 animate-fade-in">
        <span className="material-symbols-outlined text-8xl text-on-surface-variant mb-6">shopping_bag</span>
        <h1 className="font-headline text-6xl text-white uppercase mb-4">Your Bag is Empty</h1>
        <p className="font-body text-lg text-on-surface-variant mb-8 max-w-md">
          Looks like you haven't added anything to your collection yet. Start exploring the latest drops.
        </p>
        <Link to="/shop" className="bg-primary-container text-on-primary-fixed font-body text-xs font-bold px-10 py-4 uppercase tracking-[0.2em] hover:scale-105 transition-transform">
          Explore Shop
        </Link>
      </div>
    )
  }

  return (
    <div className="animate-fade-in max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-section-gap">
      <h1 className="font-headline text-6xl md:text-8xl text-white uppercase mb-12">Your Collection</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Cart Items */}
        <div className="lg:col-span-8 space-y-6">
          {cart.map(item => (
            <div key={item.id} className="glass-panel p-4 md:p-6 flex gap-6 group">
              <div className="w-24 md:w-32 aspect-[3/4] overflow-hidden flex-shrink-0">
                <img className="w-full h-full object-cover" src={item.img1} alt={item.name} />
              </div>
              <div className="flex-grow flex flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline text-2xl md:text-3xl text-white uppercase">{item.name}</h3>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="material-symbols-outlined text-on-surface-variant hover:text-error transition-colors"
                    >
                      close
                    </button>
                  </div>
                  <p className="font-body text-xs text-primary-container uppercase tracking-widest font-bold mb-4">{item.aesthetic}</p>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center border border-white/10 glass-panel overflow-hidden">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-3 py-1 hover:bg-white/5 text-white"
                    >
                      -
                    </button>
                    <span className="px-4 font-body text-sm text-white border-x border-white/10">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-3 py-1 hover:bg-white/5 text-white"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-headline text-2xl text-white">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary & Checkout */}
        <div className="lg:col-span-4 sticky top-32">
          <div className="glass-panel p-8 space-y-8">
            <h2 className="font-headline text-3xl text-white uppercase">Order Summary</h2>
            
            <div className="space-y-4 border-b border-white/5 pb-8">
              <div className="flex justify-between font-body text-sm text-on-surface-variant uppercase tracking-widest">
                <span>Subtotal</span>
                <span className="text-white">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-body text-sm text-on-surface-variant uppercase tracking-widest">
                <span>Shipping</span>
                <span className="text-primary-container">FREE (PROMO)</span>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <span className="font-body text-xs text-on-surface-variant uppercase tracking-[0.2em] font-bold">Total</span>
              <span className="font-headline text-4xl text-white">${cartTotal.toFixed(2)}</span>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full bg-primary-container text-on-primary-fixed py-6 font-body text-xs font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-[0_0_20px_rgba(195,244,0,0.2)]"
            >
              Confirm & Place Order
            </button>
            
            <p className="font-body text-[10px] text-center text-on-surface-variant/50 uppercase tracking-widest">
              Digital Streetwear Distribution
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
