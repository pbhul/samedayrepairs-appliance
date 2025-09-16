import { MetadataRoute } from 'next'
import { servicePages, locationPages } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://samedayrepairs.com'

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/emergency-appliance-repair`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  const servicePageSitemap = Object.values(servicePages).map((service) => ({
    url: `${baseUrl}${service.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const locationPageSitemap = Object.values(locationPages).map((location) => ({
    url: `${baseUrl}${location.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...servicePageSitemap, ...locationPageSitemap]
}