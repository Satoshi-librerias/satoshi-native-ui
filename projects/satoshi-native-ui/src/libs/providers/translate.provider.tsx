import { useCallback, useEffect, useMemo, useState } from "react";

import type { JSX } from "react";

import type {
  ILanguageContextValue,
  ITranslateProviderProps,
} from "@libs/interface";
import type { TranslationDictionary, TranslationParams } from "@libs/types";

import { TranslateContext } from "@libs/contexts";

import { loadLanguagePreference, saveLanguagePreference } from "@libs/storage";

import {
  assertLanguageExists,
  resolveActiveLanguage,
  resolveInitialLanguage,
  translateMessage,
} from "@libs/utils";

/**
 * @description Configuracion de la preferencia de idioma.
 * @author Steveen Cues
 * @version 1.0.0
 */
interface LanguagePreferenceConfiguration {
  readonly translations: ITranslateProviderProps["translations"];
  readonly initialLanguage: ITranslateProviderProps["initialLanguage"];
  readonly fallbackLanguage: string;
  readonly languageEncryptionKey: ITranslateProviderProps["languageEncryptionKey"];
  readonly languages: readonly string[];
}

/**
 * @description Estado de la preferencia de idioma.
 * @author Steveen Cues
 * @version 1.0.0
 */
interface LanguagePreferenceState extends LanguagePreferenceConfiguration {
  readonly selectedLanguage: string;
  readonly isLoaded: boolean;
}

/**
 * @description Resultado del hook de preferencia de idioma.
 * @author Steveen Cues
 * @version 1.0.0
 */
interface LanguagePreferenceResult {
  readonly language: string;
  readonly isLoaded: boolean;
  readonly setLanguage: (language: string) => void;
}

type SetLanguagePreferenceState = React.Dispatch<
  React.SetStateAction<LanguagePreferenceState>
>;

/**
 * @description Crea el estado inicial de la preferencia de idioma.
 * @author Steveen Cues
 * @version 1.0.0
 */
function createLanguagePreferenceState(
  configuration: LanguagePreferenceConfiguration,
  selectedLanguage: string,
  isLoaded: boolean,
): LanguagePreferenceState {
  return {
    ...configuration,
    selectedLanguage,
    isLoaded,
  };
}

/**
 * @description Comprueba si un estado coincide con la configuracion activa.
 * @author Steveen Cues
 * @version 1.0.0
 */
function matchesLanguageConfiguration(
  state: LanguagePreferenceState,
  configuration: LanguagePreferenceConfiguration,
): boolean {
  return (
    state.translations === configuration.translations &&
    state.initialLanguage === configuration.initialLanguage &&
    state.fallbackLanguage === configuration.fallbackLanguage &&
    state.languageEncryptionKey === configuration.languageEncryptionKey &&
    state.languages === configuration.languages
  );
}

/**
 * @description Restaura el idioma guardado y aplica el respaldo si falla.
 * @author Steveen Cues
 * @version 1.0.0
 */
async function restoreSavedLanguage(
  configuration: LanguagePreferenceConfiguration,
): Promise<string | undefined> {
  try {
    return await loadLanguagePreference(
      configuration.languages,
      configuration.languageEncryptionKey,
    );
  } catch {
    return undefined;
  }
}

/**
 * @description Restaura el idioma guardado para la configuracion activa.
 * @author Steveen Cues
 * @version 1.0.0
 */
function useRestoreLanguagePreference(
  configuration: LanguagePreferenceConfiguration,
  setPreferenceState: SetLanguagePreferenceState,
): void {
  useEffect((): (() => void) => {
    let isActive = true;

    const restorePreference = async (): Promise<void> => {
      const savedLanguage = await restoreSavedLanguage(configuration);

      if (!isActive) {
        return;
      }

      const defaultLanguage = resolveInitialLanguage(
        configuration.translations,
        configuration.initialLanguage,
        configuration.fallbackLanguage,
      );

      setPreferenceState(
        (currentState: LanguagePreferenceState): LanguagePreferenceState => {
          if (
            matchesLanguageConfiguration(currentState, configuration) &&
            currentState.isLoaded
          ) {
            return currentState;
          }

          return createLanguagePreferenceState(
            configuration,
            savedLanguage ?? defaultLanguage,
            true,
          );
        },
      );
    };

    void restorePreference();

    return (): void => {
      isActive = false;
    };
  }, [configuration, setPreferenceState]);
}

/**
 * @description Persiste el idioma activo tras la restauracion.
 * @author Steveen Cues
 * @version 1.0.0
 */
function usePersistLanguagePreference(
  configuration: LanguagePreferenceConfiguration,
  language: string,
  isLoaded: boolean,
): void {
  useEffect((): void => {
    if (!isLoaded) {
      return;
    }

    void saveLanguagePreference(language, configuration.languageEncryptionKey);
  }, [configuration.languageEncryptionKey, language, isLoaded]);
}

/**
 * @description Crea un validador de seleccion de idioma.
 * @author Steveen Cues
 * @version 1.0.0
 */
function useSetLanguagePreference(
  configuration: LanguagePreferenceConfiguration,
  setPreferenceState: SetLanguagePreferenceState,
): (language: string) => void {
  return useCallback(
    (nextLanguage: string): void => {
      assertLanguageExists(configuration.translations, nextLanguage);

      setPreferenceState(
        createLanguagePreferenceState(configuration, nextLanguage, true),
      );
    },
    [configuration, setPreferenceState],
  );
}

/**
 * @description Gestiona la seleccion, restauracion y persistencia del idioma.
 * @author Steveen Cues
 * @version 1.0.0
 */
function useLanguagePreference(
  configuration: LanguagePreferenceConfiguration,
): LanguagePreferenceResult {
  const [preferenceState, setPreferenceState] =
    useState<LanguagePreferenceState>((): LanguagePreferenceState =>
      createLanguagePreferenceState(
        configuration,
        configuration.initialLanguage,
        false,
      ),
    );

  useRestoreLanguagePreference(configuration, setPreferenceState);

  const isCurrentConfiguration = matchesLanguageConfiguration(
    preferenceState,
    configuration,
  );

  const selectedLanguage = isCurrentConfiguration
    ? preferenceState.selectedLanguage
    : configuration.initialLanguage;

  const isLoaded = isCurrentConfiguration && preferenceState.isLoaded;

  const setLanguage = useSetLanguagePreference(
    configuration,
    setPreferenceState,
  );

  return {
    language: resolveActiveLanguage(
      configuration.translations,
      selectedLanguage,
      configuration.initialLanguage,
      configuration.fallbackLanguage,
    ),
    isLoaded,
    setLanguage,
  };
}

/**
 * @description Proporciona el idioma activo y las funciones de traduccion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function TranslateProvider({
  translations,
  initialLanguage,
  fallbackLanguage = "en",
  languageEncryptionKey,
  children,
}: ITranslateProviderProps): JSX.Element {
  const languages = useMemo(
    (): readonly string[] => Object.keys(translations),
    [translations],
  );

  const configuration = useMemo(
    (): LanguagePreferenceConfiguration => ({
      translations,
      initialLanguage,
      fallbackLanguage,
      languageEncryptionKey,
      languages,
    }),
    [
      translations,
      initialLanguage,
      fallbackLanguage,
      languageEncryptionKey,
      languages,
    ],
  );

  const preference = useLanguagePreference(configuration);

  usePersistLanguagePreference(
    configuration,
    preference.language,
    preference.isLoaded,
  );

  const contextValue = useTranslationContext(configuration, preference);

  return (
    <TranslateContext.Provider value={contextValue}>
      {children}
    </TranslateContext.Provider>
  );
}

/**
 * @description Crea el valor del contexto de traduccion.
 * @author Steveen Cues
 * @version 1.0.0
 */
function useTranslationContext(
  configuration: LanguagePreferenceConfiguration,
  preference: LanguagePreferenceResult,
): ILanguageContextValue {
  const currentDictionary: TranslationDictionary =
    configuration.translations[preference.language];

  const fallbackDictionary: TranslationDictionary =
    configuration.translations[configuration.fallbackLanguage];

  const t = useCallback(
    (key: string, params?: TranslationParams): string =>
      translateMessage(currentDictionary, fallbackDictionary, key, params),
    [currentDictionary, fallbackDictionary],
  );

  return useMemo(
    (): ILanguageContextValue => ({
      language: preference.language,
      languages: configuration.languages,
      setLanguage: preference.setLanguage,
      t,
    }),
    [preference.language, preference.setLanguage, configuration.languages, t],
  );
}
