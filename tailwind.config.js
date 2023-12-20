/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-custom': '2px 4px 10px 0px #CBCBCB33 inset',
        'box-work': '0px 10.988372802734375px 36.627906799316406px 0.9156976938247681px rgba(28, 25, 23, 0.13)',
      },
      
      fontWeight: {
        normal: '400',
        semibold: '600',
        extrabold: '900',
        bold: '700',
      },
      
    },
  },
  plugins: [],
}

