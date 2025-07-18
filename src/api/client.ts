import { message } from 'antd'
import { t } from 'i18next'
import createClient, { Middleware } from 'openapi-fetch'
import { paths } from './api'

const client = createClient<paths>({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
})

const middleware: Middleware = {
  async onRequest({ request }) {
    return request
  },
  async onResponse({ response }) {
    if (!response.ok) {
      message.error(t('requestFailed'))
      return Promise.reject(response)
    }
    return response
  },
}

client.use(middleware)

export { client }
