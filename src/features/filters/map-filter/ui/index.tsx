import { Button, Icon, Text } from 'src/shared/ui';
import { CheckboxGroup } from 'src/widgets/notifications';

import './styles.scss';
import { useState } from 'react';

import { options } from '../model';

export const MapFilter = () => {
    const [filters, setFilters] = useState<Record<string, string>>({});
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className='map__filter'>
            <button
                className='map__filter__button'
                onClick={() => setOpen(true)}
            >
                <Icon icon='filter-lines' />
                <Text weight='bold'>Фильтр</Text>
            </button>
            {open && (
                <div className='map__filter__modal'>
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
                </div>
            )}
        </div>
    );
};
