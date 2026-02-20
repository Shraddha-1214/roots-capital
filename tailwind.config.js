/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,JSDoc}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      // Update your tailwind.config.js
colors: {
  // ... in your colors object
wealth: {
  navy: '#020617',        // Deeper, "Midnight" Navy
  gold: '#D4AF37',        // Keep your Metallic Gold
  charcoal: '#0F172A',    // Deep secondary Navy
  light: '#F8FAFC',       // Keep for high-contrast text
  slate: '#1E293B',       // Mid-tone for borders/lines
}
}
    },
  },
  plugins: [],
};