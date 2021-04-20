import React from 'react'
import { Logo } from '@components/atoms'
import { render } from '@testing-library/react'

describe('<Logo />', () => {
  it('should pass classnames props', () => {
    const classNames = 'test class names'
    const { getByTestId } = render(<Logo className={classNames} />)
    expect(getByTestId('logo')?.className.includes(classNames)).toBeTruthy()
  })
})
