import React from 'react'
import { render } from '@testing-library/react'
import { Button } from '@components/atoms'

describe('<Button />', () => {
  it('should have btn class name', () => {
    const { container } = render(<Button />)

    expect(container.querySelector('button')).toHaveClass('btn')
  })

  it('should have extend class name', () => {
    const { container } = render(<Button className="test" />)

    expect(container.querySelector('button')).toHaveClass('btn')
    expect(container.querySelector('button')).toHaveClass('test')
  })

  it('should have show loading icon when loading is true', () => {
    const { container } = render(<Button loading />)

    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('should have hide loading icon when loading is false', () => {
    const { container } = render(<Button loading={false} />)

    expect(container.querySelector('svg')).toBeFalsy()
  })
})
