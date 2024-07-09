import { RouteName } from 'src/shared/model';
import { Button, Card, Icon, Link, Text } from 'src/shared/ui';

import type { Dispatch, SetStateAction } from 'react';

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
    setFormStep?: Dispatch<SetStateAction<number>>;
    isLast?: boolean;
    isMargin?: boolean;
    middleOfForm?: boolean;
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
    isMargin = true,
    secondButtonText,
    onClick,
    secondButtonLink = RouteName.MAIN_PAGE + '/',
    secondOnClick,
    setFormStep,
    middleOfForm,
    isLast = false
}: Props) => {
    const FormStepForward = () => {
        if (setFormStep && !isLast) {
            setFormStep(curr => {
                return curr + 1;
            });
        }
    };
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
                        {onClick || middleOfForm ? (
                            <Button
                                width='max'
                                type='button'
                                variant={
                                    secondButtonText ? 'primary' : 'secondary'
                                }
                                onClick={onClick || FormStepForward}
                            >
                                {buttonText}
                            </Button>
                        ) : (
                            <Link to={buttonLink}>
                                <Button
                                    onClick={() => {
                                        if (middleOfForm) {
                                            FormStepForward();
                                        }
                                    }}
                                    width='max'
                                    type='button'
                                    variant={
                                        secondButtonText
                                            ? 'primary'
                                            : 'secondary'
                                    }
                                >
                                    {buttonText}
                                </Button>
                            </Link>
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
                                <Link to={secondButtonLink}>
                                    <Button
                                        width='max'
                                        type='button'
                                        variant='secondary'
                                    >
                                        {secondButtonText}
                                    </Button>
                                </Link>
                            ))}
                    </div>
                )}
            </Card>
        </div>
    );
};
