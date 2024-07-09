import React from 'react';
import { DropdownSelector } from 'src/shared/ui/dropdown-selector';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button, Card, Form, Text, Switcher, Icon } from 'src/shared/ui';

import { SliderInput } from 'src/shared/ui';

import type { Dispatch, SetStateAction } from 'react';
import type { FieldValues } from 'react-hook-form';
import './styles.scss';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
}
export const MakingDeposit = ({ isLast, setFormStep }: Props) => {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { isValid }
    } = useForm<FieldValues>({
        defaultValues: {
            termInput: 1,
            termSlider: 1,
            valueInput: 10000,
            valueSlider: 10000
        },
        mode: 'onTouched',
        reValidateMode: 'onChange'
    });

    const onSubmit = () => {
        if (setFormStep && !isLast) {
            setFormStep(curr => {
                return curr + 1;
            });
        }
    };
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Card
                gap='medium'
                padding='large'
                borderRadius='extra-large'
                direction='column'
            >
                <div className='mkdeposit__top-row'>
                    <div className='top-row__left'>
                        <Icon icon='rub' widthAndHeight={64}></Icon>
                        <Text size='m' weight='bold'>
                            {t('Депозит A-Geld Базовый')}
                        </Text>
                    </div>
                    <div className='top-row__right'>
                        <div className='top-row__interest-rate'>
                            <Text size='l' weight='bold'>
                                {'18%'}
                            </Text>
                        </div>
                        <Text color='tertiary' size='xs'>
                            {t('Процентная ставка')}
                        </Text>
                    </div>
                </div>
                <div className='mkdeposit__sliders'>
                    <SliderInput
                        variant={'secondary'}
                        register={register}
                        setValue={setValue}
                        label={t('Сумма депозита')}
                        min={10000}
                        max={500000}
                        inputField='valueInput'
                        sliderField='valueSlider'
                        unit={t('RUB')}
                        stretch={true}
                    />
                    <SliderInput
                        variant={'secondary'}
                        register={register}
                        setValue={setValue}
                        label={t('Срок депозита')}
                        min={1}
                        max={36}
                        inputField='termInput'
                        sliderField='termSlider'
                        unit={t('мес')}
                        stretch={true}
                    />
                </div>
                <DropdownSelector />
                <div className='mkdeposit__switchers'>
                    <div className='mkdeposit__switcher'>
                        <Switcher
                            register={register}
                            field='withAutoprolongation'
                        ></Switcher>
                        <Text>{t('Автоматическая пролонгация')}</Text>
                    </div>
                    <div className='mkdeposit__switcher'>
                        <Switcher
                            register={register}
                            field='withReplenishment'
                        ></Switcher>
                        <Text>{t('С пополнением')}</Text>
                    </div>
                    <div className='mkdeposit__switcher'>
                        <Switcher
                            register={register}
                            field='withAutoprolongation'
                        ></Switcher>{' '}
                        <Text>{t('С частичным снятием')}</Text>
                    </div>
                </div>
                <Text>
                    {t('Закрытие в любой момент времени без перерасчета %')}
                </Text>
                <div className='mkdeposit__buttons'>
                    <Button type='submit' variant='primary'>
                        <Text>{t('Отказаться')}</Text>
                    </Button>
                    <Button
                        disabled={!isValid}
                        type='submit'
                        variant='secondary'
                    >
                        <Text>{t('Оформить')}</Text>
                    </Button>
                </div>
            </Card>
        </Form>
    );
};
