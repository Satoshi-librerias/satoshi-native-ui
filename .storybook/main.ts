import type { StorybookConfig } from "@storybook/react-vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PROJECT_DIRECTORY = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const LIBRARY_SRC = path.join(
  PROJECT_DIRECTORY,
  "projects",
  "satoshi-native-ui",
  "src",
);
const LIBS_DIRECTORY = path.join(LIBRARY_SRC, "libs");
const COMPONENTS_DIRECTORY = path.join(LIBRARY_SRC, "components");
const TEST_DIRECTORY = path.join(
  PROJECT_DIRECTORY,
  "projects",
  "satoshi-native-ui",
  "test",
);

/**
 * @description Plugin de Tailwind para PostCSS en linea.
 * @author Steveen Cues
 * @version 1.1.0
 */
const tailwindcssPlugin = require("tailwindcss")({});

/**
 * @description Aliases oficiales sincronizados con tsconfig.base.json.
 * Vite resuelve los aliases en orden, por lo que los patrones con regex
 * van primero y los literales al final.
 * @author Steveen Cues
 * @version 1.1.0
 */
const ALIASES = [
  { find: /^@libs$/, replacement: path.join(LIBS_DIRECTORY, "index.ts") },
  { find: /^@libs\/(.*)$/, replacement: path.join(LIBS_DIRECTORY, "$1") },
  {
    find: /^@components$/,
    replacement: path.join(COMPONENTS_DIRECTORY, "index.ts"),
  },
  {
    find: /^@components\/(.*)$/,
    replacement: path.join(COMPONENTS_DIRECTORY, "$1"),
  },
  { find: /^@test\/(.*)$/, replacement: path.join(TEST_DIRECTORY, "$1") },
  {
    find: /^@assets\/(.*)$/,
    replacement: path.join(LIBRARY_SRC, "assets", "$1"),
  },
  { find: /^@\/(.*)$/, replacement: path.join(LIBRARY_SRC, "$1") },
  // react-native-svg usa fabric/codegen exclusivo de nativo; en web se
  // sustituye por un mock de contenedores.
  {
    find: /^react-native-svg$/,
    replacement: path.join(
      PROJECT_DIRECTORY,
      "stories",
      "mocks",
      "react-native-svg.mock.tsx",
    ),
  },
  // React Native 0.81 usa sintaxis Flow en su entry; Storybook web debe
  // resolver siempre react-native-web.
  { find: /^react-native$/, replacement: "react-native-web" },
  // Los componentes codegen de librerias nativas (safe-area-context, svg)
  // no existen en web; el factory se sustituye por un mock de View.
  {
    find: /^react-native\/Libraries\/Utilities\/codegenNativeComponent$/,
    replacement: path.join(
      PROJECT_DIRECTORY,
      "stories",
      "mocks",
      "codegen-native-component.mock.tsx",
    ),
  },
  // Las subrutas internas de react-native que piden librerias nativas se
  // redirigen a los equivalentes de react-native-web.
  {
    find: /^react-native\/Libraries\/(.*)$/,
    replacement: "react-native-web/dist/vendor/react-native/Libraries/$1",
  },
  {
    find: /^react-native\/src\/(.*)$/,
    replacement: "react-native-web/dist/vendor/react-native/src/$1",
  },
];

/**
 * @description Configuracion de Storybook para visualizar la libreria
 * multiplataforma en web mediante react-native-web.
 * @author Steveen Cues
 * @version 1.0.0
 */
const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(ts|tsx)"],

  addons: ["@storybook/addon-essentials"],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  async viteFinal(config) {
    const currentAlias = config.resolve?.alias ?? {};
    const baseAliases = Array.isArray(currentAlias)
      ? currentAlias
      : Object.entries(currentAlias).map(([find, replacement]) => ({
          find,
          replacement,
        }));

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: [...baseAliases, ...ALIASES],
      },
      css: {
        postcss: {
          plugins: [tailwindcssPlugin],
        },
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        // nativewind y css-interop deben compartir el mismo pre-bundle de
        // react-native-web que consume la libreria para que cssInterop
        // registre los primitivos correctos.
        include: [
          "react-native-web",
          "nativewind",
          "nativewind/node_modules/react-native-css-interop",
        ],
        esbuildOptions: {
          loader: { ".js": "jsx" },
        },
        // react-native 0.81 usa sintaxis Flow que esbuild no puede
        // pre-bundlear; se excluye para que Vite lo resuelva en runtime
        // a traves del alias hacia react-native-web.
        exclude: ["react-native", "react-native-svg"],
      },
      define: {
        ...config.define,
        "process.env.EXPO_PUBLIC_USE_NATIVE": JSON.stringify("false"),
        __DEV__: JSON.stringify(true),
      },
    };
  },
};

export default config;
