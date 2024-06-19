import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
    ACCOUNTS,
    ALL_CURRENCY,
    currencyMinFilters,
    RouteName,
    RUB
} from 'src/shared/model';
import { Columns, Icon, SliderInput, Text } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { FilterBar } from 'src/entities/filter';
import { DepositCard } from 'src/entities/deposits/deposit-card';

import { type FieldValues, useForm } from 'react-hook-form';

import type { DepositProduct } from 'src/shared/model';

import './styles.scss';

const deposits: DepositProduct[] = [
    {
        id: '123e4567-e89b-12d3-a456-426614174005',
        name: 'Депозит A-Geld Базовый',
        currency: 'rub',
        dayMin: 30,
        dayMax: 270,
        amountMin: 1000,
        amountMax: 100000,
        capitalization: 1,
        replenishment: true,
        withdrawal: 2,
        revocable: true,
        percentRate: 17.7
    },
    {
        id: '123e4567-e89b-12d3-a456-426614174006',
        name: 'Депозит A-Geld Дополнительный',
        currency: 'eur',
        dayMin: 90,
        dayMax: 900,
        amountMin: 4000,
        amountMax: 50000,
        capitalization: 3,
        replenishment: true,
        withdrawal: 2,
        revocable: true,
        percentRate: 15.5
    },
    {
        id: '123e4567-e89b-12d3-a456-426614174007',
        name: 'Депозит A-Geld Премиальный',
        currency: 'eur',
        dayMin: 60,
        dayMax: 400,
        amountMin: 234,
        amountMax: 23456,
        capitalization: 4,
        replenishment: true,
        withdrawal: 2,
        revocable: true,
        percentRate: 7.7
    },
    {
        id: '123e4567-e89b-12d3-a456-426614174008',
        name: 'Депозит A-Geld Длительный',
        currency: 'usd',
        dayMin: 120,
        dayMax: 1080,
        amountMin: 1200,
        amountMax: 400000,
        capitalization: 5,
        replenishment: true,
        withdrawal: 2,
        revocable: true,
        percentRate: 11.3
    }
];

export const DepositProducts = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState<boolean>(false);
    const [currency, setCurrency] = useState<string>(ALL_CURRENCY);

    const { register, setValue, watch, reset } = useForm<FieldValues>({
        defaultValues: {
            dayInput: 30,
            daySlider: 30,
            sumInput: 1000,
            sumSlider: 1000
        },
        mode: 'onTouched',
        reValidateMode: 'onChange'
    });

    const currentDeposits = deposits.filter(
        el =>
            !open ||
            (el.currency === currency.toLowerCase() &&
                el.dayMin <= watch('dayInput') &&
                el.dayMax >= watch('dayInput') &&
                el.amountMin <= watch('sumInput') &&
                el.amountMax >= watch('sumInput'))
    );

    return (
        <div className='deposit-list'>
            <div
                className={`deposit-list__filters ${open && 'deposit-list__filters__open'}`}
            >
                {open && (
                    <FilterBar
                        filters={currencyMinFilters}
                        current={currency}
                        setCurrent={setCurrency}
                    />
                )}
                <button
                    className='deposit-list__filters__button'
                    onClick={() => {
                        setOpen(prev => !prev);
                        if (open) {
                            setCurrency(ALL_CURRENCY);
                            reset();
                        } else {
                            setCurrency(RUB);
                        }
                    }}
                >
                    <Icon icon='filter' />
                    <Text weight='bold'>{t('Фильтр')}</Text>
                </button>
            </div>
            {open && (
                <Columns number='2'>
                    <SliderInput
                        register={register}
                        setValue={setValue}
                        label={t('Сумма депозита')}
                        min={1000}
                        max={10000000}
                        inputField='sumInput'
                        sliderField='sumSlider'
                        unit={currency}
                    />
                    <SliderInput
                        register={register}
                        setValue={setValue}
                        label={t('Срок депозита')}
                        min={30}
                        max={1080}
                        inputField='dayInput'
                        sliderField='daySlider'
                        unit={t('дней')}
                    />
                </Columns>
            )}
            <div>
                {currentDeposits.length ? (
                    <Columns number='2'>
                        {currentDeposits.map(el => (
                            <DepositCard key={el.id} deposit={el} />
                        ))}
                    </Columns>
                ) : (
                    <MessageCard
                        title={t('Депозит не найден')}
                        buttonText={t('Сбросить фильтр')}
                        buttonLink={RouteName.MAIN_PAGE + '/' + ACCOUNTS}
                        onClick={() => {
                            setOpen(false);
                            setCurrency(ALL_CURRENCY);
                            reset();
                        }}
                    />
                )}
            </div>
        </div>
    );
};
