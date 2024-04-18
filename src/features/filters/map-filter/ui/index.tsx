import { useState } from 'react';

import { Button, Card, Icon, Text } from 'src/shared/ui';
import { CheckboxGroup } from 'src/entities/filter';

import { options } from '../model';

import './styles.scss';

export const MapFilter = () => {
    const [filters, setFilters] = useState<Record<string, string>>({});
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className='map__filter'>
            <button
                className='map__filter__button'
                onClick={() => setOpen(true)}
            >
                <Card gap='small-gap' direction='row'>
                    <Icon icon='filter-lines' />
                    <Text weight='bold'>Фильтр</Text>
                </Card>
            </button>
            {open && (
                <div className='map__filter__modal'>
                    <Card gap='large-gap'>
                        <div className='map__filter__modal__button'>
                            <Icon icon='filter-lines' />
                            <Text weight='bold'>Фильтр</Text>
                            <button
                                className='map__filter__modal__button__close'
                                onClick={() => setOpen(false)}
                            >
                                &#x2715;
                            </button>
                        </div>
                        <CheckboxGroup options={options} variant='secondary' />
                        <div className='map__filter__buttons'>
                            <Button
                                size='small'
                                variant='secondary'
                                onClick={() => setOpen(false)}
                            >
                                Применить фильтр
                            </Button>
                            <Button
                                size='small'
                                onClick={() => {
                                    setOpen(false);
                                    setFilters({});
                                }}
                            >
                                Отменить
                            </Button>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    );
};
