import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useGetDepositProductQuery } from 'src/shared/api';
import { MessageCard } from 'src/entities/message';

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
    UseFormSetValue,
    UseFormGetValues
} from 'react-hook-form';

import './styles.scss';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
    register: UseFormRegister<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
    isValid: boolean;
    getValues: UseFormGetValues<FieldValues>;
}

export const CreateDeposit = ({
    isLast,
    setFormStep,
    register,
    setValue,
    getValues,
    isValid
}: Props) => {
    const { t } = useTranslation();
    const { id } = useParams();
    const { data: deposit } = useGetDepositProductQuery({
        id: id || ''
    });

    return deposit ? (
        <Form>
            <Card gap='medium' padding='large' direction='column'>
                <div className='create-deposit__main'>
                    <div className='create-deposit__main__title'>
                        <div className='create-deposit__main__title__icon'>
                            <Icon icon='rub' />
                        </div>
                        <Text size='m' weight='bold'>
                            {`A-Geld ${deposit.name}`}
                        </Text>
                    </div>
                    <div className='create-deposit__main__percent_rate'>
                        <Text size='l' weight='bold'>
                            {`${deposit.percentRate}%`}
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
                        min={deposit.amountMin}
                        max={deposit.amountMax}
                        currency={deposit.currency.toUpperCase()}
                    />
                    <DepositTermInput
                        register={register}
                        setValue={setValue}
                        min={Math.ceil(deposit.dayMin / 30)}
                        max={Math.floor(deposit.dayMax / 30)}
                    />
                </Columns>
                <Columns number='2'>
                    <Select
                        disabled
                        defaultValue={getValues('capitalization')}
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
                    <Switcher
                        disabled
                        register={register}
                        field='withReplenishment'
                    >
                        {t('С пополнением')}
                    </Switcher>

                    <Switcher disabled register={register} field='withDrawal'>
                        {t('С частичным снятием')}
                    </Switcher>
                </div>
                {deposit.revocable && (
                    <div>
                        {t('Закрытие в любой момент времени без перерасчета %')}
                    </div>
                )}
                <div className='create-deposit__buttons'>
                    <Link to={RouteName.MAIN_PAGE + '/' + DEPOSITS}>
                        <Button type='button' variant='primary'>
                            {t('Отказаться')}
                        </Button>
                    </Link>
                    <Button
                        disabled={!isValid}
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
    ) : (
        <MessageCard
            title={t('Депозит не найден')}
            buttonText={t('Перейти к списку депозитов')}
            buttonLink={RouteName.MAIN_PAGE + '/' + DEPOSITS}
        />
    );
};
