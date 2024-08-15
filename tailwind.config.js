/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        scissorsGradient:'hsl(39, 89%, 49%)',
        toScissorsGradient:'hsl(40, 84%, 53%)',
        paperGradient:'hsl(230, 89%, 62%)',
        toPaperGradient:'hsl(230, 89%, 65%)',
        rockGradient:'hsl(349, 71%, 52%)',
        toRockGradient:'hsl(349, 70%, 56%)',
        lizardGradient:'hsl(261, 73%, 60%)',
        toLizardGradient:'hsl(261, 72%, 63%)',
        cyan:'hsl(189, 59%, 53%)',
        toCyan:'hsl(189, 58%, 57%)',
        darkText:'hsl(229, 25%, 31%)',
        scoreText:'hsl(229, 64%, 46%)',
        headerOutline:'hsl(217, 16%, 45%)',
        radialGradient:'hsl(214, 47%, 23%)',
        toRadialGradient:'hsl(237, 49%, 15%)',
      },
      fontFamily:{
        'serif':['Nunito Sans']
      },
      borderWidth:{
        '12':'12px',
        '16':'16px',
        '18':'18px',
        '20':'20px',
      }
    },
  },
  plugins: [],
}

