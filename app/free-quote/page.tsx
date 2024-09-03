import { Container } from '@/components/Container';
import { QuoteForm } from '@/components/QuoteForm';

export default function FreeQuote() {
    return (
        <Container>
            <h1 className="text-4xl font-bold leading-snug tracking-tight mb-10  lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-center">
                Free Quote Form
            </h1>
            <h2 className="text-2xl font-bold text-center">
                What does success look like for your project?
            </h2>
            <QuoteForm />
        </Container>
    );
}
