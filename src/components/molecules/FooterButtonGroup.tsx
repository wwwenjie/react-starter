import React, { FC } from 'react'
import { DarkModeButton, GitHubButton, LanguageButton } from '@components/atoms'
import classNames from 'classnames'

export const FooterButtonGroup: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => (
  <div className={classNames('my-2 flex flex-row', className)} {...rest}>
    <DarkModeButton />
    <LanguageButton />
    <GitHubButton />
  </div>
)
