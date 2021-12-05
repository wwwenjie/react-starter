import axios from 'axios'

export const fetcher = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
})

const onRequestError = async (error: any) => {
  // logic when request error
}

const onResponseError = async (error: any) => {
  if (error?.response?.status) {
    await onResponseStatus(error.response.status)
  }

  // logic when response error
}

const onResponseStatus = async (status: number) => {
  const statusMapper = new Map<number, () => void>()
    .set(401, () => {
      // redirect to login or anything you want
    })
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    .set(404, () => {})

  const func = statusMapper.get(status)
  if (func) {
    await func()
  }
}

fetcher.interceptors.request.use(
  (config) => config,
  async (error) => {
    await onRequestError(error)
    return Promise.reject(error)
  },
)

fetcher.interceptors.response.use(
  async (response) => response.data,
  async (error) => {
    await onResponseError(error)
    return Promise.reject(error)
  },
)

export const { get, post, patch, delete: deleteFetch } = fetcher
