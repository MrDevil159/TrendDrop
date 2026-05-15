import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  const { wishlist, toggleWishlist, addToCart } = useCart()

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 animate-fade-in">
        <span className="material-symbols-outlined text-8xl text-on-surface-variant mb-6">favorite</span>
        <h1 className="font-headline text-6xl text-white uppercase mb-4">Your Wishlist is Empty</h1>
        <p className="font-body text-lg text-on-surface-variant mb-8 max-w-md">
          Save your favorite trend pieces here to keep an eye on the next drop.
        </p>
        <Link to="/shop" className="bg-primary-container text-on-primary-fixed font-body text-xs font-bold px-10 py-4 uppercase tracking-[0.2em] hover:scale-105 transition-transform">
          Back to Shop
        </Link>
      </div>
    )
  }

  return (
    <div className="animate-fade-in max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-section-gap">
      <h1 className="font-headline text-6xl md:text-8xl text-white uppercase mb-12">Your Wishlist</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {wishlist.map(item => (
          <div key={item.id} className="group relative flex flex-col glass-panel p-4">
            <div className="relative aspect-[3/4] overflow-hidden mb-4">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.img1} alt={item.name} />
              <button 
                onClick={() => toggleWishlist(item)}
                className="absolute top-2 right-2 w-8 h-8 bg-black/50 backdrop-blur-md text-secondary flex items-center justify-center rounded-full"
              >
                <span className="material-symbols-outlined text-sm FILL">close</span>
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-body text-[10px] uppercase font-bold text-primary-container tracking-widest">{item.tag}</span>
              <h3 className="font-headline text-2xl text-white uppercase">{item.name}</h3>
              <p className="font-headline text-xl text-on-surface mb-4">${item.price.toFixed(2)}</p>
              <button 
                onClick={() => addToCart(item)}
                className="w-full bg-white text-black py-3 font-body text-xs font-bold uppercase tracking-widest hover:bg-primary-container transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist
