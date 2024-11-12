// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    // Importante: prefixar as classes do Tailwind para evitar conflitos
    prefix: 'de-',  // 'de' de 'design editor'
  }