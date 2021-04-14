// eslint-disable-next-line functional/immutable-data
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // nobody like @/components when @components is available
  // https://stackoverflow.com/questions/50748152/jest-cannot-locate-babel-code-frame-when-trying-to-use-alias
  moduleNameMapper: {
    '^@assets(.*?)$': '<rootDir>/src/assets/$1',
    '^@components(.*?)$': '<rootDir>/src/components/$1',
    '^@constants(.*?)$': '<rootDir>/src/constants/$1',
    '^@data(.*?)$': '<rootDir>/src/data/$1',
    '^@hooks(.*?)$': '<rootDir>/src/hooks/$1',
    '^@interface(.*?)$': '<rootDir>/src/interface/$1',
    '^@pages(.*?)$': '<rootDir>/src/pages/$1',
    '^@utils(.*?)$': '<rootDir>/src/utils/$1',
  },
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
}
