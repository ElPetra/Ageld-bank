import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    visible: boolean;
    children: ReactNode;
}

export const AsideMenu = ({ visible, children }: Props) => (
    <>
        {visible && <div className='overlay' />}
        <aside className={`aside-menu ${visible && 'visible'}`}>
            {visible && <div className='aside-menu__content'>{children}</div>}
        </aside>
    </>
);
