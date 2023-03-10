import { Languages, SettingsInterface, Themes } from '../scripts/interfaces';
import { useEffect, useState } from 'react';

export const defaultSettings: SettingsInterface = {
  language: Languages.eng,
  theme: Themes.dark,
} as const;

export const useSettings = (): [
  SettingsInterface,
  React.Dispatch<React.SetStateAction<SettingsInterface>>
] => {
  const [settings, setSettings] = useState<SettingsInterface>(defaultSettings);
  let [readyToSave, setReadyToSave] = useState<boolean>(false);

  useEffect(() => {
    const loadSettings = (): void => {
      try {
        const savedSettings: SettingsInterface = JSON.parse(
          localStorage.getItem('settings') || '{}'
        );
        if (
          typeof savedSettings === 'object' &&
          typeof savedSettings.language === 'number' &&
          typeof savedSettings.theme === 'number'
        ) {
          setSettings(savedSettings as SettingsInterface);
        } else throw new Error('Incorrect saved settings');
      } catch (err) {
      } finally {
        setReadyToSave(true);
      }
    };
    loadSettings();
  }, []);

  useEffect(() => {
    const saveSettings = (): void => {
      if (readyToSave) localStorage.setItem('settings', JSON.stringify(settings));
    };
    saveSettings();
  }, [settings]);

  return [settings, setSettings];
};
