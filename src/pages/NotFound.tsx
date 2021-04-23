import React, { FC } from 'react'
import { FooterButtonGroup } from '@components/molecules'
import { useTranslation } from 'react-i18next'

export const NotFound: FC = () => {
  const { t } = useTranslation()

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="text-2xl">404</div>
      <div>{t('notFound')}</div>
      <FooterButtonGroup />
    </div>
  )
}
