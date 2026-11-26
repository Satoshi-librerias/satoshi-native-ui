/**
 * @description Configuracion de Jest para la libreria multiplataforma.
 * Usa el preset oficial de React Native con entorno jsdom y React Native
 * Testing Library para validar los componentes compartidos.
 * @author Steveen Cues
 * @version 1.1.0
 */
module.exports = {
  preset: "react-native",
  testEnvironment: "jsdom",
  setupFiles: ["./projects/satoshi-native-ui/test/setup/setup.ts"],
  setupFilesAfterEnv: ["./projects/satoshi-native-ui/test/setup/after-env.ts"],
  roots: ["<rootDir>/projects/satoshi-native-ui/test"],
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  moduleNameMapper: {
    "^react-native-svg$":
      "<rootDir>/projects/satoshi-native-ui/test/mocks/react-native-svg.mock.cjs",
    "^react-native-paper$":
      "<rootDir>/projects/satoshi-native-ui/test/mocks/react-native-paper.mock.cjs",
    // La copia de react-native anidada en nativewind usa sintaxis Flow que
    // el preset de RN no transforma; se resuelve siempre a la raiz.
    "^react-native$": "<rootDir>/node_modules/react-native",
    "^@libs$": "<rootDir>/projects/satoshi-native-ui/src/libs/index.ts",
    "^@libs/(.*)$": "<rootDir>/projects/satoshi-native-ui/src/libs/$1",
    "^@components$":
      "<rootDir>/projects/satoshi-native-ui/src/components/index.ts",
    "^@components/(.*)$":
      "<rootDir>/projects/satoshi-native-ui/src/components/$1",
    "^@test/(.*)$": "<rootDir>/projects/satoshi-native-ui/test/$1",
    "^@assets/(.*)$": "<rootDir>/projects/satoshi-native-ui/src/assets/$1",
    "^@/(.*)$": "<rootDir>/projects/satoshi-native-ui/src/$1",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native(-community)?|react-native-css-interop|nativewind|react-native-paper|react-native-svg)",
  ],
  collectCoverageFrom: [
    "projects/satoshi-native-ui/src/**/*.{ts,tsx}",
    "!**/index.ts",
    "!**/*.d.ts",
  ],
  coverageDirectory: "coverage",
  clearMocks: true,
};
