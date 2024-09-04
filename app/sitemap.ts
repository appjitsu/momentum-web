import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.momentumsoftware.io',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1
        },
        {
            url: 'https://www.momentumsoftware.io/services',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: 'https://www.momentumsoftware.io/product-strategy-consulting',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: 'https://www.momentumsoftware.io/website-design',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: 'https://www.momentumsoftware.io/website-development',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: 'https://www.momentumsoftware.io/ui-ux-design-prototyping',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: 'https://www.momentumsoftware.io/web-app-development',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: 'https://www.momentumsoftware.io/mobile-app-development',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: 'https://www.momentumsoftware.io/about-us',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: 'https://www.momentumsoftware.io/contact-us',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5
        },
        {
            url: 'https://www.momentumsoftware.io/midland-texas',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5
        }
    ];
}
