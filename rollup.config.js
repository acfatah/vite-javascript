import json from '@rollup/plugin-json'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/main.js',
    format: 'esm',
  },
  plugins: [json()],
}
