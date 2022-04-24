module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      width: {
        halfFull: '48%',
      },
      colors: {
        darkGrey: '#323232',
        supLightPink: '#FDEFF4',
        lightPink: '#FFC0D3',
        strongPink: '#FF5C8D',
      },
    },
  },
  plugins: [],
}
