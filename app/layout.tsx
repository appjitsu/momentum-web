import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Momentum Software - Website Design, Web Development, Mobile Apps - Midland, Texas',
    description:
        'We build web and mobile apps. Contact us for a free quote. Located in Midland, Texas'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <GoogleTagManager gtmId="AW-951138866" />
            <body className={inter.className}>
                <Navbar />
                <div>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
