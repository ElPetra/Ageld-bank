import cn from 'classnames';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    visible: boolean;
    children: ReactNode;
}

export const AsideMenu = ({ visible, children }: Props) => {
    const asideClass = cn('aside-menu', {
        visible: visible
    });
    return (
        <>
            {visible && <div className='overlay' />}
            <aside className={asideClass}>
                <div className='aside-menu__content'>{children}</div>
            </aside>
        </>
    );
};
