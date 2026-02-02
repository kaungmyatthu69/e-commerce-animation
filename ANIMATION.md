# Animation & Motion Design System

This document outlines the animation philosophy, patterns, and technical implementation details for the E-Commerce project. We aim for a **"Premium, Fluid, and Responsive"** feel, characteristic of high-end digital boutiques.

## 🛠 Tech Stack

- **Engine:** [Framer Motion](https://www.framer.com/motion/) (v12+) - Handles complex physics, gestures, and layout transitions.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Handles basic state transitions (colors, opacity) and layout.
- **Icons:** [Lucide React](https://lucide.dev/) - SVG icons optimized for React.

---

## 🎨 Global Effects

These animations are always present to ensure a cohesive experience across the application.

### 1. Fluid Blender Cursor (`CustomCursor.tsx`)
A custom pointer replacing the default system mouse to add weight and contrast.

- **Physics:** Uses `useSpring` (Stiffness: 400, Damping: 25) for a "heavy", liquid feel.
- **Blending:** Uses `mix-blend-difference` CSS to invert colors based on the background (White on Black, Black on White).
- **Interactions:** Scales up (4x) when hovering over interactive elements (`<a>`, `<button>`, `<input>`).

### 2. Page Transitions (`template.tsx`)
Every route change triggers a subtle entry animation to soften navigation.

- **Effect:** Fade In + Slide Up (`y: 20` → `y: 0`).
- **Implementation:** Next.js `template.tsx` file wraps every page automatically.

### 3. Navigation (`Navbar.tsx`)
- **Active State:** A "pill" background moves to the active link using `layoutId`.
- **Hover State:** A subtle background follows the mouse cursor between links.

---

## 🧩 Reusable Animation Components

We have built specific components to abstract complex logic.

### `ParallaxScroll.tsx`
Creates a depth effect by moving elements at different speeds relative to the window scroll.
- **Props:** `offset` (number). Positive values move slower than scroll, negative values move faster (or inverse direction).
- **Usage:** Used in the **Contact Page** for the floating Map and Info cards.

### `VelocityText.tsx`
A marquee text strip that changes speed based on how fast the user scrolls.
- **Tech:** Uses `useVelocity` and `useScroll` hooks.
- **Physics:** Calculates a delta to accelerate the scrolling text (`x` position) dynamically.
- **Usage:** Used in the **About Page** ("STYLE REDEFINED").

---

## 📍 Page-Specific Patterns

### Landing Page (`/`)
1.  **Hero Section:**
    - **Staggered Entry:** Text elements appear one by one (`delay: 0.2`, `delay: 0.4`).
    - **Background Blob:** An ambient light blob scales and pulses infinitely to add life to the static background.
2.  **Categories:**
    - **Masonry Reveal:** Cards scale up from `0.95` to `1` as they enter the viewport.
    - **Hover:** Gradient overlays fade in, and images zoom slightly.
3.  **Trending:**
    - **Infinite Marquee:** A linear loop of text scrolling horizontally.

### About Page (`/about`)
1.  **Velocity Scroll:** Text reacts to user interaction.
2.  **Team Grid:**
    - **Grayscale to Color:** Images start black & white and gain color on hover.
    - **Zoom:** Subtle scale effect on focus.

### Contact Page (`/contact`)
1.  **Curtain Reveal:**
    - **Technique:** The top section (Form) has a huge bottom margin (`mb-[60vh]`) and `z-index: 10`. The bottom section (Map) is `fixed` at `z-index: 0`.
    - **Result:** As you scroll, the top section "lifts up" like a curtain to reveal the map underneath.
2.  **Floating Cards:** The contact info cards float over the map using `ParallaxScroll`.

---

## 🛒 Shop & Cart Logic

### Cart Drawer (`CartSidebar.tsx`)
- **AnimatePresence:** Used to animate the drawer *mounting* and *unmounting* from the DOM.
- **Transition:** Slide from right (`x: "100%"` → `x: 0`) with a spring bounce.
- **Backdrop:** Fades in (`opacity: 0` → `1`) to focus attention.

### Product Grid
- **Staggered Children:** The product list uses `staggerChildren: 0.1` so items populate the grid in a wave-like sequence rather than appearing all at once.

---

## ⚡ Performance Best Practices

To ensure 60fps animations:

1.  **Use `transform` & `opacity`:** We primarily animate `x`, `y`, `scale`, and `opacity`. These are handled by the GPU composite layer.
2.  **Avoid Layout Thrashing:** We do not animate `width`, `height`, or `margin` dynamically during scroll events (except for the specific curtain reveal which relies on static margin).
3.  **`will-change`:** Framer Motion handles `will-change` automatically for optimized properties.
4.  **Reduced Motion:** While not fully implemented yet, production apps should respect `prefers-reduced-motion` media queries by disabling springs and parallax effects for sensitive users.

```
