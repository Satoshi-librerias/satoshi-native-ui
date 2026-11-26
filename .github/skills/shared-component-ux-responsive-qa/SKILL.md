---
name: shared-component-ux-responsive-qa
description:
  "Use when: building or improving satoshi-native-ui shared components,
  responsive layouts, accessibility, theme consistency, or component-level
  visual and functional QA across web, Android and iOS."
---

# Shared Component UX and Responsive QA

Build reusable components that behave consistently across consumers, themes,
touch and keyboard input, and mobile, tablet, and desktop layouts.

## Workflow

1. Inspect the component types, implementation, exports, neighboring components,
   theme tokens, and tests before changing the public API.
2. Keep reusable presentation in this library. Use the semantic theme tokens
   (`base-100`, `base-content`, `primary`, `secondary`, `accent`, `neutral`)
   mapped to `--satoshi-*` CSS variables; do not bake a consumer's brand colors
   or layout assumptions into general components.
3. **Paper-first**: build every component on the react-native-paper core when
   Paper offers an equivalent (Button, Card, Checkbox, Switch, TextInput,
   ProgressBar, ActivityIndicator, Avatar, Badge, Divider, Tooltip, Searchbar,
   List, Surface, Banner, Menu, Dialog, Portal, FAB, Chip, Snackbar,
   DataTable, SegmentedButtons...). Consume the MD3 theme with
   `useTheme().paperTheme` and pass it via the `theme` prop; resolve variant
   colors with `getVariantColor(paperTheme, variant)`. Only create a component
   from scratch when Paper does not provide one.
4. Design responsive behavior deliberately: prevent viewport overflow, allow
   long copy to wrap, keep actions reachable, and constrain tall dialogs with
   internal scrolling on short screens. Use NativeWind responsive prefixes
   (`sm:`, `md:`, `lg:`) instead of platform checks.
5. Give overlays clear visual stacking and interaction ownership. Ensure
   background clicks are blocked and the active dialog is above its curtain.
6. Make progress indicators both visual and semantic. Keep the current step,
   range, and accessible label synchronized with the rendered progress amount.
7. Add tests in the centralized test folder
   (`projects/satoshi-native-ui/test/components/<level>/<name>/*.test.tsx`,
   mirroring the source layout) for initial state, each main action, state
   persistence, reopening, and accessibility semantics. Import the component
   with `@components/*`, libs with `@libs`, and testing resources with
   `@test/*`. Prefer asserting behavior and accessible output over class
   strings. Components that consume the theme or translations must be rendered
   inside `withProviders` from `@test/utils/with-providers`.
8. For visible localized labels, verify the keys exist in each consumer locale
   and that translated output is not a raw key. Every user-facing string in a
   shared component must resolve through the translation context, never a
   hardcoded literal.
9. Run focused component tests, lint, formatting, `npm run typecheck` and
   `npm run build:lib`. Run every shell command in Bash (Git Bash on Windows,
   Bash on Linux); never use Windows CMD, PowerShell, `.bat`/`.cmd` scripts, or
   their exclusive syntax. On Windows invoke Git Bash explicitly as
   `& "C:\Program Files (x86)\Git\bin\bash.exe" -lc "cd /d/<repo> && <cmd>"`;
   the default `bash` on PATH is WSL, not Git Bash.
10. Visual QA is mandatory on mobile and desktop: use 320/390 CSS pixels for
   mobile, 1024/1440 for desktop, and 768 for tablet. Check overflow,
   reachability, themes, and at least one full consumer flow on mobile and
   desktop. Exercise light and dark themes in Storybook.
11. For performance work, record a baseline and target an observed cost in
    render work, network loading, or build output. Prefer small changes with
    measured benefit; avoid speculative memoization and dependencies.

## Verified Project Learnings

- The web validation environment is jsdom + react-native-web through the
  `react-native` Jest preset; `crypto.subtle` is missing in jsdom and must be
  restored from `node:crypto` in `test/setup/setup.ts` before the encryption
  service tests run.
- `react-native-svg` ships fabric/codegen modules that neither jsdom nor
  react-native-web can execute; both Jest (`test/mocks`) and Storybook
  (`stories/mocks`) need a container mock mapped by module alias.
- React Native 0.81 exposes Flow syntax in `index.js`; every web bundler
  (Vite/Storybook) must alias `react-native` to `react-native-web` before
  resolution, and Jest must use the official `react-native` preset instead of
  mapping the module manually.
- NativeWind type augmentation resolves the nested `react-native` inside
  `node_modules/nativewind`; the project declares `className` on the root RN
  prop interfaces in `src/types/nativewind.d.ts` to typecheck components.
- RNTL queries match RN primitives: text must live inside `Text` (a bare string
  child of `View` is not queryable), and `getByRole` reads `accessibilityRole`,
  not the web `role` attribute.
- Precompile module-level regexes; `interpolateTranslation` hoists its
  interpolation pattern to a module constant to avoid per-call compilation.
