export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
        // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
        '\\.(png|svg)': '<rootDir>/src/shared/ui/icon',
        '\\.(gif|ttf|eot)$': '<rootDir>/test/__ mocks __/fileMock.js',
        '\\.(css|scss)$': 'identity-obj-proxy',
        '^src(.*)': '<rootDir>/src/$1'
    }
};
