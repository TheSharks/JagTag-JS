module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'eslint-plugin-tsdoc'
  ],
  rules: {
    'tsdoc/syntax': 'warn'
  }
}
