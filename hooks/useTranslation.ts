import { useContext } from 'react';
import { get } from 'lodash';
import { LocaleContext } from '../context/LocaleContext';
import strings from '../translations/strings';
import { defaultLocale } from '../translations/config';

export default function useTranslation() {
  const { locale } = useContext(LocaleContext);

  function t(key: string): string {
    const translation = get(strings[locale], key) as unknown as string;
    if (!translation) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }
    return translation || get(strings[defaultLocale] as unknown as string, key) || '';
  }
  return { t, locale };
}
