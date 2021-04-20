import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { DarkModeButton, GitHubButton, LanguageButton } from '@components/atoms'
import i18n from '@locales/i18n'
import { handleMatchMedia } from '@utils'

describe('<FooterButtons />', () => {
  it('<DarkModeButton /> should change color scheme when click', () => {
    handleMatchMedia()
    render(<DarkModeButton />)

    // button will change due to color-scheme change
    const button = () => screen.getByTestId('dark-button')

    expect(localStorage.getItem('color-scheme')).toStrictEqual('"auto"')

    fireEvent.click(button())
    expect(localStorage.getItem('color-scheme')).toStrictEqual('"dark"')

    fireEvent.click(button())
    expect(localStorage.getItem('color-scheme')).toStrictEqual('"light"')
  })

  it('<LanguageButton /> should change language when click', () => {
    render(<LanguageButton />)

    expect(i18n.language).toBe('en')

    const button = screen.getByTestId('language-button')

    fireEvent.click(button)
    expect(i18n.language).toBe('zhCN')

    fireEvent.click(button)
    expect(i18n.language).toBe('en')
  })

  it('<GitHubButton /> should open new window when click', () => {
    render(<GitHubButton />)

    Object.assign(window, { open: jest.fn() })

    const button = screen.getByTestId('github-button')

    fireEvent.click(button)
    expect(window.open).toBeCalled()
  })
})
