import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const Description: FC = () => {
  const { t } = useTranslation()

  return <p>{t('desc')}</p>
}
