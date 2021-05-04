import React, { FC } from 'react'
import { Post } from '@data'
import { simpleDateFormat } from '@utils'
import classNames from 'classnames'
import { MdVisibility } from 'react-icons/md'

export type PostCardProps = React.HTMLAttributes<HTMLDivElement> & {
  readonly post: Post
}

export const PostCard: FC<PostCardProps> = ({ post, ...rest }) => (
  <div
    className={classNames('p-2 flex flex-col bg-react dark:bg-react-dark rounded-lg text-white')}
    {...rest}
  >
    <div className="w-full flex flex-row justify-between">
      <div>{post.title}</div>
      <div className="flex flex-row items-center">
        <MdVisibility className="mr-1" />
        <div>{post.views}</div>
      </div>
    </div>

    <div className="text-right mt-2">{simpleDateFormat(post.createdAt)}</div>
  </div>
)
