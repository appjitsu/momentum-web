import Image from 'next/image';
import { Container } from '@/components/Container';
import heroImg from '@/public/img/process.png';
import Link from 'next/link';

export const Hero = () => {
    return (
        <>
            <Container className="flex flex-wrap ">
                <div className="flex items-center w-full lg:w-1/2">
                    <div className="max-w-2xl mb-8">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                            We build custom websites and mobile apps
                        </h1>
                        <p className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl ">
                            We strive to create the best solutions for your
                            business. We are a team of experienced developers
                            and designers who can help you build your dream
                            project.
                        </p>

                        <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                            <Link
                                href="/free-quote"
                                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md"
                            >
                                Get a FREE Quote
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <div className="">
                        <Image
                            src={heroImg}
                            width="616"
                            height="617"
                            className={'object-cover rounded-lg'}
                            alt="Custom web and mobile apps"
                            loading="eager"
                            placeholder="blur"
                        />
                    </div>
                </div>
            </Container>
        </>
    );
};
