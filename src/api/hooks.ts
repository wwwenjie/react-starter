import { isMatch } from 'lodash-es'
import { createImmutableHook, createInfiniteHook, createMutateHook, createQueryHook } from 'swr-openapi'
import { client } from './client'

const prefix = 'my-api'

export const useQuery = createQueryHook(client, prefix)
export const useImmutable = createImmutableHook(client, prefix)
export const useInfinite = createInfiniteHook(client, prefix)
export const useMutate = createMutateHook(
  client,
  prefix,
  isMatch,
)
