import { FooterButtonGroup } from '@components'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const NotFound: FC = () => {
  const { t } = useTranslation()

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="text-2xl">404</div>
      <div>{t('notFound')}</div>
      <FooterButtonGroup />
    </div>
  )
}
