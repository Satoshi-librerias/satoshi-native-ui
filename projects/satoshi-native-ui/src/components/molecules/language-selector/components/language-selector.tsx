import { useCallback, useRef } from "react";
import type { FC, JSX } from "react";
import { View } from "react-native";
import { useLanguage } from "@libs";
import { LanguageSelectorList } from "./language-selector-list";
import { LanguageSelectorSearch } from "./language-selector-search";
import { LanguageSelectorTrigger } from "./language-selector-trigger";
import { useLanguageSelector } from "../hooks/use-language-selector.hook";
import { translateLanguageSelectorMessages } from "../utils/translate-language-selector-messages.util";
import type { LanguageSelectorProps } from "../types/language-selector.types";

/**
 * @description Permite buscar y seleccionar idiomas disponibles. Los textos
 * accesibles se resuelven con el contexto de traduccion y son configurables
 * mediante la propiedad translations.
 * @param props Propiedades de la molecula.
 * @param props.className Clases adicionales configuradas.
 * @param props.translations Claves de traduccion configurables.
 * @returns Selector de idiomas listo para renderizar.
 * @example
 * <LanguageSelector translations={{ select: t("language.select") }} />
 * @author Steveen Cues
 * @version 1.0.0
 */
export const LanguageSelector: FC<LanguageSelectorProps> = ({
  className = "",
  translations,
}): JSX.Element => {
  const {
    language,
    languages,
    hasSearch,
    isOpen,
    searchQuery,
    setSearchQuery,
    toggleSelector,
    closeSelector,
    selectLanguage,
  } = useLanguageSelector();
  const { t } = useLanguage();

  const messages = translateLanguageSelectorMessages(translations, t);

  const containerRef = useRef<View>(null);

  const handleBlur = useCallback((): void => {
    if (isOpen) {
      closeSelector();
    }
  }, [closeSelector, isOpen]);

  return (
    <View className={`w-full ${className}`.trim()}>
      <LanguageSelectorTrigger
        ariaLabel={messages.select}
        isOpen={isOpen}
        language={language}
        onClick={toggleSelector}
      />

      {isOpen && (
        <View className="mt-2 w-full rounded-2xl border border-base-300 bg-base-100 p-2">
          {hasSearch && (
            <View className="p-1">
              <LanguageSelectorSearch
                onChange={setSearchQuery}
                placeholder={messages.searchPlaceholder}
                value={searchQuery}
              />
            </View>
          )}

          <LanguageSelectorList
            emptyMessage={messages.empty}
            languages={languages}
            listLabel={messages.listLabel}
            onSelect={selectLanguage}
            selectedLanguage={language}
          />
        </View>
      )}

      <View onBlur={handleBlur} ref={containerRef} />
    </View>
  );
};

export default LanguageSelector;
