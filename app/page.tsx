import { Container } from '@/components/Container';
import { Hero } from '@/components/Hero';
import { Benefits } from '@/components/Benefits';
import { Cta } from '@/components/Cta';
import { benefitOne, benefitTwo } from '@/components/data';

export default function Home() {
  return (
    <Container>
      <Hero />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Cta />
    </Container>
  );
}
