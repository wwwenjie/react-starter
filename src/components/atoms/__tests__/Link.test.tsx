import React from 'react'
import { render } from '@testing-library/react'
import { Link } from '@components/atoms'

describe('<Link />', () => {
  it('should render href and children', () => {
    const href = 'https://test.com'
    const children = 'children'
    const { getByText } = render(<Link href={href}>{children}</Link>)

    expect(getByText(children)).toHaveAttribute('href', href)
  })

  it('should render JSX children', () => {
    const href = 'https://test.com'
    const children = <h1>Children</h1>
    const { container } = render(<Link href={href}>{children}</Link>)

    expect(container.querySelector('h1')).toBeInTheDocument()
  })
})
