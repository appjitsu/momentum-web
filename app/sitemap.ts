import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.momentumdigitaltx.com',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1
        },
        {
            url: 'https://www.momentumdigitaltx.com/services',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: 'https://www.momentumdigitaltx.com/product-strategy-consulting',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: 'https://www.momentumdigitaltx.com/website-design',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: 'https://www.momentumdigitaltx.com/website-development',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: 'https://www.momentumdigitaltx.com/ui-ux-design-prototyping',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: 'https://www.momentumdigitaltx.com/web-app-development',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: 'https://www.momentumdigitaltx.com/mobile-app-development',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: 'https://www.momentumdigitaltx.com/about-us',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8
        },
        {
            url: 'https://www.momentumdigitaltx.com/contact-us',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5
        },
        {
            url: 'https://www.momentumdigitaltx.com/midland-texas',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5
        }
    ];
}
