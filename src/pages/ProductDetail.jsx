import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const { addToCart, toggleWishlist, wishlist } = useCart()

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-headline text-6xl text-white uppercase mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-primary-container font-body text-xs uppercase tracking-widest border-b border-primary-container">
          Back to Shop
        </Link>
      </div>
    )
  }

  const isInWishlist = wishlist.find(item => item.id === product.id)

  return (
    <div className="animate-fade-in min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side: Vertical Scroll Content */}
        <div className="flex flex-col gap-1">
          <div className="w-full aspect-[3/4] overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              src={product.img1} 
              alt={`${product.name} View 1`}
            />
          </div>
          <div className="w-full aspect-[3/4] overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              src={product.img2} 
              alt={`${product.name} View 2`}
            />
          </div>
          {/* Add a third procedural image or reuse if only 2 available */}
          <div className="w-full aspect-[3/4] overflow-hidden">
            <img 
              className="w-full h-full object-cover grayscale" 
              src={product.img1} 
              alt={`${product.name} View 3`}
            />
          </div>
        </div>

        {/* Right Side: Sticky Info */}
        <div className="relative px-margin-mobile md:px-margin-desktop py-12 md:py-24">
          <div className="md:sticky md:top-32">
            <div className="mb-4">
              <span className="font-body text-xs font-bold text-primary-container tracking-[0.2em] uppercase">{product.tag} / Season 04</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl text-white mb-6 uppercase leading-none">{product.name}</h1>
            <p className="font-headline text-4xl text-on-surface mb-8">${product.price.toFixed(2)} USD</p>
            
            <div className="space-y-12">
              <div className="max-w-md">
                <p className="font-body text-lg text-on-surface-variant">
                  {product.description}
                </p>
              </div>

              <div>
                <span className="font-body text-xs font-bold text-on-surface-variant block mb-4 uppercase tracking-widest">Select Size</span>
                <div className="flex flex-wrap gap-4">
                  {['XS', 'S', 'M', 'L', 'XL'].map(size => {
                    const isAvailable = product.size.includes(size)
                    return (
                      <button 
                        key={size}
                        disabled={!isAvailable}
                        className={`px-6 py-2 border transition-all font-body text-xs font-bold uppercase ${!isAvailable ? 'opacity-20 cursor-not-allowed border-white/5' : 'border-white/20 hover:border-primary-container hover:text-primary-container'}`}
                      >
                        {size}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-primary-container text-on-primary-fixed py-6 font-body text-xs font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity active:scale-[0.98]"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => toggleWishlist(product)}
                  className={`w-full border py-6 font-body text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${isInWishlist ? 'bg-secondary/10 border-secondary text-secondary' : 'border-white/10 hover:bg-white/5 text-white'}`}
                >
                  <span className={`material-symbols-outlined text-[18px] ${isInWishlist ? 'FILL' : ''}`}>favorite</span> 
                  {isInWishlist ? 'In Wishlist' : 'Wishlist'}
                </button>
              </div>

              <div className="border-t border-white/10 pt-8 space-y-4">
                {['Fabric & Care', 'Shipping & Returns'].map(item => (
                  <div key={item} className="flex justify-between items-center group cursor-pointer border-b border-white/5 pb-4 last:border-0">
                    <span className="font-body text-xs font-bold uppercase tracking-widest">{item}</span>
                    <span className="material-symbols-outlined text-on-surface-variant">add</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section (Static for now as it's general brand content) */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <div className="text-center mb-16">
          <h2 className="font-headline text-5xl md:text-6xl text-white mb-4 uppercase">STYLED BY THE COMMUNITY</h2>
          <p className="font-body text-xs font-bold text-on-surface-variant tracking-[0.2em] uppercase">Tag @TRENDDROP for a chance to be featured</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-4">
            <div className="aspect-square glass-panel overflow-hidden group">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWLbpr4gxHmNBgHDDHbJSHbgmAFQ-sDxBdJ1ajRvzhuUd8JS1uwCvNK6hoyVffuDljN0Cu3-PGDwun8zbsC-hJRTRmAIIsHWddZ8-UeqKQas91TG3P8wIHk8LWMxt68bn6Plq2UgrrDVyGNJtS-WyR_y2STGOJ3Z3InPKtLTbUY-Xv2pP7RxKoXXfrvqLfrLSh0U8uMdHjTB7zwANv7S5q7SUG5tVpVtVASBH5c8jOj_kpLn6wkZNIhJSPTJNWfUE9s7Dk4xtl78N2" alt="C1" />
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="aspect-[2/3] glass-panel overflow-hidden group">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIDcav_n42TEyM83tsOdejBWiu8PfPE00ldlxpOZ8uOyaqwhU1EZgFuic9knIeBtJ8AVkQAFGRop3og5EnGhTFqye6Wmymi9booQW24CkVAmLLBvdMjbXmykS2urh4jsDSXjiIfd9rQFAif1jPRNT-3s-0vD5GMGXUzmd0lYgrDPGbQLCEvhUw2-15yr8Zep90j8HBXQ4BnmUH8_v8qIRuMnJNEjozB4D9N8y9hblMenH1sQYwIA7eAx0zrGjFkLytiPtxJBBi5lGB" alt="C2" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="aspect-square glass-panel overflow-hidden group">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzjEXYFJow4jwiC3RWdMMzBbVjOtK5_Y_72VliUSyZQW_S-d33mPRgnGnVnxIgztQ4y-LvcnsGvqQgJMiAgA8he3v_3DGJLDbGpTCAFKftcil1_gPaL1iOo9k_bbWWcOn_0VtsWAdi3ZWTlOpaOjpUoTRtliwvkqh9qOIQxjfdookCuTyrzPg7EYogQ2MqNDs1lQXuGQ3-WMsgkfqdcKvr12YGNbh3TC89awAKg7Gn8HcXCunnRUA2cJS5ZSMFXUqECUwIpTVRb_kW" alt="C3" />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="aspect-square glass-panel overflow-hidden group">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY6VMhzpCmwmvx-NYnj33XsZ38Q3oBRdbpKvfWrJVr6xWoHOMx1HYNWXQ1DnnxuHfl3V8q4Bb2TW6wNADDXNCrlZsDd4Q5o1QkBpa9rn_j-NYZuki-9ylZHqg5sF_v8lzGEqLZ7kziWF6Uv-sJ1cyXjDWU0uRqcfU2QU-m3nnkkjAVWGb5ke3kckTkJJnYxP70fJC6pnbLmAFTd9kXtWrXFKslMnLbbpzr7Zy2MsLpMuDncu7pvDUjxdq_4ZhVou1aDtdcSxUv_ZzW" alt="C4" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
