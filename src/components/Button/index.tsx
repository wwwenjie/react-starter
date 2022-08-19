import React, { FC } from 'react'
import './style.css'
import cls from 'classnames'
import { AiOutlineLoading } from 'react-icons/ai'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  readonly loading?: boolean
}

export const Button: FC<ButtonProps> = ({ className, loading, disabled, children, ...rest }) => (
  <button className={cls('btn', className)} disabled={loading || disabled} {...rest}>
    {loading && <AiOutlineLoading className="mr-2 -ml-1 h-4 w-4 animate-spin" />}
    {children}
  </button>
)
