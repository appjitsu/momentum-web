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

const Portfolio: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8">Some of Our Work</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.map((item, index) => (
                    <div
                        key={index}
                        className="border rounded-lg overflow-hidden shadow-lg"
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
        </div>
    );
};

export default Portfolio;
