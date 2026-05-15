import { Outlet, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useCart } from '../context/CartContext'

const Header = () => {
  const { pathname } = useLocation()
  const { cartCount } = useCart()
  
  return (
    <header className="sticky top-0 w-full z-50 bg-white/5 backdrop-blur-[24px] border-b border-white/10">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-headline text-3xl tracking-tighter text-white uppercase">TREND DROP</Link>
          <nav className="hidden md:flex gap-6">
            <Link 
              className={`font-body text-xs font-bold uppercase tracking-widest pb-1 transition-all ${pathname === '/shop' ? 'text-primary-container border-b-2 border-primary-container' : 'text-on-surface-variant hover:text-secondary'}`} 
              to="/shop"
            >
              Shop
            </Link>
            <Link 
              className={`font-body text-xs font-bold uppercase tracking-widest pb-1 transition-all ${pathname === '/editorial' ? 'text-primary-container border-b-2 border-primary-container' : 'text-on-surface-variant hover:text-secondary'}`} 
              to="/editorial"
            >
              Editorial
            </Link>
            <Link 
              className={`font-body text-xs font-bold uppercase tracking-widest pb-1 transition-all ${pathname === '/featured' ? 'text-primary-container border-b-2 border-primary-container' : 'text-on-surface-variant hover:text-secondary'}`} 
              to="/featured"
            >
              Featured
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1">
            <span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
            <input 
              className="bg-transparent border-none focus:ring-0 text-xs uppercase placeholder:text-on-surface-variant/50 w-32 outline-none" 
              placeholder="SEARCH TRENDS" 
              type="text"
            />
          </div>
          <Link to="/wishlist" className="relative p-2 hover:bg-white/10 transition-all duration-300 active:scale-95 text-white">
            <span className="material-symbols-outlined">favorite</span>
          </Link>
          <Link to="/cart" className="relative p-2 hover:bg-white/10 transition-all duration-300 active:scale-95 text-white">
            <span className="material-symbols-outlined">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-primary-container text-on-primary-fixed text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <Link to="/login" className="p-2 hover:bg-white/10 transition-all duration-300 active:scale-95 text-white">
            <span className="material-symbols-outlined">person</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

const Footer = () => (
  <footer className="bg-background border-t border-white/10 w-full mt-auto">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap">
      <div className="md:col-span-6">
        <span className="font-headline text-5xl text-white uppercase block mb-6">TREND DROP</span>
        <p className="font-body text-base text-on-surface-variant max-w-md">
          The pulse of modern streetwear. Digital aesthetics meeting physical form in an unapologetic pursuit of the new.
        </p>
      </div>
      <div className="md:col-span-2">
        <span className="font-body text-xs font-bold text-white uppercase mb-6 block tracking-widest">EXPLORE</span>
        <ul className="flex flex-col gap-4">
          <li><Link className="font-body text-xs text-on-surface-variant hover:text-secondary transition-colors duration-300 uppercase tracking-widest" to="/shop">Shop All</Link></li>
          <li><Link className="font-body text-xs text-on-surface-variant hover:text-secondary transition-colors duration-300 uppercase tracking-widest" to="/editorial">Lookbook</Link></li>
          <li><Link className="font-body text-xs text-on-surface-variant hover:text-secondary transition-colors duration-300 uppercase tracking-widest" to="/featured">Featured</Link></li>
        </ul>
      </div>
      <div className="md:col-span-2">
        <span className="font-body text-xs font-bold text-white uppercase mb-6 block tracking-widest">SUPPORT</span>
        <ul className="flex flex-col gap-4">
          <li><a className="font-body text-xs text-on-surface-variant hover:text-secondary transition-colors duration-300 uppercase tracking-widest" href="#">Shipping</a></li>
          <li><a className="font-body text-xs text-on-surface-variant hover:text-secondary transition-colors duration-300 uppercase tracking-widest" href="#">Contact</a></li>
          <li><a className="font-body text-xs text-on-surface-variant hover:text-secondary transition-colors duration-300 uppercase tracking-widest" href="#">Privacy</a></li>
        </ul>
      </div>
      <div className="md:col-span-2">
        <span className="font-body text-xs font-bold text-white uppercase mb-6 block tracking-widest">SOCIAL</span>
        <ul className="flex flex-col gap-4">
          <li><a className="font-body text-xs text-on-surface-variant hover:text-secondary transition-colors duration-300 uppercase tracking-widest" href="#">Instagram</a></li>
          <li><a className="font-body text-xs text-on-surface-variant hover:text-secondary transition-colors duration-300 uppercase tracking-widest" href="#">Discord</a></li>
        </ul>
      </div>
      <div className="md:col-span-12 border-t border-white/5 pt-12 mt-12">
        <p className="font-body text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">
          © 2024 TREND DROP. UNAPOLOGETIC STYLE. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  </footer>
)

const Layout = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
