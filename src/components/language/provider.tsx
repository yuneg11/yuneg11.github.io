/* eslint-disable react-refresh/only-export-components */
import * as React from "react";

export type Language = "en" | "ko";
export type LanguageSetting = Language | "system";

const LANGUAGE_VALUES: Language[] = ["en", "ko"];
const LANGUAGE_SETTING_VALUES: LanguageSetting[] = ["en", "ko", "system"];
const STORAGE_KEY = "language";

function getBrowserLanguage(): Language {
  for (const tag of navigator.languages) {
    const lang = tag.split("-")[0].toLowerCase();
    if (LANGUAGE_VALUES.includes(lang as Language)) {
      return lang as Language;
    }
  }
  return "en";
}

function resolveLanguage(setting: LanguageSetting): Language {
  return setting === "system" ? getBrowserLanguage() : setting;
}

type LanguageProviderProps = {
  children: React.ReactNode;
};

type LanguageProviderState = {
  language: Language;
  setting: LanguageSetting;
  setLanguage: (setting: LanguageSetting) => void;
};

const LanguageProviderContext = React.createContext<LanguageProviderState | undefined>(undefined);

function isLanguageSetting(value: string | null): value is LanguageSetting {
  if (value === null) {
    return false;
  }

  return LANGUAGE_SETTING_VALUES.includes(value as LanguageSetting);
}

export function LanguageProvider({ children, ...props }: LanguageProviderProps) {
  const [setting, setSettingState] = React.useState<LanguageSetting>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLanguageSetting(stored)) {
      return stored;
    }

    return "system";
  });

  const setLanguage = React.useCallback((nextSetting: LanguageSetting) => {
    localStorage.setItem(STORAGE_KEY, nextSetting);
    setSettingState(nextSetting);
  }, []);

  React.useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.storageArea !== localStorage) {
        return;
      }

      if (event.key !== STORAGE_KEY) {
        return;
      }

      if (isLanguageSetting(event.newValue)) {
        setSettingState(event.newValue);
        return;
      }

      setSettingState("system");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const value = React.useMemo(
    () => ({
      language: resolveLanguage(setting),
      setting,
      setLanguage,
    }),
    [setting, setLanguage],
  );

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = React.useContext(LanguageProviderContext);

  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
