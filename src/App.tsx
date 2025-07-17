import { StyleProvider } from '@ant-design/cssinjs'
import { App as AntApp, ConfigProvider as AntConfigProvider, theme as AntTheme } from 'antd'
import React, { FC } from 'react'
import { I18nextProvider } from 'react-i18next'
import { RouterProvider } from 'react-router-dom'
import { SWRConfig as SWRConfigProvider } from 'swr'
import { get } from '@/api/fetcher'
import { COLORS } from '@/constants/colors'
import { useTheme } from '@/hooks/useTheme'
import i18n from '@/locales/i18n'
import { router } from '@/routes'

const App: FC = () => {
  const { isDark } = useTheme()

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
        <StyleProvider hashPriority="high" layer>
          <AntConfigProvider
            theme={{
              algorithm: AntTheme.darkAlgorithm,
              token: {
                colorPrimary: isDark ? COLORS.PRIMARY_DARK : COLORS.PRIMARY,
                colorText: isDark ? COLORS.TEXT_DARK : COLORS.TEXT,
              },
            }}
          >
            <AntApp>
              <RouterProvider router={router} />
            </AntApp>
          </AntConfigProvider>
        </StyleProvider>
      </SWRConfigProvider>
    </I18nextProvider>
  )
}

export default App
