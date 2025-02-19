/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  
  theme: {
    extend: {},
    colors: {
      'client-blue': {
        light: '#d4e4f7',
        dark: '#236ab9',
      },
      'client-brown': {
        light: '#fc7307',
        medium: '#b85b14',
        dark: '#341c09',
      },

      primary: '#007bff',
      secondary: '#6c757d',
      info: '#28a2b8',
      success: '#28a745',
      warning: '#ffc107',
      danger: '#dc3545',
      dark: '#343a40',
      light: '#f8f9fa',

    }
  },
  plugins: [],
}