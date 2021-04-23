import React, { FC } from 'react'
import './style.css'
import { BiSun, BiMoon } from 'react-icons/bi'
import { IoLanguage, IoLogoGithub } from 'react-icons/io5'
import { useDark } from '@hooks'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

export const DarkModeButton: FC = () => {
  const { isDark, toggleDark } = useDark()

  return (
    <>
      <BiMoon
        data-testid="moon-button"
        onClick={toggleDark}
        className={classNames('footer-button', { hidden: !isDark })}
      />
      <BiSun
        data-testid="sun-button"
        onClick={toggleDark}
        className={classNames('footer-button', { hidden: isDark })}
      />
    </>
  )
}

export const LanguageButton: FC = () => {
  const { i18n } = useTranslation()
  const locales = Object.keys(i18n.store.data)

  const handleLanguageClick = async () => {
    await i18n.changeLanguage(locales[(locales.indexOf(i18n.language) + 1) % locales.length])
  }

  return (
    <IoLanguage
      data-testid="language-button"
      onClick={handleLanguageClick}
      className="footer-button"
    />
  )
}

export const GitHubButton: FC = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/wwwenjie/react-starter', '_blank')
  }

  return (
    <IoLogoGithub
      data-testid="github-button"
      onClick={handleGitHubClick}
      className="footer-button"
    />
  )
}
