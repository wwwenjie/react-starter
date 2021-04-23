import React, { FC } from 'react'
import { Description, Logo } from '@components/atoms'
import { FooterButtonGroup, LinkGroup } from '@components/molecules'

export const Landing: FC = () => (
  <div className="h-screen flex flex-col items-center justify-center">
    <Logo />
    <Description />
    <FooterButtonGroup />
    <LinkGroup />
  </div>
)
