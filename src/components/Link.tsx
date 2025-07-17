import cls from 'classnames'
import React, { FC } from 'react'

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  readonly href: string
}

export const Link: FC<LinkProps> = ({ children, href, className }) => (
  <a
    className={cls('text-primary dark:text-primary-dark', className)}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)
