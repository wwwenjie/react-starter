import React, { FC } from 'react'
import { Button, Logo } from '@components/atoms'
import { FooterButtonGroup, LinkGroup } from '@components/molecules'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const Landing: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleDataButtonClick = () => {
    navigate('/hitokoto')
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Logo />
      <p>{t('desc')}</p>
      <Button className="my-2" onClick={handleDataButtonClick}>
        {t('dataFetchingExample')}
      </Button>
      <FooterButtonGroup />
      <LinkGroup />
    </div>
  )
}
