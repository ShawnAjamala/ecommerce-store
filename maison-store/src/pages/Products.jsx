// import { useEffect, useState } from 'react'
// import ProductCard from '../components/ProductCard'
// import SearchFilter from '../components/SearchFilter'
// import { useApp } from '../context/AppContext'

// export default function Products() {
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const { filters } = useApp()

//   useEffect(() => {
//     fetch('https://dummyjson.com/products?limit=100')
//       .then(r => { if (!r.ok) throw new Error('Failed to load'); return r.json() })
//       .then(data => { setProducts(data.products); setLoading(false) })
//       .catch(err => { setError(err.message); setLoading(false) })
//   }, [])

//   const categories = [...new Set(products.map(p => p.category))]

//   const filtered = products.filter(p => {
//     const matchSearch = p.title.toLowerCase().includes(filters.search.toLowerCase())
//     const matchCat = !filters.category || p.category === filters.category
//     return matchSearch && matchCat
//   })

//   return (
//     <div className="page">
//       <div className="section-title">All Products</div>
//       <div className="section-sub">{filtered.length} item{filtered.length !== 1 ? 's' : ''} found</div>
//       <SearchFilter categories={categories} />
//       {loading && <div className="loading">Loading products…</div>}
//       {error && <div className="error-msg">Error: {error}</div>}
//       {!loading && !error && (
//         <div className="product-grid">
//           {filtered.map(p => <ProductCard key={p.id} product={p} />)}
//         </div>
//       )}
//     </div>
//   )
// }