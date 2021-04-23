import React, { FC } from 'react'
import { Button, Description, Logo } from '@components/atoms'
import { FooterButtonGroup, LinkGroup } from '@components/molecules'
import { useHistory } from 'react-router-dom'

export const Landing: FC = () => {
  const history = useHistory()

  const handleDataButtonClick = () => {
    history.push('post')
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Logo />
      <Description />
      <Button className="my-2" onClick={handleDataButtonClick}>
        Data fetching example
      </Button>
      <FooterButtonGroup />
      <LinkGroup />
    </div>
  )
}
