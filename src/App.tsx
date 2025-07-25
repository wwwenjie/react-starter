import { StyleProvider } from '@ant-design/cssinjs'
import { App as AntApp, ConfigProvider as AntConfigProvider, theme as AntTheme } from 'antd'
import { FC } from 'react'
import { I18nextProvider } from 'react-i18next'
import { RouterProvider } from 'react-router-dom'
import { SWRConfig as SWRConfigProvider } from 'swr'
import { COLORS } from '@/constants/colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import i18n from '@/locales/i18n'
import { router } from '@/routes'

const App: FC = () => {
  const { isDark } = useColorScheme()

  return (
    <I18nextProvider i18n={i18n}>
      <SWRConfigProvider
        // https://swr.vercel.app/docs/global-configuration
        value={{
          shouldRetryOnError: false,
          revalidateOnFocus: import.meta.env.PROD,
        }}
      >
        <StyleProvider layer>
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
