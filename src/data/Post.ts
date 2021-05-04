import useSWR from 'swr'
import { hours2Milliseconds, minutes2Milliseconds } from '@utils'

export type Post = {
  readonly title: string
  readonly views: number
  readonly published: boolean
  readonly createdAt: Date
}

export const usePosts = () => {
  const { data, error } = useSWR<readonly Post[]>('posts?limit=10', {
    // you can use dedupingInterval to cache result, when new request with same key, swr will take result from cache
    dedupingInterval: minutes2Milliseconds(10),
  })

  return {
    data,
    loading: !error && !data,
    error,
  }
}

export const usePost = (postId: number) => {
  const { data, error } = useSWR<Post>(`posts/${postId}`, {
    dedupingInterval: hours2Milliseconds(12),
  })

  return {
    data,
    loading: !error && !data,
    error,
  }
}
