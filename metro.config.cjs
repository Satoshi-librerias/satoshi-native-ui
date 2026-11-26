/**
 * @description Configuracion de Metro para consumir la libreria en una
 * aplicacion React Native. Resuelve los aliases oficiales del proyecto.
 * @author Steveen Cues
 * @version 1.0.0
 */
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const path = require("path");

const PROJECT_ROOT = path.resolve(__dirname);
const LIBRARY_ROOT = path.join(
  PROJECT_ROOT,
  "projects",
  "satoshi-native-ui",
  "src",
);

/**
 * @description Aliases oficiales sincronizados con tsconfig.base.json.
 */
const ALIASES = {
  "@libs": path.join(LIBRARY_ROOT, "libs", "index.ts"),
  "@components": path.join(LIBRARY_ROOT, "components", "index.ts"),
};

/**
 * @description Configuracion base con watchFolders para monorepos.
 */
const defaultConfig = getDefaultConfig(PROJECT_ROOT);

const config = mergeConfig(defaultConfig, {
  watchFolders: [PROJECT_ROOT],
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (_target, name) => path.join(PROJECT_ROOT, "node_modules", name),
      },
    ),
    resolveRequest: (context, moduleName, platform) => {
      if (moduleName in ALIASES) {
        return context.resolveRequest(
          { ...context, resolveRequest: undefined },
          ALIASES[moduleName],
          platform,
        );
      }

      return context.resolveRequest(context, moduleName, platform);
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
});

module.exports = config;
