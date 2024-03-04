import { NavLink } from 'react-router-dom';

import { Icon } from 'src/shared/ui';

import type { ReactNode } from 'react';
import type { SvgIconNames } from 'src/shared/ui/icon/model/types.ts';

interface Props {
    size?: 'small' | 'medium';
    linkTo: string;
    icon: SvgIconNames;
    width?: number;
    height?: number;
    widthAndHeight?: number;
    children: ReactNode;
}
export const NavItem = ({ icon, width, height, linkTo, children }: Props) => (
    <div className='nav__item'>
        <Icon icon={icon} width={width} height={height} />
        <NavLink to={linkTo}>{children}</NavLink>
    </div>
);
