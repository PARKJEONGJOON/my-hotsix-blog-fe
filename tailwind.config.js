module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {

      border: {
        darkblue: '#001354',
        skyblue: '#D4E8FF',
      },
       colors: {
        darkblue: '#001354',
        skyblue: '#D4E8FF',
        gray: '#BEBEBE',
      },
      width: {
        signupInput: '25rem',

        signupInput: '25rem',
        '250': '62.5rem',
        '186': '46.25rem'

      },
      maxWidth: {
        pc: '1440px',
        mobile: '767px',
      },
      fontFamily: {

         sans: ['MangoDdobak', 'Arial', 'sans-serif'],
        MangoBold: ['MangoBold'],
        MangoRegular: ['MangoRegular'],
        MangoLight: ['MangoLight'],
      },
      fontSize: {
        large: '2.875rem',
        regular: '1.5rem',
        small: '1.125rem',
      },
    },
  },
  plugins: [],
};
