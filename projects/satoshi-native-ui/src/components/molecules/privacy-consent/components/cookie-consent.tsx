import { useCallback, useState } from "react";
import type { FC, JSX } from "react";
import { Pressable, Switch, Text, View } from "react-native";
import { resolveStorage } from "@libs";
import type { CookieConsentProps } from "../types/privacy-consent.types";

/**
 * @description Clave de almacenamiento por defecto del consentimiento.
 * @author Steveen Cues
 * @version 1.0.0
 */
const DEFAULT_STORAGE_KEY = "satoshi-cookie-consent";

/**
 * @description Define la preferencia de consentimiento almacenada.
 * @author Steveen Cues
 * @version 1.0.0
 */
interface ConsentPreference {
  readonly necessary: true;
  readonly optional: boolean;
}

/**
 * @description Define el estado inicial del consentimiento.
 * @author Steveen Cues
 * @version 1.0.0
 */
interface InitialConsentState {
  readonly isVisible: boolean;
  readonly allowOptional: boolean;
}

/**
 * @description Valida una preferencia de consentimiento almacenada.
 * @param value Valor parseado del almacenamiento.
 * @returns True cuando el valor es una preferencia valida.
 * @author Steveen Cues
 * @version 1.0.0
 */
function isConsentPreference(value: unknown): value is ConsentPreference {
  return (
    typeof value === "object" &&
    value !== null &&
    "necessary" in value &&
    (value as ConsentPreference).necessary === true &&
    "optional" in value &&
    typeof (value as ConsentPreference).optional === "boolean"
  );
}

/**
 * @description Lee la preferencia de consentimiento almacenada.
 * @param storageKey Clave de almacenamiento del consentimiento.
 * @returns Visibilidad inicial y estado de cookies opcionales.
 * @author Steveen Cues
 * @version 1.0.0
 */
function getInitialConsent(storageKey: string): InitialConsentState {
  const storage = resolveStorage();

  if (storage === undefined) {
    return { isVisible: false, allowOptional: false };
  }

  try {
    const saved = storage.getItem(storageKey);

    if (saved === null) {
      return { isVisible: true, allowOptional: false };
    }

    const preference: unknown = JSON.parse(saved);

    return isConsentPreference(preference)
      ? { isVisible: false, allowOptional: preference.optional }
      : { isVisible: true, allowOptional: false };
  } catch {
    return { isVisible: true, allowOptional: false };
  }
}

/**
 * @description Renderiza el panel de gestion con el interruptor opcional.
 * @param props Propiedades del panel de gestion.
 * @param props.allowOptional Estado de cookies opcionales.
 * @param props.translations Etiquetas traducidas.
 * @param props.onOptionalChange Accion de cambio del interruptor.
 * @returns Panel de gestion listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
function CookieConsentManagePanel({
  allowOptional,
  translations,
  onOptionalChange,
}: {
  readonly allowOptional: boolean;
  readonly translations: CookieConsentProps["translations"];
  readonly onOptionalChange: (allow: boolean) => void;
}): JSX.Element {
  return (
    <View className="mt-3 gap-2 rounded-xl bg-base-200 p-3">
      <Text className="text-sm">{translations.necessary}</Text>

      <View className="flex-row items-center justify-between gap-3">
        <Text className="flex-1 text-sm">{translations.optional}</Text>

        <Switch
          accessibilityLabel={translations.optional}
          onValueChange={onOptionalChange}
          value={allowOptional}
        />
      </View>
    </View>
  );
}

/**
 * @description Renderiza el dialogo de consentimiento con acciones.
 * @param props Propiedades del dialogo.
 * @param props.isManaging Indica si el modo gestion esta activo.
 * @param props.allowOptional Estado de cookies opcionales.
 * @param props.translations Etiquetas traducidas.
 * @param props.onOptionalChange Accion de cambio del interruptor.
 * @param props.onManage Accion de apertura del modo gestion.
 * @param props.onSave Accion de guardado de la preferencia.
 * @returns Dialogo de consentimiento listo para renderizar.
 * @author Steveen Cues
 * @version 1.0.0
 */
function CookieConsentDialog({
  isManaging,
  allowOptional,
  translations,
  onOptionalChange,
  onManage,
  onSave,
}: {
  readonly isManaging: boolean;
  readonly allowOptional: boolean;
  readonly translations: CookieConsentProps["translations"];
  readonly onOptionalChange: (allow: boolean) => void;
  readonly onManage: () => void;
  readonly onSave: (optional: boolean) => void;
}): JSX.Element {
  return (
    <View
      accessibilityLabel={translations.title}
      accessibilityRole="alert"
      className="w-full rounded-2xl border border-base-300 bg-base-100 p-5"
    >
      <Text className="text-lg font-semibold">{translations.title}</Text>

      <Text className="mt-2 text-sm leading-6 text-base-content/70">
        {translations.description}
      </Text>

      <Text className="mt-1 text-xs leading-5 text-base-content/60">
        {translations.details}
      </Text>

      {isManaging && (
        <CookieConsentManagePanel
          allowOptional={allowOptional}
          onOptionalChange={onOptionalChange}
          translations={translations}
        />
      )}

      <View className="mt-3 flex-row flex-wrap gap-2 border-t border-base-300 pt-3">
        {!isManaging ? (
          <>
            <Pressable
              accessibilityRole="button"
              className="flex-1 items-center rounded-xl border border-base-300 px-3 py-2"
              onPress={(): void => onSave(false)}
            >
              <Text className="text-sm">{translations.necessaryOnly}</Text>
            </Pressable>

            <Pressable
              accessibilityRole="button"
              className="flex-1 items-center rounded-xl border border-base-300 px-3 py-2"
              onPress={onManage}
            >
              <Text className="text-sm">{translations.manage}</Text>
            </Pressable>

            <Pressable
              accessibilityRole="button"
              className="flex-1 items-center rounded-xl bg-primary px-3 py-2"
              onPress={(): void => onSave(true)}
            >
              <Text className="text-sm text-primary-content">
                {translations.acceptAll}
              </Text>
            </Pressable>
          </>
        ) : (
          <>
            <Pressable
              accessibilityRole="button"
              className="flex-1 items-center rounded-xl border border-base-300 px-3 py-2"
              onPress={(): void => onSave(false)}
            >
              <Text className="text-sm">{translations.necessaryOnly}</Text>
            </Pressable>

            <Pressable
              accessibilityRole="button"
              className="flex-1 items-center rounded-xl bg-primary px-3 py-2"
              onPress={(): void => onSave(allowOptional)}
            >
              <Text className="text-sm text-primary-content">
                {translations.save}
              </Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
}

/**
 * @description Solicita y recuerda la preferencia de cookies opcionales.
 * Las cookies necesarias permanecen activas para el funcionamiento del
 * sitio. En nativo usa el almacenamiento registrado por el consumidor.
 * @param props Propiedades de la molecula.
 * @param props.translations Etiquetas traducidas del panel.
 * @param props.storageKey Clave de almacenamiento del consentimiento.
 * @param props.onPreferenceSaved Callback ejecutado al guardar.
 * @returns Panel de consentimiento listo para renderizar.
 * @example
 * <CookieConsent
 *   translations={{
 *     title: t("cookies.title"),
 *     description: t("cookies.description"),
 *     details: t("cookies.details"),
 *     settings: t("cookies.settings"),
 *     necessary: t("cookies.necessary"),
 *     optional: t("cookies.optional"),
 *     acceptAll: t("cookies.acceptAll"),
 *     necessaryOnly: t("cookies.necessaryOnly"),
 *     manage: t("cookies.manage"),
 *     save: t("cookies.save"),
 *   }}
 * />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CookieConsent: FC<CookieConsentProps> = ({
  translations,
  storageKey = DEFAULT_STORAGE_KEY,
  onPreferenceSaved,
}): JSX.Element => {
  const [initialConsent] = useState((): InitialConsentState =>
    getInitialConsent(storageKey),
  );
  const [isVisible, setIsVisible] = useState(initialConsent.isVisible);
  const [isManaging, setIsManaging] = useState(false);
  const [allowOptional, setAllowOptional] = useState(
    initialConsent.allowOptional,
  );

  const savePreference = useCallback(
    (optional: boolean): void => {
      const preference: ConsentPreference = { necessary: true, optional };
      const storage = resolveStorage();

      try {
        storage?.setItem(storageKey, JSON.stringify(preference));
      } catch {
        // La persistencia del consentimiento no debe interrumpir la app.
      }

      setAllowOptional(optional);
      setIsVisible(false);
      setIsManaging(false);
      onPreferenceSaved?.();
    },
    [onPreferenceSaved, storageKey],
  );

  return (
    <View>
      {!isVisible && (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={translations.settings}
          className="self-start rounded-xl px-3 py-2"
          onPress={(): void => {
            setIsManaging(true);
            setIsVisible(true);
          }}
        >
          <Text className="text-sm text-base-content/70">
            {translations.settings}
          </Text>
        </Pressable>
      )}

      {isVisible && (
        <CookieConsentDialog
          allowOptional={allowOptional}
          isManaging={isManaging}
          onManage={(): void => setIsManaging(true)}
          onOptionalChange={setAllowOptional}
          onSave={savePreference}
          translations={translations}
        />
      )}
    </View>
  );
};

export default CookieConsent;
