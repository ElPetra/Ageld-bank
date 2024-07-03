import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Button, Card, Form, Icon, Text } from 'src/shared/ui';
import { CheckboxGroup } from 'src/entities/filter';

import { options } from '../model';

import type { FieldValues } from 'react-hook-form';

import './styles.scss';

export const MapFilter = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState<boolean>(false);
    const { register, handleSubmit, reset } = useForm<FieldValues>({
        defaultValues: { filters: [] },
        mode: 'onTouched',
        reValidateMode: 'onChange'
    });

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
                    <Form
                        onSubmit={handleSubmit(() => {
                            setOpen(false);
                        })}
                    >
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
                                    type='button'
                                    className='map__filter__modal__button__close'
                                    onClick={() => setOpen(false)}
                                >
                                    <Icon icon='close' />
                                </button>
                            </div>
                            <CheckboxGroup
                                options={options}
                                register={register}
                                field='filters'
                                variant='secondary'
                            />
                            <div className='map__filter__buttons'>
                                <Button
                                    type='submit'
                                    width='max'
                                    variant='secondary'
                                >
                                    {t('Применить фильтр')}
                                </Button>
                                <Button
                                    type='button'
                                    width='max'
                                    onClick={() => {
                                        setOpen(false);
                                        reset();
                                    }}
                                >
                                    {t('Отменить')}
                                </Button>
                            </div>
                        </Card>
                    </Form>
                </div>
            )}
        </div>
    );
};
