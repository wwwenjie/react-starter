import useSWR from 'swr'
import { minutes2Milliseconds } from '@utils/date'

export type Hitokoto = {
  readonly id: string
  readonly hitokoto: string
  readonly from: string
  readonly from_who: string
}

export const useHitokoto = () =>
  useSWR<Hitokoto>('https://v1.hitokoto.cn', {
    dedupingInterval: minutes2Milliseconds(1),
  })
