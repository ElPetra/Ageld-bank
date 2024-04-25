import { AsideMenu, Icon, Link } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

import { Navigation } from '../navigation';

import type { Dispatch, SetStateAction } from 'react';

import './styles.scss';

interface Props {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}

export function HamburgerMenu({ visible, setVisible }: Props) {
    return (
        <AsideMenu visible={visible}>
            <div className='hamburger-menu'>
                <div className='hamburger-menu__header'>
                    <Link to={RouteName.MAIN_PAGE}>
                        <Icon icon='logo-dark' width={40} />
                    </Link>
                    <button onClick={() => setVisible(false)}>
                        <Icon icon='close' />
                    </button>
                </div>
                <div className='hamburger-menu__content'>
                    <Navigation direction='column' setVisible={setVisible} />
                </div>
            </div>
        </AsideMenu>
    );
}
