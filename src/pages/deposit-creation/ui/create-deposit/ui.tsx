import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
    Button,
    Card,
    Form,
    Text,
    Switcher,
    Icon,
    Columns,
    Select
} from 'src/shared/ui';
import { DEPOSITS, RouteName } from 'src/shared/model';
import { DepositSumInput, DepositTermInput } from 'src/features/inputs';

import type { Dispatch, SetStateAction } from 'react';
import type {
    FieldValues,
    UseFormRegister,
    UseFormSetValue
} from 'react-hook-form';

import './styles.scss';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
    register: UseFormRegister<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
    isDirty: boolean;
    isValid: boolean;
}

export const CreateDeposit = ({
    isLast,
    setFormStep,
    register,
    setValue,
    isDirty,
    isValid
}: Props) => {
    const { t } = useTranslation();

    return (
        <Form>
            <Card gap='medium' padding='large' direction='column'>
                <div className='create-deposit__main'>
                    <div className='create-deposit__main__title'>
                        <div className='create-deposit__main__title__icon'>
                            <Icon icon='rub' />
                        </div>
                        <Text size='m' weight='bold'>
                            {t('Депозит A-Geld Базовый')}
                        </Text>
                    </div>
                    <div className='create-deposit__main__percent_rate'>
                        <Text size='l' weight='bold'>
                            {'18%'}
                        </Text>
                        <Text color='tertiary' size='xs'>
                            {t('Процентная ставка')}
                        </Text>
                    </div>
                </div>
                <Columns number='2'>
                    <DepositSumInput
                        register={register}
                        setValue={setValue}
                        min={10000}
                        max={500000}
                        currency={'RUB'}
                    />
                    <DepositTermInput
                        register={register}
                        setValue={setValue}
                        min={1}
                        max={36}
                    />
                </Columns>
                <Columns number='2'>
                    <Select
                        variant='secondary'
                        label={t('Капитализация')}
                        options={[
                            {
                                value: 'Без капитализации',
                                label: t('Без капитализации')
                            },
                            {
                                value: 'Ежедневная',
                                label: t('Ежедневная')
                            },
                            {
                                value: 'Ежемесячная',
                                label: t('Ежемесячная')
                            },
                            {
                                value: 'Ежеквартальная',
                                label: t('Ежеквартальная')
                            },
                            {
                                value: 'Полугодовая',
                                label: t('Полугодовая')
                            },
                            {
                                value: 'Ежегодная',
                                label: t('Ежегодная')
                            }
                        ]}
                        register={register}
                        field='capitalization'
                    />
                </Columns>
                <div className='create-deposit__switchers'>
                    <Switcher register={register} field='withAutoProlongation'>
                        {t('Автоматическая пролонгация')}
                    </Switcher>
                    <Switcher register={register} field='withReplenishment'>
                        {t('С пополнением')}
                    </Switcher>

                    <Switcher register={register} field='withDrawal'>
                        {t('С частичным снятием')}
                    </Switcher>
                </div>
                <div>
                    {t('Закрытие в любой момент времени без перерасчета %')}
                </div>
                <div className='create-deposit__buttons'>
                    <Link to={RouteName.MAIN_PAGE + '/' + DEPOSITS}>
                        <Button type='button' variant='primary'>
                            {t('Отказаться')}
                        </Button>
                    </Link>
                    <Button
                        disabled={!isDirty || !isValid}
                        type='button'
                        variant='secondary'
                        onClick={() => {
                            if (setFormStep && !isLast) {
                                setFormStep(curr => {
                                    return curr + 1;
                                });
                            }
                        }}
                    >
                        {t('Оформить')}
                    </Button>
                </div>
            </Card>
        </Form>
    );
};
