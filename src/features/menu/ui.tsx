import { Fragment, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Text } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

import type { ReactElement, ReactNode } from 'react';

import './styles.scss';

interface Element {
    id: number;
    name: string;
    component: ReactElement;
}

interface Props {
    href?: string;
    variant?: 'primary' | 'secondary';
    routes?: string[];
    elements: Element[];
    children?: ReactNode;
}

export const Menu = ({
    href = RouteName.MAIN_PAGE,
    variant = 'primary',
    routes,
    elements,
    children
}: Props) => {
    const [index, setIndex] = useState<number>(1);
    const { id, id2 } = useParams<string>();
    let routesIndex = 0;
    if (variant === 'secondary') {
        routesIndex =
            routes?.findIndex(el => el === id2) !== -1
                ? routes?.findIndex(el => el === id2) || 0
                : 0;
    } else {
        routesIndex =
            routes?.findIndex(el => el === id) !== -1
                ? routes?.findIndex(el => el === id) || 0
                : 0;
    }

    return (
        <div className='menu'>
            <div className='menu__bar'>
                <div className={`menu__items ${variant}`}>
                    {elements?.map(el => (
                        <Fragment key={el.id}>
                            {routes ? (
                                <Link
                                    to={href + '/' + routes[el.id - 1]}
                                    className={`menu__item ${routesIndex == el.id - 1 && 'active'}`}
                                >
                                    <Text weight='medium'>{el.name}</Text>
                                </Link>
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
                {routes ? (
                    <>
                        {elements &&
                            routesIndex < elements.length &&
                            elements[routesIndex].component}
                    </>
                ) : (
                    <>{elements && elements[index - 1].component}</>
                )}
            </div>
        </div>
    );
};
