import { useApp } from '../context/AppContext'
import './SearchFilter.css'

export default function SearchFilter({ categories }) {
  const { filters, setFilters } = useApp()

  return (
    <div className="search-bar">
      <input
        className="search-input"
        placeholder="Search products..."
        value={filters.search}
        onChange={e => setFilters(f => ({ ...f, search: e.target.value }))}
      />
      <select
        className="category-select"
        value={filters.category}
        onChange={e => setFilters(f => ({ ...f, category: e.target.value }))}
      >
        <option value="">All Categories</option>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
    </div>
  )
}