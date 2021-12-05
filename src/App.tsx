import React, { FC } from 'react'
import AppRouter from '@AppRouter'
import { SWRConfig as SWRConfigProvider } from 'swr'
import { get } from '@api'
import { I18nextProvider } from 'react-i18next'
import i18n from '@locales/i18n'

const App: FC = () => (
  <I18nextProvider i18n={i18n}>
    <SWRConfigProvider
      // https://swr.vercel.app/docs/global-configuration
      value={{
        fetcher: get,
        shouldRetryOnError: false,
        // fixme: track https://github.com/kulshekhar/ts-jest/issues/1709
        revalidateOnFocus: import.meta.env.PROD,
      }}
    >
      <div className="app-body">
        <AppRouter />
      </div>
    </SWRConfigProvider>
  </I18nextProvider>
)

export default App
