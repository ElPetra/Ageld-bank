import { type ReactElement, useState } from 'react';

import { Text } from 'src/shared/ui';

import './styles.scss';

interface Element {
    id: number;
    name: string;
    component: ReactElement;
}

interface Props {
    elements?: Element[];
}

export const Menu = ({ elements }: Props) => {
    const [index, setIndex] = useState<number>(1);

    return (
        <div className='menu'>
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
            <div className='menu__content'>
                {elements && elements[index - 1].component}
            </div>
        </div>
    );
};
