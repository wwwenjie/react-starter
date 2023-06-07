import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ReactComponent as LogoSVG } from '@assets/logo.svg'
import { Button } from '@components/Button'
import { FooterButtonGroup } from '@components/FooterButtonGroup'
import { Link } from '@components/Link'

export const Landing: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleDataButtonClick = () => {
    navigate('/hitokoto')
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <LogoSVG className="pointer-events-none h-[40vmin] animate-spin-slow fill-current text-primary dark:text-primary-dark" />
      <p>{t('desc')}</p>
      <Button className="my-2" onClick={handleDataButtonClick}>
        {t('dataFetchingExample')}
      </Button>
      <FooterButtonGroup />
      <p>
        <Link href="https://beta.reactjs.org/">{t('learn')} React</Link>
        {' | '}
        <Link href="https://vitejs.dev/guide/features.html">Vite {t('docs')}</Link>
        {' | '}
        <Link href="https://tailwindcss.com/docs">Tailwind {t('docs')}</Link>
      </p>
    </div>
  )
}
