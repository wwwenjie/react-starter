import { useQuery } from '@/api/hooks.ts'
import { minutes2Milliseconds } from '@/utils/date.ts'

export const useHitokoto = () =>
  useQuery('/', {}, { dedupingInterval: minutes2Milliseconds(1) })
