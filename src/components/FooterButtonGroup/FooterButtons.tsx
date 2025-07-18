import cls from 'classnames'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { BiMoon, BiSun } from 'react-icons/bi'
import { IoLanguage, IoLogoGithub } from 'react-icons/io5'
import { useColorScheme } from '@/hooks/useColorScheme'
import './style.css'

export const DarkModeButton: FC = () => {
  const { isDark, isLight, setColorScheme } = useColorScheme()

  return (
    <>
      <BiMoon onClick={() => setColorScheme('dark')} className={cls('footer-button', { hidden: isDark })} />
      <BiSun onClick={() => setColorScheme('light')} className={cls('footer-button', { hidden: isLight })} />
    </>
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
