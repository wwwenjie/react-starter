import translation from '@/locales/en/translation.json'
import 'react-i18next'

declare module 'react-i18next' {
  interface Resources {
    readonly translation: typeof translation
  }
}
