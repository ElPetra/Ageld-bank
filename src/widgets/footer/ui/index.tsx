import { Container } from 'src/shared/ui';

import { LogoPhone } from './logo-phone';
import { Menu } from './menu';
import { Info } from './info';

export const Footer = () => (
    <footer>
        <Container variant='secondary'>
            <LogoPhone />
        </Container>
        <Container variant='secondary'>
            <Menu />
            <Info />
        </Container>
    </footer>
);
