import React, { useState } from 'react';
import { Card, Icon, Text } from 'src/shared/ui';
import './styles.scss';
import { useLanguage } from 'src/entities/language';

export const Switcher = () => {
    const { language, changeLanguage } = useLanguage();
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
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
                    <Card gap='extra-small' direction='column' padding='small'>
                        <button
                            onClick={() => {
                                changeLanguage();
                                setOpen(false);
                            }}
                            className={`switcher__modal__button ${language === 'en' ? 'active' : ''}`}
                        >
                            <Text size='s'>English</Text>
                        </button>
                        <button
                            onClick={() => {
                                changeLanguage();
                                setOpen(false);
                            }}
                            className={`switcher__modal__button ${language === 'ru' ? 'active' : ''}`}
                        >
                            Русский
                        </button>
                    </Card>
                </div>
            )}
        </>
    );
};
