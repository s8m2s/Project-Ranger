import { IntlConfig } from '@wpro/lavanda'
import enUSTranslations from './en-US.json'

export const intlConfig: IntlConfig[] = [
  {
    code: 'en-US',
    title: 'English',
    keys: {
      ...enUSTranslations,
    },
    translationKey: 'locale.title.en-US',
  },
]
