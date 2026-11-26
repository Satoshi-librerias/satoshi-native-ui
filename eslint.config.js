import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";
import jsdoc from "eslint-plugin-jsdoc";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "node:url";
import { defineConfig, globalIgnores } from "eslint/config";

const PROJECT_DIRECTORY = fileURLToPath(new URL(".", import.meta.url));

const SOURCE_FILES = ["projects/satoshi-native-ui/src/**/*.{ts,tsx}"];

const MAX_FILE_LINES = 500;
const MAX_FUNCTION_LINES = 100;
const MAX_CYCLOMATIC_COMPLEXITY = 8;
const MAX_NESTING_DEPTH = 3;
const MAX_NESTED_CALLBACKS = 3;
const MAX_FUNCTION_STATEMENTS = 15;
const MAX_FUNCTION_PARAMETERS = 4;

const DOCUMENTATION_ASCII_ONLY = "^[ -~\n\r\t]*$";

/**
 * @description Configures TypeScript, React, documentation and code quality.
 * @author Steveen Cues
 * @version 1.0.0
 */
export default defineConfig([
  globalIgnores([
    "dist/**",
    "coverage/**",
    "node_modules/**",
    "docs/**",
    "*.tsbuildinfo",
  ]),

  {
    files: SOURCE_FILES,

    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      reactHooks.configs.flat.recommended,
      eslintConfigPrettier,
    ],

    languageOptions: {
      globals: { ...globals.browser, ...globals.node },

      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: PROJECT_DIRECTORY,
      },
    },

    plugins: {
      jsdoc,
    },

    rules: {
      "no-console": [
        "error",
        {
          allow: ["warn", "error"],
        },
      ],

      "no-debugger": "error",
      "no-alert": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-constant-condition": "error",
      "no-unreachable": "error",
      "no-else-return": "error",
      "no-lonely-if": "error",
      "no-nested-ternary": "error",
      "no-unneeded-ternary": "error",
      "no-param-reassign": "error",

      complexity: ["error", MAX_CYCLOMATIC_COMPLEXITY],

      "max-depth": ["error", MAX_NESTING_DEPTH],

      "max-nested-callbacks": ["error", MAX_NESTED_CALLBACKS],

      "max-statements": ["error", MAX_FUNCTION_STATEMENTS],

      "max-params": ["error", MAX_FUNCTION_PARAMETERS],

      "max-lines": [
        "error",
        {
          max: MAX_FILE_LINES,
          skipBlankLines: false,
          skipComments: false,
        },
      ],

      "max-lines-per-function": [
        "error",
        {
          max: MAX_FUNCTION_LINES,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      "@typescript-eslint/no-explicit-any": "error",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      "@typescript-eslint/explicit-function-return-type": "error",

      "@typescript-eslint/explicit-module-boundary-types": "error",

      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],

      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],

      "@typescript-eslint/no-non-null-assertion": "error",

      "@typescript-eslint/no-floating-promises": "error",

      "@typescript-eslint/no-misused-promises": "error",

      "no-magic-numbers": "off",

      "@typescript-eslint/no-magic-numbers": [
        "error",
        {
          ignore: [-1, 0, 1],
          ignoreArrayIndexes: true,
          ignoreDefaultValues: false,
          enforceConst: true,
          detectObjects: true,
          ignoreEnums: false,
          ignoreNumericLiteralTypes: false,
          ignoreReadonlyClassProperties: false,
          ignoreTypeIndexes: true,
        },
      ],

      "jsdoc/require-jsdoc": [
        "error",
        {
          publicOnly: true,

          require: {
            ArrowFunctionExpression: true,
            ClassDeclaration: true,
            FunctionDeclaration: true,
            FunctionExpression: true,
            MethodDefinition: true,
          },

          contexts: ["TSInterfaceDeclaration", "TSTypeAliasDeclaration"],
        },
      ],

      "jsdoc/require-description": [
        "error",
        {
          descriptionStyle: "tag",
        },
      ],

      "jsdoc/require-param-description": "error",

      "jsdoc/require-returns-description": "error",

      "jsdoc/check-param-names": "error",

      "jsdoc/check-tag-names": "error",

      "jsdoc/match-description": [
        "error",
        {
          contexts: ["any"],
          matchDescription: DOCUMENTATION_ASCII_ONLY,

          tags: {
            description: true,
            summary: true,
            param: true,
            returns: true,
            throws: true,
            example: true,
            deprecated: true,
            remarks: true,
            see: true,
            todo: true,
          },

          message:
            "Write documentation in printable ASCII only, without accents, enes or special characters.",
        },
      ],
    },
  },

  {
    files: ["projects/satoshi-native-ui/test/**/*.{ts,tsx}"],

    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      eslintConfigPrettier,
    ],

    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.jest },

      parserOptions: {
        project: "./tsconfig.test.json",
        tsconfigRootDir: PROJECT_DIRECTORY,
      },
    },

    rules: {
      "@typescript-eslint/no-magic-numbers": "off",

      "@typescript-eslint/consistent-type-assertions": "off",

      "max-lines-per-function": "off",

      "max-statements": "off",
    },
  },

  {
    files: ["*.config.{js,cjs,mjs,ts}", "**/*.mock.cjs"],

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      eslintConfigPrettier,
    ],

    languageOptions: {
      globals: globals.node,
    },

    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
]);
