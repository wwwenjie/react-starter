import { App as AntApp, ConfigProvider as AntConfigProvider, theme } from 'antd'
import React, { FC } from 'react'
import { I18nextProvider } from 'react-i18next'
import { RouterProvider } from 'react-router-dom'
import { SWRConfig as SWRConfigProvider } from 'swr'
import { StyleProvider } from '@ant-design/cssinjs'
import { get } from '@/api/fetcher'
import { COLORS } from '@/constants/colors'
import i18n from '@/locales/i18n'
import { router } from '@/routes'
import { useDark } from '@/hooks/useDark.ts'

const App: FC = () => {
  const { isDark } = useDark()

  return (
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
            token: {
              colorPrimary: isDark ? COLORS.PRIMARY_DARK : COLORS.PRIMARY,
              colorText: isDark ? COLORS.TEXT_DARK : COLORS.TEXT,
            },
          }}
        >
          <StyleProvider hashPriority="high">
            <AntApp>
              <RouterProvider router={router} />
            </AntApp>
          </StyleProvider>
        </AntConfigProvider>
      </SWRConfigProvider>
    </I18nextProvider>
  )
}

export default App
