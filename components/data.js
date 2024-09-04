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
    desc: 'Your expert partners for building mission-driven products',
    image: benefitOneImg,
    bullets: [
        {
            title: 'Product Strategy and Consulting',
            desc: 'We help you define your product vision, strategy, and roadmap, providing expert guidance on how to bring your ideas to life and achieve your business objectives.',
            icon: <SunIcon />
        },
        {
            title: 'Website Design and Development',
            desc: 'We create custom websites that are visually stunning, responsive, and user-friendly, helping you establish a strong online presence and engage with your audience effectively.',
            icon: <GlobeAmericasIcon />
        },
        {
            title: 'UI/UX Design and Prototyping',
            desc: 'We design engaging and intuitive user interfaces with a focus on creating seamless user experiences, ensuring your applications are both visually appealing and easy to use.',
            icon: <CursorArrowRaysIcon />
        },
        {
            title: 'Web Application Development',
            desc: 'We build tailored web applications using modern technologies, focusing on scalability, security, and performance to meet your specific business needs.',
            icon: <DeviceTabletIcon />
        },
        {
            title: 'Mobile App Development',
            desc: 'We create intuitive and user-friendly mobile apps for iOS, Android, and cross-platform environments, offering end-to-end development from concept to launch.',
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
            title: 'Continuous Support and Maintenance',
            desc: 'We provide ongoing support and maintenance to ensure your applications remain secure, up-to-date, and fully optimized. This includes regular updates, bug fixes, and performance enhancements to keep your app running smoothly over time.',
            icon: <ArrowPathIcon />
        },
        {
            title: 'Agile Development Process',
            desc: 'Our agile development approach ensures flexibility and rapid iteration. We work closely with you, adapting to changes and feedback throughout the development process, resulting in a product that truly aligns with your vision and business goals.',
            icon: <AdjustmentsHorizontalIcon />
        },
        {
            title: 'Scalable Solutions',
            desc: 'We design and develop applications with scalability in mind, allowing your business to grow without facing technical limitations. Whether you&apos;re scaling to handle more users or adding new features, our solutions can easily adapt to your evolving needs.',
            icon: <GiftIcon />
        }
    ]
};

export { benefitOne, benefitTwo };
