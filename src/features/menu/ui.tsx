import { Fragment, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import { Text } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

import type { ReactNode, ReactElement } from 'react';

import './styles.scss';

interface Element {
    id: number;
    name: string;
    component: ReactElement;
}

interface Props {
    href?: string;
    variant?: 'primary' | 'secondary';
    elements?: Element[];
    children?: ReactNode;
}

export const Menu = ({
    href = RouteName.MAIN_PAGE_BASE,
    variant = 'primary',
    elements,
    children
}: Props) => {
    const [index, setIndex] = useState<number>(1);
    const { id } = useParams<string>();

    return (
        <div className='menu'>
            <div className='menu__bar'>
                <div className={`menu__items ${variant}`}>
                    {elements?.map(el => (
                        <Fragment key={el.id}>
                            {variant === 'primary' ? (
                                <NavLink
                                    to={href + '/' + String(el.id)}
                                    className='menu__item'
                                >
                                    <Text weight='medium'>{el.name}</Text>
                                </NavLink>
                            ) : (
                                <button
                                    className={`menu__item ${index === el.id && 'active'} `}
                                    onClick={() => setIndex(el.id)}
                                >
                                    <Text weight='medium'>{el.name}</Text>
                                </button>
                            )}
                        </Fragment>
                    ))}
                </div>
                {children}
            </div>
            <div className={`menu__content ${variant}`}>
                {variant === 'primary' ? (
                    <>
                        {elements &&
                            Number(id) <= elements.length &&
                            elements[Number(id) - 1].component}
                    </>
                ) : (
                    <>{elements && elements[index - 1].component}</>
                )}
            </div>
        </div>
    );
};
