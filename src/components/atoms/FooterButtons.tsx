import React, { FC } from 'react'
import { BiSun, BiMoon } from 'react-icons/bi'
import { IoLanguage, IoLogoGithub } from 'react-icons/io5'
import { useDark } from '@hooks'
import { useTranslation } from 'react-i18next'
import './FooterButtons.css'

export const DarkModeButton: FC = () => {
  const { isDark, toggleDark } = useDark()

  return isDark ? (
    <BiMoon onClick={toggleDark} className="footer-button" />
  ) : (
    <BiSun onClick={toggleDark} className="footer-button" />
  )
}

export const LanguageButton: FC = () => {
  const { i18n } = useTranslation()
  const locales = Object.keys(i18n.store.data)

  const handleLanguageClick = async () => {
    await i18n.changeLanguage(locales[(locales.indexOf(i18n.language) + 1) % locales.length])
  }

  return <IoLanguage onClick={handleLanguageClick} className="footer-button" />
}

export const GitHubButton: FC = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/wwwenjie/react-starter', '_blank')
  }

  return <IoLogoGithub onClick={handleGitHubClick} className="footer-button" />
}
