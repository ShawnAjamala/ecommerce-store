// import { Routes, Route } from 'react-router-dom'
// import { AppProvider } from './context/AppContext'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'        // ← add this
// import ProtectedRoute from './components/ProtectedRoute'
// import Home from './pages/Home'
// import Products from './pages/Products'
// import ProductDetail from './pages/ProductDetail'
// import Cart from './pages/Cart'
// import Login from './pages/Login'
// import Checkout from './pages/Checkout'
// import Wishlist from './pages/Wishlist'

// export default function App() {
//   return (
//     <AppProvider>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:id" element={<ProductDetail />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/wishlist" element={<Wishlist />} />
//         <Route path="/checkout" element={
//           <ProtectedRoute>
//             <Checkout />
//           </ProtectedRoute>
//         } />
//       </Routes>
//       <Footer />                                {/* ← add this */}
//     </AppProvider>
//   )
// }