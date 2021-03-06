import React, { FC } from 'react'
import { useHitokoto } from '@api'
import { Button, FooterButtonGroup, Link } from '@components'
import { useNavigate } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'
import cls from 'classnames'
import { HitokotoCard } from './HitokotoCard'

export const Hitokoto: FC = () => {
  const { t } = useTranslation()
  const { data: hitokoto, loading, error, mutate } = useHitokoto()
  const navigate = useNavigate()

  return (
    <div className="flex flex-col justify-center items-center m-4 md:m-12 lg:m-24">
      {loading && <div>Loading...</div>}
      {/* usually error could be handle in axios like show a message, but feel free if you want to add error display when request error */}
      {error && <div>Error</div>}
      <div className={cls('w-full lg:w-[70vw] xl:w-[50vw]', { hidden: loading })}>
        <HitokotoCard hitokoto={hitokoto} />
      </div>
      <div className={cls('mt-4', { hidden: loading })}>{t('requestCacheInfo')}</div>
      <div className={cls({ hidden: loading })}>
        <Trans i18nKey="learnMore" components={{ docs: <Link href="https://swr.vercel.app" /> }} />
      </div>
      <div className="flex gap-2">
        <Button
          className="my-4"
          onClick={() => {
            mutate()
          }}
        >
          {t('refresh')}
        </Button>
        <Button
          className="my-4"
          onClick={() => {
            navigate(-1)
          }}
        >
          {t('goBack')}
        </Button>
      </div>
      <FooterButtonGroup />
    </div>
  )
}
