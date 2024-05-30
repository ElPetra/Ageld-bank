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
                    <div className='language-button'>
                        <Switcher />
                    </div>
                    <MenuButton setVisible={setVisible} />
                </div>
            </Container>
            <div className='switcher'></div>
            <HamburgerMenu visible={visible} setVisible={setVisible} />
        </header>
    );
};
