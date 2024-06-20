import { RouteName } from 'src/shared/model';
import { Button, Card, Icon, Link, Text } from 'src/shared/ui';

import type { SvgIconName } from 'src/shared/ui';

import './styles.scss';

interface Props {
    title: string;
    text?: string;
    color?: 'primary' | 'secondary';
    gap?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
    padding?: 'small' | 'small-medium' | 'medium' | 'large' | 'extra-large';
    width?: number;
    icon?: SvgIconName;
    buttonText?: string;
    buttonLink?: string;
    onClick?: () => void;
    isMargin?: boolean;
}

export const MessageCard = ({
    title,
    text,
    color = 'primary',
    gap = 'large',
    padding = 'extra-large',
    width,
    icon,
    buttonText,
    buttonLink = RouteName.LOGIN_PAGE,
    onClick,
    isMargin = true
}: Props) => {
    return (
        <div
            className={`message-card ${isMargin && 'message-card__with-margin'}`}
        >
            <Card
                color={color}
                direction='column'
                borderRadius='extra-large'
                gap={gap}
                padding={padding}
                align='center'
            >
                <div className='message-card__text'>
                    <Text weight='medium' size='m' align='center'>
                        {title}
                    </Text>
                    {text && <Text align='center'>{text}</Text>}
                </div>

                <Icon width={width || 300} icon={icon || 'question-lady'} />
                {buttonText && (
                    <div className='message-card__button'>
                        {onClick ? (
                            <Button
                                width='max'
                                type='button'
                                variant='secondary'
                                onClick={onClick}
                            >
                                {buttonText}
                            </Button>
                        ) : (
                            <Link to={buttonLink}>
                                <Button
                                    width='max'
                                    type='button'
                                    variant='secondary'
                                >
                                    {buttonText}
                                </Button>
                            </Link>
                        )}
                    </div>
                )}
            </Card>
        </div>
    );
};
