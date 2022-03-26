import useSWR from 'swr'
import { minutes2Milliseconds } from '@utils'

export type Hitokoto = {
  readonly id: string
  readonly hitokoto: string
  readonly from: string
  readonly from_who: string
}

export const useHitokoto = () => {
  const { data, error, isValidating, mutate } = useSWR<Hitokoto>('/', {
    dedupingInterval: minutes2Milliseconds(1),
  })

  return {
    data,
    error,
    loading: isValidating,
    mutate,
  }
}
