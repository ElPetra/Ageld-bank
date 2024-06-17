import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Card, Icon, Text } from 'src/shared/ui';
import { CheckboxGroup } from 'src/entities/filter';

import { options } from '../model';

import './styles.scss';

export const MapFilter = () => {
    const { t } = useTranslation();
    const [, setFilters] = useState<Record<string, string>>({});
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className='map__filter'>
            <button
                className='map__filter__button'
                onClick={() => setOpen(true)}
            >
                <Card
                    color='secondary'
                    gap='extra-small'
                    align='center'
                    borderRadius='extra-large'
                    padding='small-medium'
                >
                    <Icon icon='filter' />
                    <Text weight='bold'>{t('Фильтр')}</Text>
                </Card>
            </button>
            {open && (
                <div className='map__filter__modal'>
                    <Card
                        color='secondary'
                        gap='medium'
                        direction='column'
                        borderRadius='extra-large'
                        padding='small-medium'
                    >
                        <div className='map__filter__modal__button'>
                            <div>
                                <Icon icon='filter' />
                                <Text weight='bold'>{t('Фильтр')}</Text>
                            </div>
                            <button
                                className='map__filter__modal__button__close'
                                onClick={() => setOpen(false)}
                            >
                                <Icon icon='close' />
                            </button>
                        </div>
                        <CheckboxGroup options={options} variant='secondary' />
                        <div className='map__filter__buttons'>
                            <Button
                                width='max'
                                variant='secondary'
                                onClick={() => setOpen(false)}
                            >
                                {t('Применить фильтр')}
                            </Button>
                            <Button
                                width='max'
                                onClick={() => {
                                    setOpen(false);
                                    setFilters({});
                                }}
                            >
                                {t('Отменить')}
                            </Button>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    );
};
