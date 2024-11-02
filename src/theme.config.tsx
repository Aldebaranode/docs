import { useConfig } from 'nextra-theme-docs'
import React from 'react'

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  docsRepositoryBase:
    'https://github.com/aldebaranode/docs',
  editLink: {
    content: 'Edit this page on GitHub'
  },
  faviconGlyph: '✦',
  navs: [
    {
      url: 'https://github.com/aldebaranode/docs',
      name: 'Aldebaranode: Blockchain Guide & Docs'
    }
  ],
  logo: () => (
    <span>Aldebaranode: Blockchain Guide & Docs</span>
  ),
  head: () => {
    const config = useConfig()
    const title = `${config.title} – Aldebaranode Docs`
    const description =
      config.frontMatter.description || 'Aldebaranode: Blockchain Guide & Docs'
    const image = config.frontMatter.image || 'https://aldebaranode.com/assets/horizontal/colour-bg-black-horizontal.jpg'
    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="og:image" content={image} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-title" content="Nextra" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

        <link rel="icon" type="image/svg+xml" href="https://aldebaranode.xyz/assets/logo.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/svg+xml" href="https://aldebaranode.xyz/assets/logo.png" media="(prefers-color-scheme: dark)" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="aldebaranode.xyz" />
        <meta property="twitter:url" content="https://docs.aldebaranode.xyz/" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description"
          content={description} />
        <meta name="twitter:image" content={image} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </>
    )
  },
  footer: {
    content: () => (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://aldebaranode.xyz" target="_blank">
          Aldebaranode
        </a>
        .
      </span>
    )
  }
}
