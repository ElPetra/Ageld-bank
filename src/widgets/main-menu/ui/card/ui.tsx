import { Icon, Link, type SvgIconNames, Text } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

import './styles.scss';

interface Props {
    icon: SvgIconNames;
    href?: string;
    text: string;
}

export const MainMenuCard = ({
    icon,
    href = RouteName.MAIN_PAGE,
    text
}: Props) => {
    return (
        <div>
            <Link to={href}>
                <div className='main-menu__card'>
                    <Icon icon={icon} widthAndHeight={32} />
                    <Text weight='medium'>{text}</Text>
                </div>
            </Link>
        </div>
    );
};
