import React, { FC } from 'react'
import { Logo as LogoSVG } from '@assets'
import classNames from 'classnames'

export type LogoProps = React.SVGProps<SVGSVGElement>

export const Logo: FC<LogoProps> = ({ className, ...rest }) => (
  <LogoSVG
    data-testid="logo"
    className={classNames(
      'h-[40vmin] pointer-events-none animate-spin-slow fill-current text-react dark:text-react-dark',
      className,
    )}
    {...rest}
  />
)
