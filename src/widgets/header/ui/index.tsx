import { useState } from 'react';
import { Container } from 'src/shared/ui';
import { Switcher } from 'src/features/switcher';

import { Logo } from './logo';
import { Navigation } from './navigation';
import { HamburgerMenu } from './hamburger-menu';
import { MenuButton } from './menu-button';
import './styles.scss';

export const Header = () => {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <header>
            <Container variant='secondary'>
                <div className='header'>
                    <Logo />
                    <Navigation />
                    <MenuButton setVisible={setVisible} />
                </div>
            </Container>
            <HamburgerMenu visible={visible} setVisible={setVisible} />
            <div className='switcher'>
                <Switcher />
            </div>
        </header>
    );
};
