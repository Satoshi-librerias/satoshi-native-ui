# Copilot: reglas del repositorio

## Proposito de estas instrucciones

Reglas universales de trabajo y quirks del entorno. Lo especifico del proyecto
(stack, comandos, convenciones) va en las skills de `.github/skills/`.

## Idioma

- **Respuestas al usuario:** en el idioma de su ultimo mensaje.
- **Artefactos tecnicos** (codigo, comentarios, commits, logs): ASCII sin
  diacriticos. La UI del producto sigue la convencion del proyecto.

## Gotchas del entorno

- **Shell:** bash obligatoria (Git Bash en Windows, Bash en Linux); nunca CMD,
  PowerShell, `.bat`/`.cmd` ni sintaxis exclusiva de esas shells; si falla un
  comando, resuelvelo en Bash. Prioriza `npm` sobre `npm.cmd`. En Windows el
  binario de Git Bash esta en `C:\Program Files (x86)\Git\bin\bash.exe`; el
  `bash` del PATH es WSL, no Git Bash.
- **CRLF/LF:** respeta los finales de linea del repo (`.gitattributes`).
- **curl:** JSON entre comillas simples o `--data @archivo.json`.

## Politica de sesion y comunicacion

Sesiones cortas y enfocadas. Respuestas breves con evidencia; nunca marques algo
como verificado sin ejecucion real.

## Reglas de trabajo

1. Lee antes de escribir; cambios minimos y completos, sin refactorizaciones
   colaterales ni TODOs.
2. Valida siempre: compila, prueba o ejecuta el camino minimo de tu cambio.
3. Si algo no funciona, prueba una alternativa antes de declararlo imposible.

## Arquitectura (projects/satoshi-native-ui)

La libreria multiplataforma vive en `projects/satoshi-native-ui/src`:
`components/` (UI: atoms/molecules/organisms) y `libs/` (transversal sin JSX de
UI). Reglas completas en la skill `react-native-library-architecture`.

Resumen:

- **Paper-first**: react-native-paper es el nucleo de componentes. Antes de
  crear un componente, verifica si Paper ya lo ofrece (Button, Card, Checkbox,
  Switch, TextInput, ProgressBar, ActivityIndicator, Avatar, Badge, Divider,
  Tooltip, Searchbar, List, Surface, Banner, Menu, Dialog, Portal, FAB, Chip,
  Snackbar, DataTable, SegmentedButtons...) y construye sobre el; solo crea
  desde cero si Paper no tiene equivalente. Consume el tema MD3 con
  `useTheme().paperTheme` y resuelve colores de variante con
  `getVariantColor(paperTheme, variant)` de `@libs/utils`.
- Aliases oficiales `@components`, `@libs` y `@test` sincronizados en
  `tsconfig.base.json`, `jest.config.cjs`, `metro.config.cjs` y
  `.storybook/main.ts` (los cuatro).
- `tsconfig.test.json` extiende la base e incluye `test/`; esta referenciado
  desde el `tsconfig.json` raiz.
- Direccion de dependencias `components -> libs`; `libs` nunca importa de
  `components`.
- Un solo import por alias: valores y tipos (`type`) juntos.
- Los modulos internos de `libs` se importan entre si con `@libs/<modulo>`.
- Pruebas centralizadas en `projects/satoshi-native-ui/test/` espejando `src/`;
  importan desde `@libs` / `@components` y usan `@test/*`.
- JSDoc en espanol sin caracteres especiales; lo valida ESLint (`jsdoc/*`).
- Estilos con NativeWind (`className`) y tokens `--satoshi-*`; sin CSS
  tradicional, SCSS ni Bootstrap.
- Stack: React Native + React Native Web + React Native Paper (nucleo de
  componentes) + NativeWind.

## Validacion (comandos oficiales)

`npm test` (Jest + RNTL, jsdom), `npm run lint`, `npm run format:check`,
`npm run typecheck`, `npm run build:lib`, `npm run build:storybook` y
`npm run storybook`.

## Commits

Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`).
Un commit = un cambio coherente; sin artefactos generados ni secretos. Mensajes
en ASCII sin diacriticos.
