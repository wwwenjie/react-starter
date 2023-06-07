import React, { FC } from 'react'
import { Button as AntButton, ButtonProps } from 'antd'

export const Button: FC<ButtonProps> = (props) => <AntButton {...props} />
