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
        tempColor: '#FF5F6D',
        coColor: '#0083B0',
        no2Color: '#11998e',
        ch4Color: '#BB377D',
        dust: '#649173',
      },
    },
  },
  plugins: [],
}
