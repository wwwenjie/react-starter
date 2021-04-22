import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { DarkModeButton, GitHubButton, LanguageButton } from '@components/atoms'
import i18n from '@locales/i18n'
import { handleMatchMedia } from '@utils'
import { ColorScheme } from '@hooks'

describe('<FooterButtons />', () => {
  beforeEach(() => {
    handleMatchMedia()
  })

  afterEach(() => {
    localStorage.clear()
  })

  const expectColorScheme = (colorScheme: ColorScheme) => {
    expect(JSON.parse(localStorage.getItem('color-scheme') || '')).toStrictEqual(colorScheme)
  }

  it('<DarkModeButton /> should change color scheme when click', () => {
    render(<DarkModeButton />)

    const moonButton = screen.getByTestId('moon-button')

    const sunButton = screen.getByTestId('sun-button')

    expectColorScheme('auto')

    fireEvent.click(sunButton)
    expectColorScheme('dark')

    fireEvent.click(moonButton)
    expectColorScheme('light')
  })

  it('<DarkModeButton /> should hide moon button when color scheme is auto and light', () => {
    render(<DarkModeButton />)

    const moonButton = screen.getByTestId('moon-button')

    expectColorScheme('auto')
    expect(moonButton).toHaveClass('hidden')

    fireEvent.click(moonButton)
    expectColorScheme('dark')

    fireEvent.click(moonButton)
    expectColorScheme('light')

    expect(moonButton).toHaveClass('hidden')
  })

  it('<DarkModeButton /> should hide sun button when color scheme is dark', () => {
    render(<DarkModeButton />)

    const sunButton = screen.getByTestId('sun-button')

    expectColorScheme('auto')

    fireEvent.click(sunButton)
    expectColorScheme('dark')

    expect(sunButton).toHaveClass('hidden')
  })

  it('<DarkModeButton /> should show sun button when color scheme is auto and light', () => {
    render(<DarkModeButton />)

    const sunButton = screen.getByTestId('sun-button')

    expectColorScheme('auto')
    expect(sunButton.hidden).toBeFalsy()

    fireEvent.click(sunButton)
    expectColorScheme('dark')

    fireEvent.click(sunButton)
    expectColorScheme('light')

    expect(sunButton.hidden).toBeFalsy()
  })

  it('<DarkModeButton /> should show moon button when color scheme is dark', () => {
    render(<DarkModeButton />)

    const moonButton = screen.getByTestId('moon-button')

    expectColorScheme('auto')

    fireEvent.click(moonButton)
    expectColorScheme('dark')

    expect(moonButton.hidden).toBeFalsy()
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
