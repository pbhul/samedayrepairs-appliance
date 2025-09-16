import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://samedayrepairs.com'

  const images = [
    {
      loc: `${baseUrl}/images/sameday-repairs-og.jpg`,
      caption: 'Same Day Repairs - Appliance Repair Gainesville VA',
      title: 'Professional Appliance Repair Services'
    },
    {
      loc: `${baseUrl}/images/refrigerator-repair-gainesville-va.jpg`,
      caption: 'Refrigerator Repair in Gainesville VA - Same Day Service',
      title: 'Expert Refrigerator Repair'
    },
    {
      loc: `${baseUrl}/images/dryer-repair-gainesville-va.jpg`,
      caption: 'Dryer Repair in Gainesville VA - Professional Service',
      title: 'Professional Dryer Repair'
    },
    {
      loc: `${baseUrl}/images/washer-repair-gainesville-va.jpg`,
      caption: 'Washer Repair in Gainesville VA - Quick Service',
      title: 'Expert Washer Repair'
    },
    {
      loc: `${baseUrl}/images/dishwasher-repair-gainesville-va.jpg`,
      caption: 'Dishwasher Repair in Gainesville VA - Same Day',
      title: 'Professional Dishwasher Repair'
    }
  ]

  const imageSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    ${images.map(image => `
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:caption>${image.caption}</image:caption>
      <image:title>${image.title}</image:title>
    </image:image>`).join('')}
  </url>
</urlset>`

  return new NextResponse(imageSitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
    },
  })
}