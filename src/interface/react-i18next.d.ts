import 'react-i18next'
import translation from '@locales/en/translation.json'

declare module 'react-i18next' {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  type Resources = {
    readonly translation: typeof translation
  }
}
