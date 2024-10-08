'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
    Disclosure,
    DisclosurePanel,
    DisclosureButton
} from '@headlessui/react';

export const Navbar = () => {
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'About Us', href: '/about-us' },
        { name: 'Contact Us', href: '/contact-us' }
    ];

    return (
        <div className="w-full">
            <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
                {/* Logo  */}
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                                <Link href="/">
                                    <span className="flex items-baseline text-2xl font-medium">
                                        <Image
                                            src="/img/momentum_logo.png"
                                            alt="Momentum"
                                            width={200}
                                            height={40}
                                        />
                                    </span>
                                </Link>

                                <DisclosureButton
                                    aria-label="Toggle Menu"
                                    className="px-2 py-1 ml-auto  rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none  "
                                >
                                    <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        {open && (
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                            />
                                        )}
                                        {!open && (
                                            <path
                                                fillRule="evenodd"
                                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                            />
                                        )}
                                    </svg>
                                </DisclosureButton>

                                <DisclosurePanel className="flex flex-wrap w-full my-5 lg:hidden">
                                    <>
                                        {navigation.map((item, index) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="w-full px-4 py-2 -ml-4  rounded-md  hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </>
                                </DisclosurePanel>
                            </div>
                        </>
                    )}
                </Disclosure>

                {/* menu  */}
                <div className="hidden text-center lg:flex lg:items-center">
                    <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                        {navigation.map((item, index) => (
                            <li className="mr-3 nav__item" key={item.name}>
                                <Link
                                    href={item.href}
                                    className="inline-block px-4 py-2 text-lg font-normal  no-underline rounded-md  hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};
