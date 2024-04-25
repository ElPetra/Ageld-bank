import { Icon } from 'src/shared/ui';

import type { Dispatch, SetStateAction } from 'react';

import './styles.scss';

interface Props {
    setVisible: Dispatch<SetStateAction<boolean>>;
}

export function MenuButton({ setVisible }: Props) {
    return (
        <button className='menu-button' onClick={() => setVisible(true)}>
            <Icon icon='menu' />
        </button>
    );
}
