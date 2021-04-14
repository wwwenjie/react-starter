import React, { FC } from 'react'
import { DarkModeButton, GitHubButton, LanguageButton } from '@components/atoms'

export const FooterButtonGroup: FC<React.HTMLAttributes<HTMLDivElement>> = ({ ...rest }) => (
  <div {...rest}>
    <DarkModeButton />
    <LanguageButton />
    <GitHubButton />
  </div>
)
