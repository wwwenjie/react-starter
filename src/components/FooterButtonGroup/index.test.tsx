import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import i18n from '@/locales/i18n'
import { LanguageButton } from './FooterButtons'

describe('<FooterButtons />', () => {
  afterEach(() => {
    localStorage.clear()
  })

  it('<LanguageButton /> should change language when click', () => {
    const { container } = render(<LanguageButton />)

    expect(i18n.language).toBe('en')

    const button = container.querySelector('svg') as SVGSVGElement

    fireEvent.click(button)
    expect(i18n.language).toBe('zhCN')

    fireEvent.click(button)
    expect(i18n.language).toBe('en')
  })
})
