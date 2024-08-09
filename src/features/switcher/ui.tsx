import cn from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Card, Icon, Text } from 'src/shared/ui';

import './styles.scss';

export const Switcher = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState<boolean>(false);

    const switcherModalButtonClass = (language: string): string =>
        cn('switcher__modal__button', {
            active: i18n.language === language
        });
    return (
        <div className='switcher'>
            <div
                onClick={() => {
                    setOpen(!open);
                }}
                className='switcher__icon'
            >
                <Icon icon='world' />
            </div>

            {open && (
                <div className='switcher__modal'>
                    <Card
                        color='secondary'
                        gap='extra-small'
                        direction='column'
                        padding='small'
                    >
                        <button
                            onClick={() => {
                                i18n.changeLanguage('en');
                                setOpen(false);
                            }}
                            className={switcherModalButtonClass('en')}
                        >
                            <Text size='s'>English</Text>
                        </button>
                        <button
                            onClick={() => {
                                i18n.changeLanguage('ru');
                                setOpen(false);
                            }}
                            className={switcherModalButtonClass('ru')}
                        >
                            Русский
                        </button>
                    </Card>
                </div>
            )}
        </div>
    );
};
