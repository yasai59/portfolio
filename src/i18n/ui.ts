import {en, es, ca, ja} from './langs'

export const languages = {
  en: "English",
  es: "Español",
  ca: "Català",
  ja: "日本語",
};

export const defaultLang = "en";

export const ui = {
  en,
  es,
  ca,
  ja,
} as const;
