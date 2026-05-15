import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id)
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta)
        return { ...item, quantity: newQty }
      }
      return item
    }))
  }

  const clearCart = () => {
    setCart([])
  }

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.find(item => item.id === product.id)
      if (exists) return prev.filter(item => item.id !== product.id)
      return [...prev, product]
    })
  }

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <CartContext.Provider value={{ 
      cart, 
      wishlist, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      toggleWishlist,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
