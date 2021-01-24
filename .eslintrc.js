module.exports = {
  parser: '@typescript-eslint/parser',
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: [
    'eslint-plugin-tsdoc'
  ],
  rules: {
    'tsdoc/syntax': 'warn',
    '@typescript-eslint/strict-boolean-expressions': ['error', {
      allowNullableObject: true,
      allowNullableString: true
    }]
  }
}
