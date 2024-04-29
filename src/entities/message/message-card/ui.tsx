import { RouteName } from 'src/shared/model';
import { Button, Icon, Link, Text } from 'src/shared/ui';

import type { SvgIconNames } from 'src/shared/ui';

import './styles.scss';

interface Props {
    text: string;
    width?: number;
    icon?: SvgIconNames;
    buttonText?: string;
    buttonLink?: string;
}

export const MessageCard = ({
    text,
    width,
    icon,
    buttonText,
    buttonLink = RouteName.LOGIN_PAGE
}: Props) => {
    return (
        <div className='message-card'>
            <Text weight='medium' size='m' align='center'>
                {text}
            </Text>
            <Icon width={width || 172} icon={icon || 'question-lady'} />
            {buttonText && (
                <div className='message-card__button'>
                    <Link to={buttonLink}>
                        <Button width='max' type='button' variant='secondary'>
                            {buttonText}
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
};
