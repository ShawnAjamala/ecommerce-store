import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { useApp } from '../context/AppContext'

export default function Wishlist() {
  const { wishlist } = useApp()
  const navigate = useNavigate()

  if (wishlist.length === 0) return (
    <div className="page">
      <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--muted)' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>♡</div>
        <h2 style={{ fontFamily: 'var(--ff-display)', marginBottom: '0.5rem', color: 'var(--text)' }}>Wishlist is empty</h2>
        <p>Heart a product to save it here.</p>
        <button className="btn-primary" style={{ marginTop: '1.5rem' }} onClick={() => navigate('/products')}>Browse Products</button>
      </div>
    </div>
  )

  return (
    <div className="page">
      <div className="section-title">Wishlist</div>
      <div className="section-sub">{wishlist.length} saved item{wishlist.length !== 1 ? 's' : ''}</div>
      <div className="product-grid">
        {wishlist.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}