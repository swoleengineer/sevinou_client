import { Strings } from './types';

import * as en from './en';
import * as fr from './fr';
import * as ht from './ht';

const strings: Strings = {
  ht: {
    common: ht.common
  },
  fr: {
    common: fr.common
  },
  en: {
    common: en.common
  }
}
console.log({ strings });
export default strings;
