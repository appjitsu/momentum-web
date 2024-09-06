import { Container } from '@/components/Container';
import Link from 'next/link';
import {
    BriefcaseIcon,
    AcademicCapIcon,
    HeartIcon,
    ShoppingCartIcon,
    BuildingOfficeIcon,
    GlobeAltIcon,
    ShieldCheckIcon,
    TruckIcon,
    CogIcon,
    LightBulbIcon,
    FireIcon
} from '@heroicons/react/24/solid';
import { GetInTouch } from '@/components/GetInTouch';

export default function Industries() {
    const industries = [
        {
            name: 'Healthcare',
            link: 'healthcare',
            description:
                'Innovative solutions for the healthcare industry to improve patient care and operational efficiency.',
            icon: HeartIcon
        },
        {
            name: 'Education',
            link: 'education',
            description:
                'Advanced technologies and tools to enhance learning experiences and educational outcomes.',
            icon: AcademicCapIcon
        },
        {
            name: 'Finance',
            link: 'finance',
            description:
                'Secure and scalable financial solutions to meet the demands of the modern financial sector.',
            icon: BriefcaseIcon
        },
        {
            name: 'Retail',
            link: 'retail',
            description:
                'E-commerce and retail solutions to enhance customer engagement and streamline operations.',
            icon: ShoppingCartIcon
        },
        {
            name: 'Real Estate',
            link: 'real-estate',
            description:
                'Cutting-edge technology solutions for the real estate industry to improve property management and sales.',
            icon: BuildingOfficeIcon
        },
        {
            name: 'Travel and Tourism',
            link: 'travel-tourism',
            description:
                'Innovative solutions to enhance the travel and tourism experience for customers and businesses.',
            icon: GlobeAltIcon
        },
        {
            name: 'Insurance',
            link: 'insurance',
            description:
                'Comprehensive solutions for the insurance industry to improve risk management and customer service.',
            icon: ShieldCheckIcon
        },
        {
            name: 'Logistics',
            link: 'logistics',
            description:
                'Advanced logistics solutions to optimize supply chain management and improve delivery efficiency.',
            icon: TruckIcon
        },
        {
            name: 'Manufacturing',
            link: 'manufacturing',
            description:
                'Innovative manufacturing solutions to enhance production efficiency and product quality.',
            icon: CogIcon
        },
        {
            name: 'Energy',
            link: 'energy',
            description:
                'Sustainable energy solutions to improve efficiency and reduce environmental impact.',
            icon: LightBulbIcon
        },
        {
            name: 'Oil and Gas',
            link: 'oil-gas',
            description:
                'Advanced technology solutions for the oil and gas industry to enhance exploration, production, and safety.',
            icon: FireIcon
        }
    ];

    return (
        <Container>
            <h1 className="text-3xl font-bold mb-10">Industries We Serve</h1>
            <ul className="space-y-4">
                {industries.map((item, index) => (
                    <li key={item.name} className="flex items-start space-x-4">
                        <item.icon className="h-6 w-6 text-blue-600" />
                        <div>
                            <Link
                                href={item.link}
                                className="text-lg text-blue-600 hover:underline"
                            >
                                {item.name}
                            </Link>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <GetInTouch />
        </Container>
    );
}
