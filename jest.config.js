// eslint-disable-next-line functional/immutable-data
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  // nobody like @/components when @components is available
  // https://stackoverflow.com/questions/50748152/jest-cannot-locate-babel-code-frame-when-trying-to-use-alias
  moduleNameMapper: {
    '\\.(png|jpg|css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(svg)$': '<rootDir>/src/__mocks__/svgrMock.ts',
    '^@assets(.*?)$': '<rootDir>/src/assets/$1',
    '^@components(.*?)$': '<rootDir>/src/components/$1',
    '^@constants(.*?)$': '<rootDir>/src/constants/$1',
    '^@api(.*?)$': '<rootDir>/src/api/$1',
    '^@hooks(.*?)$': '<rootDir>/src/hooks/$1',
    '^@interface(.*?)$': '<rootDir>/src/interface/$1',
    '^@locales(.*?)$': '<rootDir>/src/locales/$1',
    '^@pages(.*?)$': '<rootDir>/src/pages/$1',
    '^@styles(.*?)$': '<rootDir>/src/styles/$1',
    '^@utils(.*?)$': '<rootDir>/src/utils/$1',
  },
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', 'src/interface/', 'src/assets/', 'src/__mocks__'],
}
