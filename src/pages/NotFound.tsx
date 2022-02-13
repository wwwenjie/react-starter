import React, { FC } from 'react'
import { FooterButtonGroup } from '@components/molecules'
import { useTranslation } from 'react-i18next'

export const NotFound: FC = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="text-2xl">404</div>
      <div>{t('notFound')}</div>
      <FooterButtonGroup />
    </div>
  )
}
