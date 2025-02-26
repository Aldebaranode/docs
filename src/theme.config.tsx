import { useConfig, useThemeConfig } from 'nextra-theme-docs'
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
  navs: [
    {
      url: 'https://github.com/aldebaranode/docs',
      name: 'Aldebaranode: Blockchain Guide & Docs'
    }
  ],
  logo: () => (
    <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      padding: '8px 0'
    }}>
      <img src="https://aldebaranode.xyz/assets/logo.png" alt="Aldebaranode Logo" style={{ height: '32px' }} />
      Aldebaranode - Blockchain Guide & Docs
    </div>
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

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="aldebaranode.xyz" />
        <meta property="twitter:url" content="https://docs.aldebaranode.xyz/" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description"
          content={description} />
        <meta name="twitter:image" content={image} />
      </>
    )
  },
  footer: {
    content: () => (
      <span>
        {new Date().getFullYear()} © <a href="https://aldebaranode.xyz" target="_blank" style={{ textDecoration: 'underline', color: 'lightblue' }}>Aldebaranode.</a> All rights reserved.{' '}
      </span>
    )
  }
}
