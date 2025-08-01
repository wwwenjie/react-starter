import { Card, Spin } from 'antd'
import cls from 'classnames'
import React, { FC } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useHitokoto } from '@/api/hitokoto'
import { Button } from '@/components/Button'
import { FooterButtonGroup } from '@/components/FooterButtonGroup'
import { Link } from '@/components/Link'

export const Hitokoto: FC = () => {
  const { t } = useTranslation()
  const { data: hitokoto, isLoading, isValidating, error, mutate } = useHitokoto()
  const navigate = useNavigate()

  return (
    <div className="m-4 flex flex-col items-center justify-center md:m-12 lg:m-24">
      {/* usually error could be handled in request like show a message, but feel free if you want to add error display when request error */}
      {error && <div>Error</div>}
      <div className={cls('w-full lg:w-[70vw] xl:w-[50vw]')}>
        <Card loading={isLoading}>
          <Spin spinning={isValidating}>
            <div className="flex flex-col">
              <div>{hitokoto?.hitokoto}</div>
              <div className="self-end">{hitokoto?.from}</div>
            </div>
          </Spin>
        </Card>
      </div>
      <div className={cls('mt-4', { hidden: isLoading })}>{t('requestCacheInfo')}</div>
      <div className={cls({ hidden: isLoading })}>
        <Trans i18nKey="learnMore" components={{ docs: <Link href="https://swr.vercel.app" /> }} />
      </div>
      <div className="my-4 flex gap-2">
        <Button
          onClick={() => {
            mutate()
          }}
        >
          {t('refresh')}
        </Button>
        <Button
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
