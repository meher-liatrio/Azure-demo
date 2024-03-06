// vite.config.js
export default ({ mode }) => {
  if (mode === 'production') {
    return {
      base: '/dist/',
      // other production configurations...
    }
  } else {
    return {
      // local configurations...
    }
  }
}
