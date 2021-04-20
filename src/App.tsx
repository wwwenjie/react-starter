import React, { FC } from 'react'
import AppRouter from '@AppRouter'

console.log('invoke CI')

const App: FC = () => (
  <div className="app-body">
    <AppRouter />
  </div>
)

export default App
