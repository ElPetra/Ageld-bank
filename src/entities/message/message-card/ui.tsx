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
    type?: 'submit' | 'button';
    isMargin?: boolean;
    secondButtonText?: string;
    secondButtonLink?: string;
    secondOnClick?: () => void;
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
    buttonLink = RouteName.MAIN_PAGE + '/',
    onClick,
    isMargin = true,
    secondButtonText,
    type = 'button',
    secondButtonLink = RouteName.MAIN_PAGE + '/',
    secondOnClick
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
                    <div
                        className={`${secondButtonText ? 'message-card__two-button' : 'message-card__button'}`}
                    >
                        {onClick ? (
                            <Button
                                width='max'
                                type={type}
                                variant={
                                    secondButtonText ? 'primary' : 'secondary'
                                }
                                onClick={onClick}
                            >
                                {buttonText}
                            </Button>
                        ) : (
                            <div>
                                <Link to={buttonLink}>
                                    <Button
                                        width='max'
                                        type={type}
                                        variant={
                                            secondButtonText
                                                ? 'primary'
                                                : 'secondary'
                                        }
                                    >
                                        {buttonText}
                                    </Button>
                                </Link>
                            </div>
                        )}
                        {secondButtonText &&
                            (secondOnClick ? (
                                <Button
                                    width='max'
                                    type='button'
                                    variant='secondary'
                                    onClick={secondOnClick}
                                >
                                    {secondButtonText}
                                </Button>
                            ) : (
                                <div>
                                    <Link to={secondButtonLink}>
                                        <Button
                                            width='max'
                                            type='button'
                                            variant='secondary'
                                        >
                                            {secondButtonText}
                                        </Button>
                                    </Link>
                                </div>
                            ))}
                    </div>
                )}
            </Card>
        </div>
    );
};
