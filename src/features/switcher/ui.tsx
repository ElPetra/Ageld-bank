import { useState } from 'react';
import { Card, Icon, Text } from 'src/shared/ui';
import './styles.scss';
import { useTranslation } from 'react-i18next';

export const Switcher = () => {
    const { i18n } = useTranslation();
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
                    <Card
                        color='secondary'
                        gap='extra-small'
                        direction='column'
                        padding='small'
                    >
                        <button
                            onClick={() => {
                                i18n.changeLanguage(
                                    i18n.language === 'en' ? 'ru' : 'en'
                                );
                                setOpen(false);
                            }}
                            className={`switcher__modal__button ${i18n.language === 'en' ? 'active' : ''}`}
                        >
                            <Text size='s'>English</Text>
                        </button>
                        <button
                            onClick={() => {
                                i18n.changeLanguage(
                                    i18n.language === 'ru' ? 'en' : 'ru'
                                );
                                setOpen(false);
                            }}
                            className={`switcher__modal__button ${i18n.language === 'ru' ? 'active' : ''}`}
                        >
                            Русский
                        </button>
                    </Card>
                </div>
            )}
        </>
    );
};
