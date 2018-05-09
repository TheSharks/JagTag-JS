// Jest config for coverage testing
module.exports = {
  collectCoverage: true,
  coverageDirectory: './coverage/',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/ramda.path.js',
    '<rootDir>/src/utils.js'
  ]
}
