// import { useState } from 'react'
// import { useApp } from '../context/AppContext'
// import './Checkout.css'

// export default function Checkout() {
//   const { cart, cartTotal, clearCart, showToast } = useApp()
//   const [form, setForm] = useState({ address: '', city: '', card: '', expiry: '', cvv: '' })
//   const [errors, setErrors] = useState({})
//   const [submitted, setSubmitted] = useState(false)

//   const validate = () => {
//     const e = {}
//     if (!form.address) e.address = 'Address is required'
//     if (!form.city) e.city = 'City is required'
//     if (!form.card || form.card.replace(/\s/g, '').length < 16) e.card = 'Valid 16-digit card number required'
//     if (!form.expiry) e.expiry = 'Expiry date required'
//     if (!form.cvv || form.cvv.length < 3) e.cvv = 'CVV required'
//     return e
//   }

//   const handleOrder = () => {
//     const e = validate()
//     if (Object.keys(e).length > 0) { setErrors(e); return }
//     clearCart()
//     setSubmitted(true)
//     showToast('Order placed successfully!')
//   }

//   const update = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

//   if (submitted) return (
//     <div className="page">
//       <div className="order-success">
//         <div className="success-icon">✅</div>
//         <h2>Order Confirmed!</h2>
//         <p>Your order has been placed and is on its way.</p>
//         <a href="/" className="btn-primary" style={{ display: 'inline-block', marginTop: '1rem', padding: '12px 28px', borderRadius: 8, color: '#fff', background: 'var(--accent)', fontWeight: 500 }}>Continue Shopping</a>
//       </div>
//     </div>
//   )

//   return (
//     <div className="page">
//       <div className="section-title">Checkout</div>
//       <div className="section-sub">Complete your order</div>
//       <div className="checkout-layout">
//         <div>
//           <h3 className="checkout-section-heading">Shipping Details</h3>
//           <div className="form-group">
//             <label className="form-label">Street Address</label>
//             <input className="form-input" placeholder="123 Main St" value={form.address} onChange={update('address')} />
//             {errors.address && <div className="form-error">{errors.address}</div>}
//           </div>
//           <div className="form-group">
//             <label className="form-label">City</label>
//             <input className="form-input" placeholder="Nairobi" value={form.city} onChange={update('city')} />
//             {errors.city && <div className="form-error">{errors.city}</div>}
//           </div>

//           <h3 className="checkout-section-heading" style={{ marginTop: '1.5rem' }}>Payment</h3>
//           <div className="form-group">
//             <label className="form-label">Card Number</label>
//             <input className="form-input" placeholder="4242 4242 4242 4242" value={form.card} onChange={update('card')} maxLength={19} />
//             {errors.card && <div className="form-error">{errors.card}</div>}
//           </div>
//           <div className="two-col">
//             <div className="form-group">
//               <label className="form-label">Expiry</label>
//               <input className="form-input" placeholder="MM/YY" value={form.expiry} onChange={update('expiry')} maxLength={5} />
//               {errors.expiry && <div className="form-error">{errors.expiry}</div>}
//             </div>
//             <div className="form-group">
//               <label className="form-label">CVV</label>
//               <input className="form-input" placeholder="123" value={form.cvv} onChange={update('cvv')} maxLength={4} />
//               {errors.cvv && <div className="form-error">{errors.cvv}</div>}
//             </div>
//           </div>
//         </div>

//         <div>
//           <h3 className="checkout-section-heading">Order Summary</h3>
//           <div className="order-summary-box">
//             {cart.map(item => (
//               <div key={item.id} className="order-summary-item">
//                 <span>{item.title.slice(0, 30)}… ×{item.qty}</span>
//                 <span>${(item.price * item.qty).toFixed(2)}</span>
//               </div>
//             ))}
//             <div className="order-summary-total">
//               <span>Total</span>
//               <span>${cartTotal.toFixed(2)}</span>
//             </div>
//             <button className="btn-primary btn-full" onClick={handleOrder}>Place Order</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }