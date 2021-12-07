import React, { FC } from 'react'
import { Link } from '@components/atoms'
import { useTranslation } from 'react-i18next'

export const LinkGroup: FC = () => {
  const { t } = useTranslation()

  return (
    <p>
      <Link href="https://beta.reactjs.org/">{t('learn')} React</Link>
      {' | '}
      <Link href="https://vitejs.dev/guide/features.html">Vite {t('docs')}</Link>
      {' | '}
      <Link href="https://tailwindcss.com/docs">Tailwind {t('docs')}</Link>
    </p>
  )
}
