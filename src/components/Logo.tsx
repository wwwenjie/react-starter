import React, { FC } from 'react'
import { Logo as LogoSVG } from '@assets'
import cls from 'classnames'

export type LogoProps = React.SVGProps<SVGSVGElement>

export const Logo: FC<LogoProps> = ({ className, ...rest }) => (
  <LogoSVG
    className={cls(
      'h-[40vmin] pointer-events-none animate-spin-slow fill-current text-react dark:text-react-dark',
      className,
    )}
    {...rest}
  />
)
