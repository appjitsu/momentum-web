import { Container } from '@/components/Container';
import { Hero } from '@/components/Hero';
import { Benefits } from '@/components/Benefits';
import { Cta } from '@/components/Cta';
import { benefitOne, benefitTwo } from '@/components/data';
import Portfolio from '@/components/Portfolio';

export default function Home() {
    return (
        <Container>
            <Hero />
            <Portfolio />
            <Benefits data={benefitOne} />
            <Benefits imgPos="right" data={benefitTwo} />
            <Cta />
        </Container>
    );
}
