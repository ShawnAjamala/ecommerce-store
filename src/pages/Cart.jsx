import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import './Cart.css'

export default function Cart() {
  const { cart, cartTotal, updateQty, removeFromCart, user } = useApp()
  const navigate = useNavigate()

  if (cart.length === 0) return (
    <div className="page">
      <div className="cart-empty">
        <div className="cart-empty-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Add some products to get started.</p>
        <button className="btn-primary" style={{ marginTop: '1.5rem' }} onClick={() => navigate('/products')}>Shop Now</button>
      </div>
    </div>
  )

  return (
    <div className="page">
      <div className="section-title">Your Cart</div>
      <div className="section-sub">{cart.length} item{cart.length !== 1 ? 's' : ''}</div>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img className="cart-item-img" src={item.image} alt={item.title} />
          <div className="cart-item-info">
            <div className="cart-item-title">{item.title}</div>
            <div className="cart-item-price">${(item.price * item.qty).toFixed(2)}</div>
            <div className="qty-controls">
              <button className="qty-btn" onClick={() => updateQty(item.id, -1)}>−</button>
              <span className="qty-value">{item.qty}</span>
              <button className="qty-btn" onClick={() => updateQty(item.id, 1)}>+</button>
            </div>
          </div>
          <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <div className="cart-summary">
        <div className="cart-total"><span>Total</span><span>${cartTotal.toFixed(2)}</span></div>
        <button
          className="btn-primary btn-full"
          onClick={() => user ? navigate('/checkout') : navigate('/login')}
        >
          {user ? 'Proceed to Checkout' : 'Log in to Checkout'}
        </button>
      </div>
    </div>
  )
} 