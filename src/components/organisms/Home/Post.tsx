import React, { FC } from 'react'
import { usePosts } from '@data'
import { Button } from '@components/atoms'
import { useHistory } from 'react-router-dom'
import { FooterButtonGroup, PostCard } from '@components/molecules'
import { useTranslation } from 'react-i18next'

export const Post: FC = () => {
  const { t } = useTranslation()
  const { data: posts, loading, error } = usePosts()
  const history = useHistory()

  const handleBackClick = () => {
    history.goBack()
  }

  return (
    <div className="flex flex-col items-center justify-center m-4 md:m-12 lg:m-24">
      {loading && <div>Loading...</div>}
      {/* usually error could be handle in axios like show a message, but feel free if you want to add error display when request error */}
      {error && <div>Error</div>}
      <div className="w-full px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts?.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </div>
      <Button className="my-4" onClick={handleBackClick}>
        {t('goBack')}
      </Button>
      <FooterButtonGroup />
    </div>
  )
}
