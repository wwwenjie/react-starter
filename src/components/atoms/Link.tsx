import React, { FC } from 'react'

export type LinkProps = {
  readonly href: string
}

export const Link: FC<LinkProps> = ({ children, href }) => (
  <a
    className="text-react dark:text-react-dark"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)
