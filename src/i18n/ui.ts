import {en, es, ca, jp} from './langs'

export const languages = {
  en: "English",
  es: "Español",
  ca: "Català",
  jp: "日本語",
};

export const defaultLang = "en";

export const ui = {
  en,
  es,
  ca,
  jp,
} as const;
