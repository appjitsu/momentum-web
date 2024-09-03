import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from '@heroicons/react/24/solid';

import benefitOneImg from '@/public/img/benefit-one.png';
import benefitTwoImg from '@/public/img/benefit-two.png';

const benefitOne = {
  title: 'Our Services',
  desc: 'Your expert partners for building mission-driven products',
  image: benefitOneImg,
  bullets: [
    {
      title: 'UI/UX Design and Prototyping',
      desc: 'We design engaging and intuitive user interfaces with a focus on creating seamless user experiences, ensuring your applications are both visually appealing and easy to use.',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Custom Web Application Development',
      desc: 'We build tailored web applications using modern technologies, focusing on scalability, security, and performance to meet your specific business needs.',
      icon: <FaceSmileIcon />,
    },
    {
      title: 'Mobile App Development',
      desc: 'We create intuitive and user-friendly mobile apps for iOS, Android, and cross-platform environments, offering end-to-end development from concept to launch.',
      icon: <ChartBarSquareIcon />,
    },
  ],
};

const benefitTwo = {
  title: 'Why choose us?',
  desc: 'We deliver high-quality, custom solutions that drive business growth',
  image: benefitTwoImg,
  bullets: [
    {
      title: 'Continuous Support and Maintenance',
      desc: 'We provide ongoing support and maintenance to ensure your applications remain secure, up-to-date, and fully optimized. This includes regular updates, bug fixes, and performance enhancements to keep your app running smoothly over time.',
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: 'Agile Development Process',
      desc: 'Our agile development approach ensures flexibility and rapid iteration. We work closely with you, adapting to changes and feedback throughout the development process, resulting in a product that truly aligns with your vision and business goals.',
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: 'Scalable Solutions',
      desc: 'We design and develop applications with scalability in mind, allowing your business to grow without facing technical limitations. Whether you&apos;re scaling to handle more users or adding new features, our solutions can easily adapt to your evolving needs.',
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
