import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useApp()
  const navigate = useNavigate()
  const wished = wishlist.find(i => i.id === product.id)

  return (
    <div className="product-card" onClick={() => navigate(`/products/${product.id}`)}>
      <div className="product-img-wrap">
        {/* DummyJSON uses 'thumbnail' instead of 'image' */}
        <img src={product.thumbnail} alt={product.title} />
        <button
          className="wishlist-btn"
          style={{ color: wished ? '#e74c3c' : '#aaa' }}
          onClick={e => { e.stopPropagation(); toggleWishlist(product) }}
        >
          {wished ? '♥' : '♡'}
        </button>
      </div>
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <div className="product-title">{product.title}</div>
        <div className="product-rating">
          {'★'.repeat(Math.round(product.rating || 4))} ({product.stock || 0} in stock)
        </div>
        <div className="product-price">${product.price?.toFixed(2)}</div>
        <button
          className="btn-secondary btn-full"
          onClick={e => { e.stopPropagation(); addToCart(product) }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}