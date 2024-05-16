import { Card, Icon, Link, Text } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

import type { SvgIconName } from 'src/shared/ui';

import './styles.scss';

interface Props {
    icon: SvgIconName;
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
                <Card color='quadruple' direction='column'>
                    <Icon icon={icon} widthAndHeight={32} />
                    <Text weight='medium'>{text}</Text>
                </Card>
            </Link>
        </div>
    );
};
