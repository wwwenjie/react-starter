import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { LanguageButton } from './FooterButtons'
import i18n from '@/locales/i18n'

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
