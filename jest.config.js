const svgrWebpack = require('@svgr/webpack');

module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^fm3/(.*)$': '<rootDir>/src/$1',
    '\\.css$': '<rootDir>/empty-module.js',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!leaflet)/',
    '/^src\\/styles\\/leaflet\\.css$/',
  ],
};
