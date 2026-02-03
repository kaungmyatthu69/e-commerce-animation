# 🛍️ Modern E-Commerce Platform

A high-performance, animation-rich e-commerce storefront built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. This project demonstrates a production-grade architecture featuring hybrid state management, server actions, and optimistic UI updates.

## 🚀 Tech Stack

### Core Framework
- **[Next.js 15 (App Router)](https://nextjs.org/)**: The backbone of the application, utilizing Server Components and Server Actions.
- **[TypeScript](https://www.typescriptlang.org/)**: Strict static typing for robust code quality.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.

### State & Data Fetching
- **[Zustand](https://github.com/pmndrs/zustand)**: Lightweight, fast client-side state management (Cart, Auth Session).
- **[TanStack Query (React Query)](https://tanstack.com/query/latest)**: Powerful server state management for caching, synchronization, and data fetching.
- **[Axios](https://axios-http.com/)**: Promise-based HTTP client with interceptors for centralized error handling.

### UX & Animation
- **[Framer Motion](https://www.framer.com/motion/)**: Production-ready animation library for complex gestures and layout transitions.
- **[Lucide React](https://lucide.dev/)**: Beautiful, consistent SVG icons.

### Validation & Utilities
- **[Zod](https://zod.dev/)**: TypeScript-first schema declaration and validation.
- **[clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge)**: Utility for constructing `className` strings conditionally.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd e-commerce
pnpm install
```

### 2. Run Locally

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📐 Architecture & Key Decisions

This project follows a **Hybrid Architecture** maximizing the benefits of both Server and Client components.

### 1. State Management Strategy
We employ a clear separation of concerns for state:
- **Client UI State (Zustand):** Used for global, synchronous client interactions like the Shopping Cart and User Session. It persists data to `localStorage`.
- **Server State (React Query):** Used for fetching Products and Categories. It handles caching, loading states, and error retries efficiently.
- **URL State:** Search filters and sorting preferences are managed via local component state or URL search params (future enhancement) to ensure shareability.

### 2. Server Actions for Mutations
All data mutations (Login, Contact Form) utilize **Next.js Server Actions**. 
- **Security:** Sensitive logic stays on the server.
- **Progressive Enhancement:** Forms work even before hydration completes.
- **Type Safety:** `zod` validates all inputs on the server before processing.

### 3. Service Layer Pattern
Direct API calls are abstracted into a **Service Layer** (`src/services/api.ts`).
- **Benefits:** Decouples UI components from specific API implementation details. If the API endpoint changes, we only update one file.
- **Config:** A centralized `axiosConfig.ts` handles base URLs and response interceptors.

### 4. Component Modularity
The codebase adheres to the **Atomic Design** philosophy:
- **`components/ui`**: Reusable base elements (Buttons, Inputs).
- **`components/shop`**: Domain-specific components (ProductCard, ShopFilters).
- **`app/`**: Page composition layers that orchestrate components.

---

## 📂 Project Structure

```
src/
├── actions/        # Server Actions (Mutations)
├── app/            # Next.js App Router Pages
├── components/     # React Components
│   ├── shop/       # Shop-specific components
│   ├── contact/    # Contact page components
│   └── ...
├── constants/      # Static data and configuration
├── hooks/          # Custom React Hooks
├── providers/      # Context Providers (QueryClient)
├── services/       # API integration logic
├── store/          # Zustand stores (Auth, Cart)
└── types/          # TypeScript interfaces
```

## ⚡ Performance Optimization

- **Image Optimization:** All images use `next/image` for automatic format conversion (AVIF/WebP) and lazy loading.
- **Debouncing:** Search input is debounced (500ms) to reduce API call volume.
- **Selector Optimization:** Zustand components use granular selectors (`state => state.item`) to prevent unnecessary re-renders when unrelated state changes.
- **Skeleton Loading:** Skeleton screens prevent Cumulative Layout Shift (CLS) during data fetching.

---



## 📄 License

This project is open source and available under the [MIT License](LICENSE).