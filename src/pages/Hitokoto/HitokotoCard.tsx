import React, { FC } from 'react'
import { Hitokoto } from '@api'
import { Card } from 'antd'

export type PostCardProps = React.HTMLAttributes<HTMLDivElement> & {
  readonly hitokoto?: Hitokoto
}

export const HitokotoCard: FC<PostCardProps> = ({ hitokoto, ...rest }) => (
  <Card {...rest}>
    <div className="flex flex-col">
      <div>{hitokoto?.hitokoto}</div>
      <div className="self-end">{hitokoto?.from}</div>
    </div>
  </Card>
)
