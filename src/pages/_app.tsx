import React from 'react'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'


export default function Nextra({ Component, pageProps }: AppProps) {
  const router = useRouter()
  let htmlElement: HTMLHtmlElement | null = null
  let headerContainer: HTMLDivElement | null = null
  let themeButton: HTMLButtonElement | null = null

  const setLightOrDarkMode = (mode: 'light' | 'dark') => {
    if (!htmlElement) return

    htmlElement.setAttribute('style', `color-scheme: ${mode}`)
    htmlElement.classList.remove(mode === 'dark' ? 'light' : 'dark')
    htmlElement.classList.add(mode)
  }

  if (typeof window !== 'undefined') {
    htmlElement = window?.document?.querySelector('html')
    headerContainer = window?.document?.querySelector('.nextra-nav-container')
    themeButton = window?.document?.querySelector('button[title="Change theme"]')
  }

  return <Component {...pageProps} />
}