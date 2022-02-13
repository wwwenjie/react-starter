import React from 'react'
import { render } from '@testing-library/react'
import { Button } from '@components/atoms'

describe('<Button />', () => {
  it('should have show loading icon when loading is true', () => {
    const { container } = render(<Button loading />)

    expect(container.querySelector('svg')).toBeTruthy()
  })

  it('should have hide loading icon when loading is false', () => {
    const { container } = render(<Button loading={false} />)

    expect(container.querySelector('svg')).toBeFalsy()
  })
})
