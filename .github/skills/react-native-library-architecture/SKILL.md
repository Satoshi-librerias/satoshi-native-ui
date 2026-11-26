---
name: react-native-library-architecture
description:
  "Use when: creating or modifying components, hooks, providers, services,
  storage, types, or tests in the satoshi-native-ui multiplatform library,
  adding aliases, or deciding where a new file belongs under
  projects/satoshi-native-ui."
---

# React Native Library Architecture

The multiplatform library lives in `projects/satoshi-native-ui` with exactly two
functional roots (`components`, `libs`) plus a centralized `test` folder. The
official aliases are `@components`, `@libs` and `@test`; no layer aliases exist.
The stack is React Native + React Native Web + React Native Paper + NativeWind
(Tailwind) + TypeScript.

## Official tree

```text
projects/satoshi-native-ui/
├── src/
│   ├── index.ts            (public API: exports ./components and ./libs)
│   ├── components/         (UI shared by Android, iOS and web)
│   │   ├── atoms/          (<name>/components + types + constants + utils + index.ts)
│   │   ├── molecules/
│   │   ├── organisms/
│   │   └── index.ts        (re-exports atoms, molecules, organisms)
│   ├── libs/               (cross-cutting, no UI JSX)
│   │   ├── constants/      contexts/    enums/     hooks/
│   │   ├── interface/      providers/   services/  storage/
│   │   ├── types/          utils/       styles/    (NativeWind global.css)
│   │   └── index.ts        (public libs barrel, one export per folder)
│   ├── types/              (ambient declarations: nativewind.d.ts, css.d.ts)
│   └── assets/
├── test/                   (ALL unit tests live here; none inside src)
│   ├── components/         (mirrors src/components)
│   ├── libs/               (mirrors src/libs)
│   ├── mocks/  fixtures/  utils/
│   └── setup/              (setup.ts polyfills + after-env.ts cleanup)
├── stories/                (Storybook stories + web mocks)
├── .storybook/             (main.ts aliases + preview.tsx providers)
├── tsconfig.json           (references app + test)
├── tsconfig.base.json      (shared options + all aliases)
├── tsconfig.build.json     (declaration emit to dist/)
├── tsconfig.test.json      (extends base; includes test/)
├── jest.config.cjs         (react-native preset + jsdom + aliases)
├── babel.config.cjs        (@react-native/babel-preset)
├── metro.config.cjs        (aliases for native consumers)
├── tailwind.config.cjs     (NativeWind preset + satoshi tokens)
└── README.md
```

## Rules

1. **Only `components` and `libs`**: never create `domain`, `application`,
   `applications`, `presentation` or `infrastructure` folders, barrels or
   aliases.
2. **Dependency direction**: `components -> libs`; `libs` never imports from
   `components`. Inside `libs`, modules import each other with `@libs/<module>`
   (e.g. `@libs/contexts`), never with `../` paths between libs modules.
3. **Barrels everywhere**: every component folder and every libs folder has an
   `index.ts`. The public API is only `src/index.ts`
   (`export * from "./components"; export * from "./libs";`).
4. **Aliases** (declared in `tsconfig.base.json`, `jest.config.cjs`,
   `metro.config.cjs` and `.storybook/main.ts` — keep the four in sync):
   - `@components` and `@components/*` -> `src/components`
   - `@libs` and `@libs/*` -> `src/libs`
   - `@test/*` -> `test`
   - `@assets/*` and `@/*` -> `src`
5. **Cross-module imports use aliases**: `components` imports `libs` with
   `@libs`; a component importing another component family uses `@components`.
   Relative imports are only allowed inside the same module folder.
6. **Tests centralized**: every `*.test.ts(x)` lives in
   `projects/satoshi-native-ui/test` mirroring the source layout. Import the
   code under test from the `@libs` / `@components` barrels; testing resources
   use `@test/*`. `tsconfig.test.json` extends the base config and is referenced
   from the root `tsconfig.json`.
7. **One import per alias**: values and `type` members go together in a single
   import statement per alias (`import { X, type Y } from "@libs"`). Never split
   the same alias into two imports, and never import the same module through two
   different paths in one file.
8. **Styles**: NativeWind `className` on RN primitives; theme tokens are CSS
   variables (`--satoshi-*`) declared in `tailwind.config.cjs`. No inline
   StyleSheet objects for themable colors, no SCSS, no Bootstrap.
8. **Platform differences**: prefer one shared implementation with RN
   primitives (View, Text, Pressable, TextInput, Image, ActivityIndicator).
   Use `.native.tsx` / `.web.tsx` only when a real platform difference exists.
   Never use HTML elements inside `src/`.
9. **Paper-first components**: react-native-paper is the component core of
   the library. Before writing any UI component, check whether
   react-native-paper already provides it (Button, Card, Checkbox, Switch,
   TextInput, ProgressBar, ActivityIndicator, Avatar, Badge, Divider,
   Tooltip, Searchbar, List, Surface, Banner, Menu, Dialog, Portal, FAB,
   Chip, Snackbar, DataTable, SegmentedButtons...) and build on top of it,
   passing the MD3 theme resolved by `useTheme().paperTheme` through the
   `theme` prop. Only build a component from scratch when Paper does not
   offer an equivalent. Resolve semantic variant colors with
   `getVariantColor(paperTheme, variant)` from `@libs/utils`; never nest
   ternaries for color resolution and never hardcode hex colors.
10. **TypeScript strict, no `any`**, explicit return types on exported
    functions, JSDoc in Spanish without special characters.
11. **Bash only for shell commands** (Git Bash on Windows, Bash on Linux): never
    Windows CMD, PowerShell, `.bat`/`.cmd` scripts, or their exclusive syntax.
    Prefer `npm` over Windows-only executables. On Windows the Git Bash binary
    lives at `C:\Program Files (x86)\Git\bin\bash.exe` (not
    `C:\Program Files\Git\...`); invoke it as
    `& "C:\Program Files (x86)\Git\bin\bash.exe" -lc "cd /d/<repo> && <cmd>"`.
    Never call `C:\WINDOWS\system32\bash.exe` (WSL) by mistake.
12. **Validation before closing a task**: `npm test`, `npm run lint`,
    `npm run format:check`, `npm run typecheck`, `npm run build:lib` and
    `npm run build:storybook` for visual changes.
