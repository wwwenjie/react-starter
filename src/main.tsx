import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@ant-design/v5-patch-for-react-19'
import '@/styles/tailwind.css'
import '@/styles/main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
