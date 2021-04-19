import 'react-i18next'
import translation from '@locales/en/translation.json'

declare module 'react-i18next' {
  // eslint-disable-next-line functional/prefer-type-literal
  interface Resources {
    readonly translation: typeof translation
  }
}
