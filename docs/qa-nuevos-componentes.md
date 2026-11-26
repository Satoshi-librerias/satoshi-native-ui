# QA: componentes nuevos de satoshi-native-ui

Fecha: 2026-11-25 Alcance: 6 componentes portados desde satoshi-rc-ui (web) a la
libreria multiplataforma React Native + NativeWind.

## Componentes anadidos

| Nivel    | Componente         | Ubicacion                                    |
| -------- | ------------------ | -------------------------------------------- |
| Atomo    | `DropdownItem`     | `src/components/atoms/dropdown-item`         |
| Molecula | `LanguageSelector` | `src/components/molecules/language-selector` |
| Molecula | `ThemeSelector`    | `src/components/molecules/theme-selector`    |
| Molecula | `ResponsiveMenu`   | `src/components/molecules/responsive-menu`   |
| Molecula | `CookieConsent`    | `src/components/molecules/privacy-consent`   |
| Molecula | `GuidedTour`       | `src/components/molecules/guided-tour`       |

Todos siguen la estructura oficial
`components + types + constants + utils + index.ts` (y `hooks`/`hook` cuando
aplica), con barrels encadenados hasta `src/components/index.ts`.

## Pruebas unitarias (Jest + RNTL, jsdom)

Comando: `npm test` (via Git Bash).

Resultado: **19 suites, 81 pruebas, todas en verde.**

Casos cubiertos por componente:

- `DropdownItem` (3): render de etiqueta y atajo, `onSelect` con el id, estado
  seleccionado en `accessibilityState`.
- `LanguageSelector` (3): activador con nombre legible, apertura del panel y
  listado de idiomas, seleccion de idioma y cierre del panel.
- `ThemeSelector` (4): activador con el tema activo, apertura y listado,
  prioridad del tema seleccionado en la lista, cierre por boton.
- `ResponsiveMenu` (4): panel oculto cerrado, panel visible abierto, `onToggle`
  en modo controlado, alternado interno en modo no controlado.
- `CookieConsent` (3): dialogo inicial sin preferencia, guardado de "Aceptar
  todo" y boton de ajustes persistente, modo gestion con guardado.
- `GuidedTour` (5): apertura automatica sin flag, avance y finalizacion,
  retroceso, omision, no apertura cuando `enabled={false}`.

## Validacion de integracion

Comandos ejecutados en orden (todos en verde):

1. `npm run lint` - 0 errores (se corrigieron 10: imports sin uso,
   `import type`, complejidad > 8, funciones > 100 lineas, self-assign).
2. `npm run format:check` - Prettier OK tras `--write` en los archivos nuevos.
3. `npm run typecheck` - `tsc -b` sin errores (se corrigio el rol
   `accessibilityRole="dialog"`, invalido en RN, por `"alert"` con etiqueta).
4. `npm test` - 81/81.
5. `npm run build:lib` - `dist/` genera los 6 modulos nuevos
   (`atoms/dropdown-item`, `molecules/language-selector`,
   `molecules/theme-selector`, `molecules/responsive-menu`,
   `molecules/privacy-consent`, `molecules/guided-tour`).

## QA visual en Storybook

Comando: `npm run storybook` (puerto 6006, via Git Bash con `--no-open --ci`).

Verificacion del indice: `GET /index.json` devuelve HTTP 200 con 0 errores en el
log y las 9 familias de stories indexadas:

- `Atomos/Button`, `Atomos/DropdownItem` (nueva), `Atomos/Galeria`
- `Moleculas/CookieConsent` (nueva), `Moleculas/GuidedTour` (nueva),
  `Moleculas/LanguageSelector` (nueva), `Moleculas/ResponsiveMenu` (nueva),
  `Moleculas/ThemeSelector` (nueva)
- `Organismos/Header`

Stories nuevas: `DropdownItem` (Basico, ConAtajo, Variantes), `LanguageSelector`
(Predeterminado, ConTraducciones), `ThemeSelector` (ConDescripciones, Compacto),
`ResponsiveMenu` (Cerrado, Abierto, NoControlado), `CookieConsent`
(Predeterminado), `GuidedTour` (DosPasos, Deshabilitada).

### Flujos verificados en el navegador (iframe de cada story)

1. **DropdownItem/Variantes**: renderiza 4 `menuitem` (Primario, Secundario,
   Acento, Neutral) con roles accesibles correctos.
2. **LanguageSelector/Predeterminado**: el activador muestra "espanol"; al
   pulsarlo se abre el panel con `es` (marcado con check) y `en`; al seleccionar
   "ingles" el panel se cierra y el activador pasa a "ingles".
3. **ThemeSelector/ConDescripciones**: el activador muestra el tema activo; al
   abrir, el panel lista Light (seleccionado, primero) y Dark con descripciones
   y contador "2 de 2 resultados"; al elegir Dark el panel se cierra, el
   activador cambia y Dark pasa al primer lugar de la lista.
4. **ResponsiveMenu/NoControlado**: primer press abre el panel (icono x, enlaces
   Inicio/Acerca visibles), segundo press lo cierra (icono hamburguesa).
5. **CookieConsent/Predeterminado**: dialogo inicial con 3 acciones; pulsar
   "Configurar" abre el modo gestion (interruptor de cookies opcionales);
   "Guardar" persiste la preferencia, cierra el dialogo y deja el boton
   "Preferencias de cookies".
6. **GuidedTour/DosPasos**: se abre automaticamente en "Paso 1 de 2" con barra
   de progreso; "Siguiente" avanza a "Paso 2 de 2" y habilita "Atras";
   "Finalizar" cierra el dialogo y persiste el flag (la segunda visita solo
   muestra el boton flotante "Abrir guia", que reinicia el flujo completo).

### Hallazgos corregidos durante el QA

- `CookieConsent` guardaba la preferencia al pulsar "Configurar" en lugar de
  abrir el modo gestion; se separo el dialogo en `CookieConsentDialog` y
  `CookieConsentManagePanel` con acciones independientes.
- `accessibilityRole="dialog"` no existe en React Native; se uso `"alert"` con
  `accessibilityLabel` del titulo en GuidedTour y CookieConsent.
- El cierre externo del `LanguageSelector` web (click fuera + Escape) no es
  portable a RN sin Modal/BackHandler; el hook `useLanguageSelectorEvents`
  conserva la firma multiplataforma y el cierre queda en la seleccion o el
  alternado del activador.

## Pendiente para el consumidor

- Registrar un adaptador `KeyValueStorage` con `setKeyValueStorage` en React
  Native para que `CookieConsent` y `GuidedTour` persistan preferencias (en web
  usan `localStorage` automaticamente).
- Anadir las claves `language.*` y `theme.*` al catalogo de traducciones del
  consumidor (los fixtures de prueba ya las incluyen en `es` y `en`).
