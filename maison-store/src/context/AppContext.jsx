import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [user, setUser] = useState(null)
  const [filters, setFilters] = useState({ search: '', category: '' })
  const [toast, setToast] = useState(null)

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(null), 2500)
  }

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
    showToast(`Added to cart!`)
  }

  const updateQty = (id, delta) => {
    setCart(prev =>
      prev.map(i => i.id === id ? { ...i, qty: i.qty + delta } : i).filter(i => i.qty > 0)
    )
  }

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id))
  const clearCart = () => setCart([])

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const has = prev.find(i => i.id === product.id)
      if (has) { showToast('Removed from wishlist'); return prev.filter(i => i.id !== product.id) }
      showToast('Saved to wishlist ♥')
      return [...prev, product]
    })
  }

  const cartCount = cart.reduce((s, i) => s + i.qty, 0)
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <AppContext.Provider value={{
      cart, cartCount, cartTotal,
      addToCart, updateQty, removeFromCart, clearCart,
      wishlist, toggleWishlist,
      user, setUser,
      filters, setFilters,
      showToast
    }}>
      {children}
      {toast && <div className="toast">{toast}</div>}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)