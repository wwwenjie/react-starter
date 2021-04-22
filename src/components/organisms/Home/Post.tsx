import React, { FC } from 'react'
import { usePost } from '@data'

export const Post: FC = () => {
  const { data: post, loading, error } = usePost(1)

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {loading && <div>Loading...</div>}
      {/* usually error could be handle in axios like show a message, but feel free if you want to add error display when request error */}
      {error && <div>Error</div>}
      <div>{post?.title}</div>
    </div>
  )
}
