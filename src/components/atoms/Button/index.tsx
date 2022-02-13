import React, { FC } from 'react'
import './style.css'
import classNames from 'classnames'
import { AiOutlineLoading } from 'react-icons/ai'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  readonly loading?: boolean
}

export const Button: FC<ButtonProps> = ({ className, loading, disabled, children, ...rest }) => (
  <button className={classNames('btn', className)} disabled={loading || disabled} {...rest}>
    {loading && <AiOutlineLoading className="mr-2 -ml-1 w-4 h-4 animate-spin" />}
    {children}
  </button>
)
