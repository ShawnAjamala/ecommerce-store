# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Maison — React E-Commerce Store

A full-featured e-commerce web application built with React, React Router, and Context API. Browse products, search and filter by category, manage a cart and wishlist, and complete purchases through a protected checkout flow.

---

## Live Demo

[View Live Site](https://your-deployment-url.vercel.app)

---

## Features

- Browse 100+ products fetched from the DummyJSON API
- Search products by name and filter by category
- Product detail pages with nested tabs (Overview, Reviews, Specifications)
- Related products on each product detail page
- Add to cart with quantity controls and running total
- Wishlist — save and remove products with a heart toggle
- Login and Register forms with full input validation
- Protected checkout page — redirects unauthenticated users to login
- Checkout form with shipping and payment fields
- Toast notifications for cart, wishlist, and auth actions
- Fully responsive layout across desktop, tablet, and mobile

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI library |
| React Router v6 | Client-side routing |
| Context API | Global state management |
| DummyJSON API | Product data source |
| Vite | Build tool and dev server |

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### Installation
```bash
git clone https://github.com/YOUR_USERNAME/maison-store.git
cd maison-store
npm install
npm run dev
```

The app runs at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

---

## API

Uses the [DummyJSON](https://dummyjson.com) free REST API — no API key required.

---

## Author

**Your Name**
GitHub: [@your-username](https://github.com/your-username)

---

## License

MIT