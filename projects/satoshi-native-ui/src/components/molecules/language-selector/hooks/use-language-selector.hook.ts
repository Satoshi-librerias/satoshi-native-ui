import { useCallback, useMemo, useState } from "react";
import { useLanguage } from "@libs";
import { LANGUAGE_SEARCH_THRESHOLD } from "../constants/language-selector.constants";
import { filterLanguages } from "../utils/filter-languages.util";
import type { UseLanguageSelectorResult } from "../types/language-selector.types";

/**
 * @description Administra el estado del selector de idiomas.
 * @returns Estado y acciones del selector.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function useLanguageSelector(): UseLanguageSelectorResult {
  const { language, languages, setLanguage } = useLanguage();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const hasSearch: boolean = languages.length > LANGUAGE_SEARCH_THRESHOLD;

  const filteredLanguages = useMemo(
    (): readonly string[] => filterLanguages(languages, searchQuery),
    [languages, searchQuery],
  );

  const toggleSelector = useCallback((): void => {
    setIsOpen((previousValue: boolean): boolean => !previousValue);
  }, []);

  const closeSelector = useCallback((): void => {
    setIsOpen(false);
    setSearchQuery("");
  }, []);

  const selectLanguage = useCallback(
    (selectedLanguage: string): void => {
      if (selectedLanguage === language) {
        closeSelector();
        return;
      }

      setLanguage(selectedLanguage);
      closeSelector();
    },
    [closeSelector, language, setLanguage],
  );

  return {
    language,
    languages: filteredLanguages,
    hasSearch,
    isOpen,
    searchQuery,
    setSearchQuery,
    toggleSelector,
    closeSelector,
    selectLanguage,
  };
}
