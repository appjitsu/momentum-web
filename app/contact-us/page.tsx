import { Container } from '@/components/Container';
import { ContactForm } from '@/components/ContactForm';

export default function ContactUs() {
    return (
        <Container>
            <h1 className="text-4xl font-bold leading-snug tracking-tight mb-10  lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-center">
                Contact Us
            </h1>
            <h2 className="text-2xl font-bold text-center">How can we help?</h2>
            <ContactForm />
        </Container>
    );
}
