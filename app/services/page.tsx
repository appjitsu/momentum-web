import { Container } from '@/components/Container';
import Link from 'next/link';
import {
    LightBulbIcon,
    ComputerDesktopIcon,
    CodeBracketIcon,
    DevicePhoneMobileIcon,
    DeviceTabletIcon,
    PresentationChartLineIcon
} from '@heroicons/react/24/solid';

export default function Services() {
    const services = [
        {
            name: 'Product Strategy and Consulting',
            link: 'product-strategy-consulting',
            description:
                'Develop a comprehensive product strategy to align with your business goals.',
            icon: LightBulbIcon
        },
        {
            name: 'Website Design',
            link: 'website-design',
            description:
                'Create visually appealing and user-friendly website designs.',
            icon: ComputerDesktopIcon
        },
        {
            name: 'Website Development',
            link: 'website-development',
            description:
                'Build robust and scalable websites tailored to your needs.',
            icon: CodeBracketIcon
        },
        {
            name: 'UI/UX Design and Prototyping',
            link: 'ui-ux-design-prototyping',
            description:
                'Design intuitive user interfaces and create interactive prototypes.',
            icon: PresentationChartLineIcon
        },
        {
            name: 'Web App Development',
            link: 'web-app-development',
            description:
                'Develop high-performance web applications with modern technologies.',
            icon: DeviceTabletIcon
        },
        {
            name: 'Mobile App Development',
            link: 'mobile-app-development',
            description:
                'Create mobile applications for both iOS and Android platforms.',
            icon: DevicePhoneMobileIcon
        }
    ];

    return (
        <Container>
            <h1 className="text-3xl font-bold mb-10">Our Services</h1>
            <ul className="space-y-4">
                {services.map((service, index) => (
                    <li key={index} className="flex items-start space-x-4">
                        <service.icon className="h-6 w-6 text-blue-600" />
                        <div>
                            <Link
                                href={service.link}
                                className="text-lg text-blue-600 hover:underline"
                            >
                                {service.name}
                            </Link>
                            <p className="text-gray-600">
                                {service.description}
                            </p>
                        </div>{' '}
                    </li>
                ))}
            </ul>
            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-4">
                    Interested in learning more about our services? Contact us
                    today to discuss how we can help you achieve your business
                    goals.
                </p>
                <Link
                    href="/contact"
                    className="text-lg text-blue-600 hover:underline"
                >
                    Contact Us
                </Link>
            </div>
        </Container>
    );
}
