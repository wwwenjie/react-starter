import React, { FC } from 'react'
import { Logo } from '@components/atoms'
import { FooterButtonGroup, LinkGroup } from '@components/molecules'

export const Landing: FC = () => (
  <div className="font-sans min-h-[100vh] flex flex-col items-center justify-center bg-[#282c34] dark:bg-black text-base md:text-2xl text-white">
    <Logo />
    <p>Opinionated React Starter Template</p>
    <FooterButtonGroup className="my-2 flex flex-row" />
    <LinkGroup />
  </div>
)
