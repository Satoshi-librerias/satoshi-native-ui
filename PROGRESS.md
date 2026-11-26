# PROGRESS.md

Log de avance dia a dia del repositorio. Fuente de verdad del avance; `.ops`
organiza y enlaza, nunca duplica. Formato: una entrada por fecha con alcance,
evidencia y pendientes.

## 2026-11-26

- Alcance: adopcion del kit `ops-lifecycle` (skill + bootstrap `.ops/`).
- Skill agregada en `.github/skills/ops-lifecycle/` con seccion nueva
  "Continuidad de contexto" (handoff obligatorio al cerrar sesion).
- Bootstrap de `.ops/` con READMEs por arbol, `templates/base.md` y
  `project/handoff.md` rellenado con el estado real del repo.
- Auditoria de componentes nucleo vs react-native-paper registrada como DEC-001
  (abierta) y BUG-001/BUG-002 (abiertos) en `.ops/`.
- Correccion de estilo visual (BUG-001 y BUG-002):
  - `createPaperTheme` expone la paleta satoshi extendida (neutral, info,
    success, warning + contenidos) y `getVariantColor` mapea
    `neutral -> neutral` (antes `onSurfaceVariant`, un color de texto).
  - Los 14 atoms Paper-based consumen sus utils de clases via `className`
    (Button, Card, Alert, Badge, Checkbox, Switch, Radio, Progress, Spinner,
    Avatar, Divider, Tooltip, Input, Textarea); sin style inline para colores.
- Evidencia: `npm run build` completo en verde (lint 0 errores, prettier OK,
  typecheck OK, 19 suites / 81 pruebas, build:lib OK).
- Pendiente: QA visual en Storybook, verificacion humana de BUG-001/BUG-002 y
  resolucion de DEC-001 (moleculas con primitivos crudos).

## BUG-001

- Estado: corregido (pendiente de verificacion humana).
- Fix: `createPaperTheme` (libs/utils/paper-theme.util.ts) expone `neutral`,
  `onNeutral`, `info`, `onInfo`, `success`, `onSuccess`, `warning`, `onWarning`;
  tipo nuevo `MD3ThemeExtension` (libs/types/theme.type.ts);
  `VARIANT_COLOR_KEYS.neutral = "neutral"` (libs/utils/variant-color.util.ts).

## BUG-002

- Estado: corregido (pendiente de verificacion humana).
- Fix: los 14 atoms Paper-based consumen sus utils de clases via `className`:
  button, card, alert, badge, checkbox, switch, radio, progress, spinner,
  avatar, divider, tooltip, input, textarea. `TooltipClassOptions` acepta
  `className` opcional. Sin `style` inline para colores themables.

## 2026-11-26 (2)

- Alcance: `.ops/` excluido del control de versiones.
- `.ops/` anadido al `.gitignore` y desrastreado con `git rm -r --cached .ops`;
  el arbol se regenera con el bootstrap de la skill `ops-lifecycle`.
- La skill `ops-lifecycle` incorpora el paso 6 en su Bootstrap: anadir `.ops/`
  al `.gitignore` en cada repo nuevo que lo adopte.
