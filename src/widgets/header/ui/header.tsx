import { Container } from 'src/shared/ui';

import { Logo } from './logo';
import { Navigation } from './navigation';

import './styles.scss';

export const Header = () => (
    <header>
        <Container variant='secondary'>
            <div className='header'>
                <Logo />
                <Navigation />
            </div>
        </Container>
    </header>
);
