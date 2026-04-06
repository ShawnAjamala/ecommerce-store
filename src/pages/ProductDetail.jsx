import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { useApp } from '../context/AppContext'
import './ProductDetail.css'

const TABS = ['overview', 'reviews', 'specifications']

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useApp()
  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState('overview')

  useEffect(() => {
    setLoading(true)
    setTab('overview')
    fetch(`https://dummyjson.com/products/${id}`)
      .then(r => r.json())
      .then(prod => {
        setProduct(prod)
        // fetch related by same category
        return fetch(`https://dummyjson.com/products/category/${prod.category}?limit=5`)
          .then(r => r.json())
          .then(data => {
            setRelated(data.products.filter(p => p.id !== prod.id).slice(0, 4))
            setLoading(false)
          })
      })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) return <div className="loading">Loading product…</div>
  if (!product) return <div className="error-msg">Product not found.</div>

  const ratingRounded = Math.round(product.rating || 4)
  const stars = '★'.repeat(ratingRounded) + '☆'.repeat(5 - ratingRounded)

  return (
    <div className="page">
      <button className="detail-back" onClick={() => navigate('/products')}>← Back to Products</button>
      <div className="detail-layout">
        <div className="detail-img-wrap">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="detail-info">
          <div className="product-category">{product.category}</div>
          <h1 className="detail-title">{product.title}</h1>
          <div className="star-row">
            <span style={{ color: '#e6a817' }}>{stars}</span>
            <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
              {product.rating} · {product.stock} in stock
            </span>
          </div>
          {product.discountPercentage > 0 && (
            <div style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <span style={{ textDecoration: 'line-through', marginRight: 8 }}>
                ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
              </span>
              <span style={{ color: '#2d6a4f', fontWeight: 600 }}>
                {product.discountPercentage}% off
              </span>
            </div>
          )}
          <div className="detail-price">${product.price?.toFixed(2)}</div>

          {/* Nested tabs */}
          <div className="detail-tabs">
            {TABS.map(t => (
              <button
                key={t}
                className={`detail-tab${tab === t ? ' active' : ''}`}
                onClick={() => setTab(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
          <div className="detail-tab-content">
            {tab === 'overview' && <p>{product.description}</p>}
            {tab === 'reviews' && (
              <p>
                {stars} — Rated {product.rating}/5 by our customers.
                Brand: <strong>{product.brand}</strong>.
                This product has received consistently positive feedback for quality and value.
              </p>
            )}
            {tab === 'specifications' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <p><strong>Brand:</strong> {product.brand}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>SKU:</strong> {product.sku || `SKU-${product.id}`}</p>
                <p><strong>Stock:</strong> {product.stock} units available</p>
                <p><strong>Rating:</strong> {product.rating} / 5</p>
                <p><strong>Discount:</strong> {product.discountPercentage}% off</p>
              </div>
            )}
          </div>
          <button className="btn-primary btn-full" onClick={() => addToCart(product)}>
            Add to Cart — ${product.price?.toFixed(2)}
          </button>
        </div>
      </div>

      {related.length > 0 && (
        <div className="related-section">
          <h3 className="section-title" style={{ fontSize: '1.2rem' }}>You might also like</h3>
          <div className="product-grid" style={{ marginTop: '1rem' }}>
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </div>
  )
}