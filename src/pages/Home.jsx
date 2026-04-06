// import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import ProductCard from '../components/ProductCard'
// import { useApp } from '../context/AppContext'
// import './Home.css'

// const CATEGORIES = ['smartphones', 'laptops', 'fragrances', 'furniture', 'tops', 'mens-shirts']

// export default function Home() {
//   const [featured, setFeatured] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const { setFilters } = useApp()
//   const navigate = useNavigate()

//   useEffect(() => {
//     fetch('https://dummyjson.com/products?limit=4')
//       .then(r => { if (!r.ok) throw new Error('Failed to fetch'); return r.json() })
//       .then(data => { setFeatured(data.products); setLoading(false) })
//       .catch(err => { setError(err.message); setLoading(false) })
//   }, [])

//   const goCategory = (cat) => {
//     setFilters(f => ({ ...f, category: cat }))
//     navigate('/products')
//   }

//   return (
//     <div className="page">
//       <div className="hero">
//         <h1>Discover<br />your style.</h1>
//         <p>Curated fashion, electronics, and more — delivered to your door.</p>
//         <button className="hero-btn" onClick={() => navigate('/products')}>Shop All Products</button>
//       </div>

//       <div style={{ marginBottom: '2rem' }}>
//         <div className="section-title" style={{ marginBottom: '0.75rem' }}>Shop by Category</div>
//         <div className="category-pills">
//           {CATEGORIES.map(cat => (
//             <button key={cat} className="category-pill" onClick={() => goCategory(cat)}>
//               {cat.charAt(0).toUpperCase() + cat.slice(1)}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="section-title">Featured Products</div>
//       <div className="section-sub">Handpicked for you</div>
//       {loading && <div className="loading">Loading featured products…</div>}
//       {error && <div className="error-msg">Error: {error}</div>}
//       {!loading && !error && (
//         <div className="product-grid">
//           {featured.map(p => <ProductCard key={p.id} product={p} />)}
//         </div>
//       )}
//     </div>
//   )
// }