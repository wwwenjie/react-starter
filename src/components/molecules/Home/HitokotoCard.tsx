import React, { FC } from 'react'
import { Hitokoto } from '@api'
import classNames from 'classnames'

export type PostCardProps = React.HTMLAttributes<HTMLDivElement> & {
  readonly hitokoto?: Hitokoto
}

export const HitokotoCard: FC<PostCardProps> = ({ hitokoto, ...rest }) => (
  <div
    className={classNames('p-2 lg:p-8 bg-react dark:bg-react-dark rounded-lg text-white')}
    {...rest}
  >
    <div className="w-full flex flex-col">
      <div>{hitokoto?.hitokoto}</div>
      <div className="self-end">{hitokoto?.from}</div>
    </div>
  </div>
)
