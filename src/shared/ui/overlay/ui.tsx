import cn from 'classnames';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    visible: boolean;
    children: ReactNode;
}

export const Overlay = ({ visible, children }: Props) => {
    const overlayClass = cn('overlay', {
        visible: visible
    });
    const modalClass = cn('overlay__modal', {
        visible: visible
    });
    return (
        <>
            <div className={overlayClass} />
            <div className={modalClass}>
                <div className='overlay__modal__content'>{children}</div>
            </div>
        </>
    );
};
