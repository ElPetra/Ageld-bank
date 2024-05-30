import { useState } from 'react';

import { Card, Icon } from 'src/shared/ui';
import { useLanguage } from 'src/entities/language';

import './styles.scss';

export const Switcher = () => {
    const { language, changeLanguage } = useLanguage();
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className='switcher'>
            <button
                onClick={() => {
                    setOpen(!open);
                }}
                className='switcher__icon'
            >
                <Icon icon='world' />
            </button>
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
                            English
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
        </div>
    );
};
