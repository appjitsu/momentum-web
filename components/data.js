import {
    CursorArrowRaysIcon,
    AdjustmentsHorizontalIcon,
    GlobeAmericasIcon,
    DeviceTabletIcon,
    DevicePhoneMobileIcon,
    SunIcon,
    ArrowPathIcon,
    GiftIcon
} from '@heroicons/react/24/solid';

import benefitOneImg from '@/public/img/app-development-3.jpg';
import benefitTwoImg from '@/public/img/success.jpg';

const benefitOne = {
    title: 'Our Services',
    desc: '',
    image: benefitOneImg,
    bullets: [
        {
            title: 'Product Strategy and Consulting',
            desc: 'We help you define your product vision and strategy, guiding you on how to bring your ideas to life and achieve your goals.',
            icon: <SunIcon />
        },
        {
            title: 'Website Design and Development',
            desc: 'We create custom websites that are beautiful, responsive, and easy to use, helping you connect with your audience effectively.',
            icon: <GlobeAmericasIcon />
        },
        {
            title: 'Mobile App Development',
            desc: 'We create easy-to-use mobile apps for iOS and Android, handling everything from concept to launch.',
            icon: <DevicePhoneMobileIcon />
        }
    ]
};

const benefitTwo = {
    title: 'Why choose us?',
    desc: 'We deliver high-quality, custom solutions that drive business growth',
    image: benefitTwoImg,
    bullets: [
        {
            title: 'Expert Team',
            desc: 'Our team has 30 years of experience and expertise in the industry.',
            icon: <AdjustmentsHorizontalIcon />
        },
        {
            title: 'Fast and Flexible',
            desc: 'We work quickly and adapt to your needs to deliver your project on time.',
            icon: <ArrowPathIcon />
        },
        {
            title: 'Client-Centric',
            desc: 'We focus on understanding your needs and delivering solutions that exceed your expectations.',
            icon: <GiftIcon />
        }
    ]
};

export { benefitOne, benefitTwo };
