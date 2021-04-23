import useSWR from 'swr'

export type Post = {
  readonly title: string
  readonly views: number
  readonly published: boolean
  readonly createdAt: Date
}

export const usePosts = () => {
  const { data, error } = useSWR<readonly Post[]>('posts')

  return {
    data,
    loading: !error && !data,
    error,
  }
}

export const usePost = (postId: number) => {
  const { data, error } = useSWR<Post>(`posts/${postId}`, {
    dedupingInterval: 600,
  })

  return {
    data,
    loading: !error && !data,
    error,
  }
}
