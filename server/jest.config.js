module.exports = {
  collectCoverageFrom: ["<rootDir>/src/**.{js}", "!<rootDir>/node_modules/**"],
  coverageDirectory: "./coverage",
  moduleFileExtensions: ["js"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy"
  },
  setupTestFrameworkScriptFile: "<rootDir>/test/jest.setup.js",
  verbose: true
};
