import React from 'react'
import { render } from '@testing-library/react'
import { Description } from '@components/atoms'
import { I18nextProvider } from 'react-i18next'
import i18n from '@locales/i18n'

describe('<Description />', () => {
  it('should render description', () => {
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <Description />
      </I18nextProvider>,
    )

    expect(getByText('Opinionated React Starter Template')).toBeInTheDocument()
  })

  it('should render chinese description when change language to zhCN', () => {
    i18n.changeLanguage('zhCN')
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <Description />
      </I18nextProvider>,
    )

    expect(getByText('固执己见的 React 起手式模版')).toBeInTheDocument()
  })
})
