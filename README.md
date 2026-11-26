# Satoshi React Native UI

Libreria de componentes multiplataforma desarrollada con **React Native, React
Native Web, React Native Paper, NativeWind y TypeScript**, disenada para
reutilizar los mismos componentes, hooks, providers, servicios y tipos en
aplicaciones **Android, iOS y Web**.

Conserva la arquitectura, los estandares y las convenciones de la libreria React
original (satoshi-rc-ui), adaptandolos al ecosistema React Native.

## Caracteristicas

- **Multiplataforma:** una sola implementacion por componente para Android, iOS
  y web mediante React Native Web.
- **Atomic Design:** atoms, molecules y organisms con organizacion interna
  consistente (`components/`, `types/`, `constants/`, `utils/`).
- **Arquitectura de dos raices:** `components` (UI) y `libs` (transversal), con
  pruebas centralizadas en `test/`.
- **Theming:** temas claro y oscuro, temas personalizados registrables en tiempo
  de ejecucion y tokens semanticos compartidos (`--satoshi-*`).
- **Internacionalizacion:** provider, contexto, hook, diccionarios anidados,
  interpolacion `{{name}}`, idioma de respaldo y persistencia cifrada.
- **Storage multiplataforma:** contrato `KeyValueStorage` con adaptador
  registrable (AsyncStorage en nativo, localStorage en web).
- **Cifrado AES-GCM:** preferencias cifradas con WebCrypto cuando esta
  disponible.
- **Testing:** Jest + React Native Testing Library con entorno jsdom.
- **Storybook:** documentacion y visualizacion web de todos los componentes.
- **Calidad:** ESLint, Prettier, Husky, lint-staged, Commitlint y Conventional
  Commits.

## Requisitos

- Node.js 20 o superior (el CI usa Node 22).
- npm 10 o superior.
- Git.

## Instalacion

### Desde un paquete local

Genera el paquete de la libreria:

```bash
npm run build:lib
```

Las declaraciones y el JavaScript compilado se generan en `dist/`.

### En una aplicacion React Native

```bash
npm install ../ruta-de-la-libreria
```

Configura los aliases en el `metro.config.js` del consumidor (ver
`metro.config.cjs` de esta libreria como referencia) y anade NativeWind al
`babel.config.js` del consumidor.

### En una aplicacion web (React Native Web)

```bash
npm install ../ruta-de-la-libreria
```

Anade los aliases a la configuracion de Vite/webpack del consumidor y resuelve
`react-native` a `react-native-web`.

## Scripts disponibles

| Comando                   | Descripcion                                                |
| ------------------------- | ---------------------------------------------------------- |
| `npm test`                | Ejecuta las pruebas unitarias (Jest + RNTL, jsdom).        |
| `npm run test:watch`      | Pruebas en modo watch.                                     |
| `npm run test:coverage`   | Pruebas con cobertura.                                     |
| `npm run lint`            | Ejecuta ESLint para validar el codigo.                     |
| `npm run format`          | Formatea los archivos con Prettier.                        |
| `npm run format:check`    | Comprueba el formato sin modificar archivos.               |
| `npm run typecheck`       | Compila TypeScript sin emitir (proyecto completo).         |
| `npm run build:lib`       | Genera `dist/` con JavaScript y declaraciones.             |
| `npm run build`           | Validacion completa: lint + format + types + test + build. |
| `npm run storybook`       | Inicia Storybook (puerto 6006).                            |
| `npm run build:storybook` | Compila Storybook hacia `docs/storybook`.                  |
| `npm run prepare`         | Inicializa los Git Hooks configurados.                     |

## Arquitectura

La libreria vive en `projects/satoshi-native-ui/src` con dos raices funcionales
y una carpeta centralizada de pruebas:

```text
satoshi-native-ui/
├── projects/satoshi-native-ui/
│   ├── src/
│   │   ├── index.ts            # API publica unica
│   │   ├── components/         # UI compartida
│   │   │   ├── atoms/          #   <nombre>/{components,types,constants,utils}
│   │   │   ├── molecules/
│   │   │   └── organisms/
│   │   ├── libs/               # transversal sin JSX de UI
│   │   │   ├── constants/  contexts/   enums/     hooks/
│   │   │   ├── interface/  providers/  services/  storage/
│   │   │   ├── types/      utils/      styles/
│   │   │   └── index.ts
│   │   ├── types/              # declaraciones ambientales
│   │   └── assets/
│   └── test/                   # pruebas centralizadas (espeja src/)
│       ├── components/  libs/
│       ├── mocks/  fixtures/  utils/
│       └── setup/
├── stories/                    # historias de Storybook
├── .storybook/                 # configuracion de Storybook
├── .github/                    # skills, instructions y workflows
└── package.json
```

### Reglas de arquitectura

- Direccion de dependencias: `components -> libs`; `libs` nunca importa de
  `components`.
- Cada componente y cada modulo de `libs` exporta su API publica por su
  `index.ts`; la API del paquete es unicamente
  `projects/satoshi-native-ui/src/index.ts`.
- Los aliases oficiales (`@libs`, `@components`, `@test/*`, `@assets/*`, `@/*`)
  se registran en `tsconfig.base.json`, `jest.config.cjs`, `metro.config.cjs` y
  `.storybook/main.ts`; mantenlos sincronizados.
- Las pruebas viven en `projects/satoshi-native-ui/test` (centralizadas) con el
  setup global en `test/setup/setup.ts`.
- No existen capas `domain`, `application`, `presentation` ni `infrastructure`.

## Aliases

| Alias           | Destino                   |
| --------------- | ------------------------- |
| `@components`   | `src/components/index.ts` |
| `@components/*` | `src/components/*`        |
| `@libs`         | `src/libs/index.ts`       |
| `@libs/*`       | `src/libs/*`              |
| `@test/*`       | `test/*`                  |
| `@assets/*`     | `src/assets/*`            |
| `@/*`           | `src/*`                   |

## Componentes

### Atoms

`Alert`, `Avatar`, `Badge`, `Button`, `Card`, `Checkbox`, `Container`,
`Divider`, `Icon`, `Input`, `Kbd`, `Logo`, `Progress`, `Radio`, `Skeleton`,
`Spinner`, `Switch`, `Textarea`, `Tooltip`.

### Molecules

`AccordionItem`, `AvatarGroup`, `Breadcrumb`, `ButtonGroup`, `CalloutAction`,
`EmptyState`, `FormField`, `InputGroup`, `ListItem`, `Navigation`, `Pagination`,
`SearchBar`, `SectionHeading`, `Stat`, `Stepper`, `Tabs`, `Toolbar`.

### Organisms

`Header` (generico configurable) y `HeaderComposition` con `HeaderBrand` y
`HeaderActions`.

## API publica

```tsx
import {
  // Providers
  ThemeProvider,
  TranslateProvider,
  // Hooks
  useTheme,
  useLanguage,
  // Componentes
  Button,
  FormField,
  Header,
  // Tipos
  type AppTheme,
  type TranslationCatalog,
} from "@satoshi/native-ui";
```

## Temas

El `ThemeProvider` gestiona la seleccion, el registro y la persistencia del tema
activo. Los tokens semanticos se exponen como variables CSS
(`--satoshi-primary`, `--satoshi-base-100`, etc.) y se consumen desde
NativeWind.

```tsx
import { ThemeProvider, type AppTheme } from "@satoshi/native-ui";

const LIGHT_THEME: AppTheme = {
  name: "light",
  manifest: {
    id: "light",
    name: "light.name",
    description: "light.description",
    version: "1.0.0",
    author: "Satoshi",
    tags: [],
    supportedFeatures: [],
    isDefault: true,
    isExperimental: false,
  },
};

export function App() {
  return (
    <ThemeProvider themes={[LIGHT_THEME]} initialTheme="light">
      <Main />
    </ThemeProvider>
  );
}
```

Los temas personalizados se registran en tiempo de ejecucion con `registerTheme`
del hook `useTheme`, aportando la paleta completa (`SatoshiThemeColors`).

## Internacionalizacion

El `TranslateProvider` resuelve el idioma inicial, aplica el idioma de respaldo,
interpola parametros y persiste la preferencia de forma cifrada.

```tsx
import { TranslateProvider, useLanguage } from "@satoshi/native-ui";

const TRANSLATIONS = {
  es: { greeting: "Hola {{name}}" },
  en: { greeting: "Hello {{name}}" },
};

export function App() {
  return (
    <TranslateProvider
      translations={TRANSLATIONS}
      initialLanguage="es"
      fallbackLanguage="en"
      languageEncryptionKey="clave-del-consumidor"
    >
      <Main />
    </TranslateProvider>
  );
}

function Main() {
  const { t, language, setLanguage } = useLanguage();

  return <Text>{t("greeting", { name: "Satoshi" })}</Text>;
}
```

## Storage multiplataforma

La libreria no acopla los servicios a una implementacion de almacenamiento. En
web utiliza `localStorage`; en React Native el consumidor registra un adaptador
(por ejemplo AsyncStorage):

```ts
import { setKeyValueStorage } from "@satoshi/native-ui";
import AsyncStorage from "@react-native-async-storage/async-storage";

setKeyValueStorage({
  getItem: (key) => AsyncStorage.getItem(key),
  setItem: (key, value) => AsyncStorage.setItem(key, value),
  removeItem: (key) => AsyncStorage.removeItem(key),
});
```

## Compatibilidad

| Plataforma | Estado      | Validacion                          |
| ---------- | ----------- | ----------------------------------- |
| Web        | Validada    | Jest (jsdom + RNW) + Storybook web. |
| Android    | Estructural | Tipado + Metro config + RN preset.  |
| iOS        | Estructural | Tipado + Metro config + RN preset.  |

La validacion nativa completa (compilacion Gradle/Xcode) requiere un proyecto
consumidor con `react-native init`; la libreria entrega la configuracion de
Metro, Babel y TypeScript necesaria para ello.

## Testing

Las pruebas se ejecutan con Jest y React Native Testing Library sobre jsdom con
react-native-web:

```bash
npm test
```

Estructura espejada: cada prueba vive en `test/components/<nivel>/<nombre>/` o
`test/libs/<modulo>/` y importa el codigo bajo prueba desde los barrels
`@components` y `@libs`.

## Storybook

```bash
npm run storybook
```

Las historias estan organizadas por Atomic Design (`Atomos/`, `Molecules/`,
`Organismos/`) y envueltas con los providers reales de la libreria, con
selectores de tema e idioma en la toolbar.

## Contribucion

1. Crea una rama para la funcionalidad o correccion.
2. Realiza cambios pequenos, claros y mantenibles.
3. Ejecuta `npm run lint`, `npm run format:check`, `npm run typecheck` y
   `npm test`.
4. Utiliza mensajes de commit que cumplan con Conventional Commits.
5. Abre un pull request hacia la rama de desarrollo correspondiente.

## Skills

Las convenciones obligatorias del proyecto viven en `.github/skills/`:

- `react-native-library-architecture`: arbol oficial, aliases, barrels, reglas
  de dependencia y validaciones.
- `shared-component-ux-responsive-qa`: QA responsive, accesibilidad, theming y
  aprendizajes verificados del proyecto.

## Conventional Commits

```text
tipo(alcance): descripcion
```

| Tipo       | Uso                                       |
| ---------- | ----------------------------------------- |
| `feat`     | Nuevas funcionalidades.                   |
| `fix`      | Correcciones de errores.                  |
| `refactor` | Reestructuracion del codigo.              |
| `test`     | Pruebas automatizadas.                    |
| `docs`     | Documentacion.                            |
| `style`    | Cambios de formato sin alterar la logica. |
| `build`    | Compilacion y dependencias.               |
| `ci`       | Configuracion de CI/CD.                   |
| `chore`    | Tareas de mantenimiento.                  |

Los hooks de Husky validan lint, formato y mensaje de commit.

## Publicacion

El workflow `release.yml` calcula la version siguiente a partir de los commits
convencionales, crea el tag y publica un GitHub Release. El paquete compilado se
genera con `npm run build:lib`.

## Licencia

**Software propietario. Todos los derechos reservados.**

Copyright (c) 2026. Todos los derechos reservados.
