import cls from 'classnames'
import React, { FC } from 'react'
import { DarkModeButton, GitHubButton, LanguageButton } from './FooterButtons'

export const FooterButtonGroup: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => (
  <div className={cls('my-2 flex flex-row', className)} {...rest}>
    <DarkModeButton />
    <LanguageButton />
    <GitHubButton />
  </div>
)
