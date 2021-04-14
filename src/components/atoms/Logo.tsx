import React, { FC } from 'react'
import { Logo as LogoSVG } from '@assets'
import classNames from 'classnames'

export type LogoProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'>

export const Logo: FC<LogoProps> = ({ className, alt = 'logo' }) => (
  <img
    src={LogoSVG}
    className={classNames('h-[40vmin] pointer-events-none animate-spin-slow', className)}
    alt={alt}
  />
)
