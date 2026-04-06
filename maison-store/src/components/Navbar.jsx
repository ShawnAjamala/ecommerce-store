import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import './Navbar.css'

export default function Navbar() {
  const { cartCount, user, setUser, showToast } = useApp()
  const navigate = useNavigate()

  const logout = () => {
    setUser(null)
    showToast('Logged out')
    navigate('/')
  }

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Maison.</Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        {user && <Link to="/wishlist" className="nav-link">Wishlist</Link>}
        {user
          ? <button className="nav-link nav-btn-text" onClick={logout}>Log out ({user.name})</button>
          : <Link to="/login" className="nav-link">Log in</Link>
        }
      </div>
      <Link to="/cart" className="nav-cart">
        🛒 Cart
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </Link>
    </nav>
  )
}