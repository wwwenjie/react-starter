import { ConfigProvider as AntConfigProvider, theme } from 'antd'
import React, { FC } from 'react'
import { I18nextProvider } from 'react-i18next'
import { RouterProvider } from 'react-router-dom'
import { SWRConfig as SWRConfigProvider } from 'swr'
import { get } from '@/api/fetcher'
import { COLORS } from '@/constants/colors'
import i18n from '@/locales/i18n'
import { router } from '@/routes'

const App: FC = () => (
  <I18nextProvider i18n={i18n}>
    <SWRConfigProvider
      // https://swr.vercel.app/docs/global-configuration
      value={{
        fetcher: get,
        shouldRetryOnError: false,
        revalidateOnFocus: import.meta.env.PROD,
      }}
    >
      <AntConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: { colorPrimary: COLORS.PRIMARY_DARK },
        }}
      >
        <RouterProvider router={router} />
      </AntConfigProvider>
    </SWRConfigProvider>
  </I18nextProvider>
)

export default App
