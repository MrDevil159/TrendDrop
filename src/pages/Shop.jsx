import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { products } from '../data/products'

const ProductCard = ({ product }) => (
  <Link to={`/product/${product.id}`} className="group relative flex flex-col cursor-pointer">
    <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low mb-4">
      <img 
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" 
        src={product.img1} 
        alt={product.name}
      />
      <img 
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
        src={product.img2} 
        alt={product.name}
      />
      <button className="absolute top-4 right-4 w-10 h-10 bg-primary-container text-on-primary-container flex items-center justify-center transition-transform hover:scale-110 active:scale-95 z-10">
        <span className="material-symbols-outlined">add</span>
      </button>
      <div className="glass-panel absolute bottom-4 left-4 right-4 p-4 flex flex-col gap-1 transition-all duration-300 group-hover:border-primary-container">
        <div className="flex justify-between items-start">
          <span className="font-body text-[10px] uppercase font-bold tracking-widest text-primary-container">{product.tag}</span>
          <span className="font-body text-sm text-white">${product.price.toFixed(2)}</span>
        </div>
        <h3 className="font-headline text-2xl uppercase text-white">{product.name}</h3>
      </div>
    </div>
  </Link>
)

const FilterButton = ({ label, icon, options, activeValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 group px-4 py-2 border transition-all ${activeValue ? 'border-primary-container text-primary-container' : 'border-transparent hover:border-white/10'}`}
      >
        <span className="font-body text-xs uppercase tracking-widest">{activeValue ? `${label}: ${activeValue}` : label}</span>
        <span className={`material-symbols-outlined text-[16px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>{icon}</span>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-50 glass-panel min-w-[150px] p-2 flex flex-col gap-1 shadow-2xl animate-fade-in">
          <button 
            onClick={() => { onChange(null); setIsOpen(false); }}
            className="text-left px-4 py-2 font-body text-xs uppercase tracking-widest hover:bg-white/10 text-on-surface-variant"
          >
            All {label}s
          </button>
          {options.map(opt => (
            <button 
              key={opt}
              onClick={() => { onChange(opt); setIsOpen(false); }}
              className={`text-left px-4 py-2 font-body text-xs uppercase tracking-widest hover:bg-white/10 ${activeValue === opt ? 'text-primary-container' : 'text-white'}`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const aesthetic = searchParams.get('aesthetic')
  
  const [sortBy, setSortBy] = useState(null)
  const [activeSize, setActiveSize] = useState(null)
  const [activePrice, setActivePrice] = useState(null)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (aesthetic) {
      result = result.filter(p => p.aesthetic.toLowerCase() === aesthetic.toLowerCase())
    }

    if (activeSize) {
      result = result.filter(p => p.size.includes(activeSize))
    }

    if (activePrice) {
      if (activePrice === '< $150') result = result.filter(p => p.price < 150)
      if (activePrice === '$150 - $250') result = result.filter(p => p.price >= 150 && p.price <= 250)
      if (activePrice === '> $250') result = result.filter(p => p.price > 250)
    }

    if (sortBy) {
      if (sortBy === 'Price: Low to High') result.sort((a, b) => a.price - b.price)
      if (sortBy === 'Price: High to Low') result.sort((a, b) => b.price - a.price)
      if (sortBy === 'Newest') result.sort((a, b) => b.id - a.id)
    }

    return result
  }, [aesthetic, activeSize, activePrice, sortBy])

  return (
    <div className="animate-fade-in min-h-screen">
      <section className="px-margin-mobile md:px-margin-desktop pt-16 pb-8">
        <h1 className="font-headline text-6xl md:text-7xl uppercase text-white mb-2">
          {aesthetic ? `${aesthetic} Collection` : 'Streetwear Essentials'}
        </h1>
        <p className="text-on-surface-variant font-body text-lg max-w-2xl">
          {aesthetic 
            ? `Exploring the ${aesthetic} aesthetic. Curated drops for the digital native.` 
            : 'Curated drops for the digital native. Blending cyber aesthetics with high-fashion silhouettes. Unapologetic. Essential.'
          }
        </p>
      </section>

      <section className="sticky top-[72px] z-40 bg-background/80 backdrop-blur-md border-b border-white/5 py-4 mb-12">
        <div className="px-margin-mobile md:px-margin-desktop flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <FilterButton 
              label="Size" 
              icon="expand_more" 
              options={['XS', 'S', 'M', 'L', 'XL']} 
              activeValue={activeSize}
              onChange={setActiveSize}
            />
            <FilterButton 
              label="Price" 
              icon="expand_more" 
              options={['< $150', '$150 - $250', '> $250']} 
              activeValue={activePrice}
              onChange={setActivePrice}
            />
            <FilterButton 
              label="Trend" 
              icon="expand_more" 
              options={['Y2K', 'Grunge', 'Cyberpunk']} 
              activeValue={aesthetic}
              onChange={(val) => {
                if (val) setSearchParams({ aesthetic: val })
                else setSearchParams({})
              }}
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="font-body text-xs uppercase tracking-widest text-on-surface-variant">{filteredProducts.length} Items</span>
            <FilterButton 
              label="Sort By" 
              icon="sort" 
              options={['Newest', 'Price: Low to High', 'Price: High to Low']} 
              activeValue={sortBy}
              onChange={setSortBy}
            />
          </div>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter min-h-[400px]">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-24 glass-panel">
              <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">search_off</span>
              <p className="font-headline text-3xl uppercase text-white">No items match your filters</p>
              <button 
                onClick={() => { setActiveSize(null); setActivePrice(null); setSearchParams({}); }}
                className="mt-6 text-primary-container font-body text-xs uppercase tracking-widest border-b border-primary-container"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Shop
