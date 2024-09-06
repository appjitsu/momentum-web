'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type PortfolioItem = {
    title: string;
    description: string;
    image: string;
};

const portfolioItems: PortfolioItem[] = [
    {
        title: 'Denver Air Quality',
        description: 'Mobile app for Denver, CO air quality initiative.',
        image: '/img/portfolio/air.png'
    },
    {
        title: 'OTCMe',
        description:
            'Mobile app for OTCMe, an over-the-counter medications tool.',
        image: '/img/portfolio/otcme.png'
    },
    {
        title: 'TAP, Inc.',
        description: 'Website for TAP, a provider of freelancer benefits.',
        image: '/img/portfolio/tap.png'
    }
];

export const Portfolio = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (image: string) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8">Some of Our Work</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.map((item, index) => (
                    <div
                        key={item.title}
                        className="border rounded-lg overflow-hidden shadow-lg cursor-pointer"
                        onClick={() => openModal(item.image)}
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                            width={300}
                            height={300}
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">
                                {item.title}
                            </h2>
                            <p className="text-gray-700">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="relative">
                        <button
                            className="absolute top-0 right-0 m-4 text-white text-2xl rounded bg-black bg-opacity-50 p-2"
                            onClick={closeModal}
                            type="button"
                        >
                            close &times;
                        </button>
                        <div className="flex items-center justify-center h-screen">
                            <Image
                                src={selectedImage}
                                alt="Selected"
                                className="max-w-full max-h-full"
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                                width={0}
                                height={0}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
