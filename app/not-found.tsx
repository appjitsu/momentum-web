import Image from 'next/image';
import { Container } from '@/components/Container';
import FourOhFourImg from '@/public/img/404.jpg';

export default function NotFound() {
    return (
        <Container>
            <div>
                <Image
                    src={FourOhFourImg}
                    alt="404"
                    width={200}
                    height={200}
                    className="w-full"
                    layout="responsive"
                />
            </div>
        </Container>
    );
}
