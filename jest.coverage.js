// Jest config for coverage testing
module.exports = {
  collectCoverage: true,
  coverageDirectory: './coverage/',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  preset: 'ts-jest',
  testEnvironment: 'node'
}
