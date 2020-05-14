import { useContext } from 'react';
import { get } from 'lodash';
import { LocaleContext } from '../context/LocaleContext';
import strings from '../translations/strings';
import { defaultLocale } from '../translations/config';

export default function useTranslation() {
  const { locale } = useContext(LocaleContext);

  function t(key: string) {
    const translation = get(strings[locale], key);
    if (!translation) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }
    return translation || get(strings[defaultLocale], key) || '';
  }
  return { t, locale };
}
