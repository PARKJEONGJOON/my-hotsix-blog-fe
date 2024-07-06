module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],  
    theme: {
      extend: {
        colors: {
          darkblue: '#001354',
          skyblue: '#D4E8FF',
        },
        width: {
          signupInput: '25rem',
        },
        maxWidth: {
          'pc': '1440px',
          'mobile': '767px',
        },
        fontFamily: {
          'sans': ['MangoDdobak', 'Arial', 'sans-serif'],
        },
        fontSize: {
          large: '46px',
          regular: '24px'
        }
      },
    },
    plugins: [],
  }