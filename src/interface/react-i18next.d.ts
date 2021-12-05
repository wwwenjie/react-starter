import 'react-i18next'
import translation from '@locales/en/translation.json'

declare module 'react-i18next' {
  interface Resources {
    readonly translation: typeof translation
  }
}
