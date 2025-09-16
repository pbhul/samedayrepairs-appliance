/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEO = {
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://samedayrepairs.com',
    siteName: 'Same Day Repairs',
  },
  twitter: {
    handle: '@samedayrepairs',
    site: '@samedayrepairs',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180'
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest'
    }
  ],
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#1f2937'
    }
  ]
}

export default defaultSEO;