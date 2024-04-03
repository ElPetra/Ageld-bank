import { Fragment, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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
    href = RouteName.MAIN_PAGE,
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
                                <Link
                                    to={href + '/' + String(el.id)}
                                    className={`menu__item ${(Number(id) || 1) === el.id && 'active'} `}
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
                {variant === 'primary' ? (
                    <>
                        {elements &&
                            (Number(id) || 1) <= elements.length &&
                            elements[(Number(id) || 1) - 1].component}
                    </>
                ) : (
                    <>{elements && elements[index - 1].component}</>
                )}
            </div>
        </div>
    );
};
