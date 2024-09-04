import Link from 'next/link';

export function GetInTouch() {
    return (
        <div className="mt-10 bg-gray-200 p-4 rounded-lg">
            <div className="text-2xl font-bold mb-4 mt-4">Get in Touch</div>
            <p className="text-gray-600">
                Interested in learning more about our services?{' '}
                <Link
                    href="/contact-us"
                    className="text-blue-600 hover:underline"
                >
                    Contact us
                </Link>{' '}
                today to discuss how we can help you achieve your business
                goals.
            </p>
        </div>
    );
}
