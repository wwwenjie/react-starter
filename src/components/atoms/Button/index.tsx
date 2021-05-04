import React, { FC } from 'react'
import './style.css'
import classNames from 'classnames'
import { AiOutlineLoading } from 'react-icons/ai'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  readonly loading?: boolean
}

export const Button: FC<ButtonProps> = ({ className, loading, disabled, children, ...rest }) => (
  <button className={classNames('btn', className)} disabled={loading || disabled} {...rest}>
    {loading && <AiOutlineLoading className="animate-spin h-4 w-4 -ml-1 mr-2" />}
    {children}
  </button>
)
