import React, { FC } from 'react'
import { useHitokoto } from '@api'
import { Button, Link } from '@components/atoms'
import { useNavigate } from 'react-router-dom'
import { FooterButtonGroup, HitokotoCard } from '@components/molecules'
import { Trans, useTranslation } from 'react-i18next'
import classNames from 'classnames'

export const Hitokoto: FC = () => {
  const { t } = useTranslation()
  const { data: hitokoto, loading, error } = useHitokoto()
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <div className="flex flex-col items-center justify-center m-4 md:m-12 lg:m-24">
      {loading && <div>Loading...</div>}
      {/* usually error could be handle in axios like show a message, but feel free if you want to add error display when request error */}
      {error && <div>Error</div>}
      <div className={classNames('w-full lg:w-[70vw] xl:w-[50vw]', { hidden: loading })}>
        <HitokotoCard hitokoto={hitokoto} />
      </div>
      <div className={classNames('mt-4', { hidden: loading })}>{t('requestCacheInfo')}</div>
      <div className={classNames({ hidden: loading })}>
        <Trans i18nKey="learnMore" components={{ docs: <Link href="https://swr.vercel.app" /> }} />
      </div>
      <Button className="my-4" onClick={handleBackClick}>
        {t('goBack')}
      </Button>
      <FooterButtonGroup />
    </div>
  )
}
