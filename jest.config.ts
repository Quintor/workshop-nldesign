export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': '<rootDir>__mocks__/styleMocks.js'
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
}
