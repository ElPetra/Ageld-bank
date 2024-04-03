import { Icon, Link, Text } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    title: string;
    href?: string;
    children: ReactNode;
}

export const MainMenuBlock = ({
    title,
    href = RouteName.MAIN_PAGE,
    children
}: Props) => {
    return (
        <div className='main-menu__block'>
            <Link to={href}>
                <div className='main-menu__block__title'>
                    <Text size='m' weight='medium'>
                        {title}
                    </Text>
                    <Icon icon='arrow-2' />
                </div>
            </Link>
            {children}
        </div>
    );
};
