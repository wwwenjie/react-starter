import React, { FC } from 'react'
import { Button, FooterButtonGroup, Link, Logo } from '@components'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const Landing: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleDataButtonClick = () => {
    navigate('/hitokoto')
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Logo />
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
