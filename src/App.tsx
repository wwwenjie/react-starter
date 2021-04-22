import React, { FC } from 'react'
import AppRouter from '@AppRouter'
import { SWRConfig as SWRConfigProvider } from 'swr'
import { get } from '@data'

const App: FC = () => (
  <SWRConfigProvider
    // https://swr.vercel.app/docs/global-configuration
    value={{
      fetcher: get,
      shouldRetryOnError: false,
      revalidateOnFocus: false,
    }}
  >
    <div className="app-body">
      <AppRouter />
    </div>
  </SWRConfigProvider>
)

export default App
