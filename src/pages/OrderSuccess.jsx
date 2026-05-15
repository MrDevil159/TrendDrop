import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 animate-fade-in bg-[#050505]">
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-primary-container/20 blur-[100px] rounded-full"></div>
        <span className="material-symbols-outlined text-[120px] text-primary-container relative z-10 animate-bounce">
          task_alt
        </span>
      </div>
      
      <h1 className="font-headline text-7xl md:text-9xl text-white uppercase leading-none mb-6">
        Order <br /><span className="text-primary-container">Confirmed</span>
      </h1>
      
      <p className="font-body text-xl text-on-surface-variant mb-12 max-w-2xl uppercase tracking-widest leading-relaxed">
        Your drop is secured. We are processing your collection and will notify you as soon as it's ready for dispatch.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <Link 
          to="/shop" 
          className="bg-primary-container text-on-primary-fixed font-body text-xs font-bold px-12 py-5 uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-[0_0_30px_rgba(195,244,0,0.3)]"
        >
          Return to Shop
        </Link>
        <Link 
          to="/" 
          className="border border-white/10 text-white font-body text-xs font-bold px-12 py-5 uppercase tracking-[0.3em] hover:bg-white/5 transition-all"
        >
          Home Feed
        </Link>
      </div>

      <div className="mt-24 pt-12 border-t border-white/5 w-full max-w-4xl">
        <p className="font-body text-[10px] text-on-surface-variant/40 uppercase tracking-[0.5em]">
          Digital Streetwear Distribution Center • Secured Session
        </p>
      </div>
    </div>
  );
};

export default OrderSuccess;
