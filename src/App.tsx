import React, { FC } from 'react'
import AppRouter from '@AppRouter'
import { SWRConfig as SWRConfigProvider } from 'swr'
import { get } from '@api'
import { I18nextProvider } from 'react-i18next'
import i18n from '@locales/i18n'
import { ConfigProvider as AntConfigProvider, theme } from 'antd'

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
      <AntConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <AppRouter />
      </AntConfigProvider>
    </SWRConfigProvider>
  </I18nextProvider>
)

export default App
