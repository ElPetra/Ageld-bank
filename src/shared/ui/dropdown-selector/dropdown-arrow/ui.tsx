import cn from 'classnames';

import { Icon } from '../../icon';

import './styles.scss';
export const DropdownArrow = (flip: boolean) => {
    const DropdownArrowCN = cn('dropdown__arrow', { flip: flip });
    return <Icon className={DropdownArrowCN} icon='dropdownArrow'></Icon>;
};
