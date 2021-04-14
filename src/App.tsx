import React, { FC } from 'react'
import { Description, Logo } from '@components/atoms'
import { FooterButtonGroup, LinkGroup } from '@components/molecules'

const App: FC = () => (
  <div className="font-sans min-h-[100vh] flex flex-col items-center justify-center bg-[#282c34] dark:bg-black text-base md:text-2xl text-white">
    <Logo />
    <Description />
    <FooterButtonGroup className="my-2 flex flex-row" />
    <LinkGroup />
  </div>
)

export default App
