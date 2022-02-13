import React, { FC } from 'react'
import { Hitokoto } from '@api'
import cls from 'classnames'

export type PostCardProps = React.HTMLAttributes<HTMLDivElement> & {
  readonly hitokoto?: Hitokoto
}

export const HitokotoCard: FC<PostCardProps> = ({ hitokoto, ...rest }) => (
  <div className={cls('p-2 lg:p-8 bg-react dark:bg-react-dark rounded-lg text-white')} {...rest}>
    <div className="flex flex-col w-full">
      <div>{hitokoto?.hitokoto}</div>
      <div className="self-end">{hitokoto?.from}</div>
    </div>
  </div>
)
