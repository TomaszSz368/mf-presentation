/* eslint-disable import/no-anonymous-default-export */
export default {
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            jsx: true,
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  coveragePathIgnorePatterns: ['/node_modules/', '/testing/'],
  clearMocks: true,
  collectCoverage: false,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^~src/(.*)$': '<rootDir>/src/$1',
    '^~root/(.*)$': '<rootDir>/$1',
    '\\.(css|less)$': '<rootDir>/src/testing/style-mock.js',
  },
};
