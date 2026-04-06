import { useNavigate } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <div className="footer-logo">Maison.</div>
          <p className="footer-tagline">Curated fashion, electronics, and jewellery — delivered to your door.</p>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">IG</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link">TW</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link">FB</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li onClick={() => navigate('/products')}>All Products</li>
            <li onClick={() => navigate('/products')}>New Arrivals</li>
            <li onClick={() => navigate('/products')}>Best Sellers</li>
            <li onClick={() => navigate('/cart')}>Your Cart</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Account</h4>
          <ul>
            <li onClick={() => navigate('/login')}>Log In</li>
            <li onClick={() => navigate('/login')}>Register</li>
            <li onClick={() => navigate('/wishlist')}>Wishlist</li>
            <li onClick={() => navigate('/checkout')}>Checkout</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li>FAQ</li>
            <li>Shipping Policy</li>
            <li>Returns & Exchanges</li>
            <li>Contact Us</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Maison. All rights reserved.</span>
        <span>Built with React + DummyJSON</span>
      </div>
    </footer>
  )
}