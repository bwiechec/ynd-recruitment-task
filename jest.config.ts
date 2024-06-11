module.exports = {
    transform: {
      "^.+\\.(ts|tsx)?$": "ts-jest",
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    setupFilesAfterEnv: ["./src/tests/setupTests.ts"],
    testEnvironment: "jsdom",
    collectCoverageFrom: ["./src/**/**.(js|ts|tsx)"],
    globals: {
      "ts-jest": {
        tsconfig: {
          jsx: "react-jsx",
        },
      },
    },
  };