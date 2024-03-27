import { type ReactElement, useState } from 'react';

import { Text } from 'src/shared/ui';

import type { ReactNode } from 'react';

import './styles.scss';

interface Element {
    id: number;
    name: string;
    component: ReactElement;
}

interface Props {
    variant?: 'primary' | 'secondary';
    elements?: Element[];
    children?: ReactNode;
}

export const Menu = ({ variant = 'primary', elements, children }: Props) => {
    const [index, setIndex] = useState<number>(1);

    return (
        <div className='menu'>
            <div className='menu__bar'>
                <div className='menu__items'>
                    {elements?.map(el => (
                        <button
                            key={el.id}
                            className={`menu__item ${index === el.id && 'active'} `}
                            onClick={() => setIndex(el.id)}
                        >
                            <Text weight='medium'>{el.name}</Text>
                        </button>
                    ))}
                </div>
                {children}
            </div>
            <div className={`menu__content ${variant}`}>
                {elements && elements[index - 1].component}
            </div>
        </div>
    );
};
