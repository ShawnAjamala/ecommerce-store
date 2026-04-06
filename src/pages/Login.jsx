import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import './Login.css'

export default function Login() {
  const { setUser, showToast } = useApp()
  const navigate = useNavigate()
  const [isRegister, setIsRegister] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (isRegister && !form.name) e.name = 'Name is required'
    if (!form.email) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address'
    if (!form.password) e.password = 'Password is required'
    else if (form.password.length < 6) e.password = 'Minimum 6 characters'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    const name = isRegister ? form.name : form.email.split('@')[0]
    setUser({ email: form.email, name })
    showToast(`Welcome, ${name}!`)
    navigate('/')
  }

  const update = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  return (
    <div className="page">
      <div className="auth-card">
        <h2 className="auth-title">{isRegister ? 'Create account' : 'Welcome back'}</h2>
        <p className="auth-sub">{isRegister ? 'Sign up to start shopping.' : 'Log in to access your account.'}</p>

        {isRegister && (
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input className="form-input" placeholder="Jane Doe" value={form.name} onChange={update('name')} />
            {errors.name && <div className="form-error">{errors.name}</div>}
          </div>
        )}
        <div className="form-group">
          <label className="form-label">Email</label>
          <input className="form-input" type="email" placeholder="you@example.com" value={form.email} onChange={update('email')} />
          {errors.email && <div className="form-error">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input className="form-input" type="password" placeholder="Min. 6 characters" value={form.password} onChange={update('password')} />
          {errors.password && <div className="form-error">{errors.password}</div>}
        </div>

        <button className="btn-primary btn-full" onClick={handleSubmit}>
          {isRegister ? 'Sign Up' : 'Log In'}
        </button>
        <div className="toggle-auth">
          {isRegister ? 'Have an account? ' : "Don't have an account? "}
          <span onClick={() => { setIsRegister(!isRegister); setErrors({}) }}>
            {isRegister ? 'Log in' : 'Sign up'}
          </span>
        </div>
      </div>
    </div>
  )
}