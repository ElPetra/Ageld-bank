import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ALL_CURRENCY, RUB } from 'src/shared/model';

import { DepositList } from './deposit-list';

import { DepositCalculator } from './deposit-calculator';

import type { FieldValues } from 'react-hook-form';
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
        currency: 'rub',
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
        currency: 'rub',
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
        currency: 'rub',
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
    const [open, setOpen] = useState<boolean>(false);
    const [currency, setCurrency] = useState<string>(ALL_CURRENCY);

    const { register, setValue, watch, reset } = useForm<FieldValues>({
        defaultValues: {
            termInput: 1,
            termSlider: 1,
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
                el.dayMin <= watch('termInput') * 30 &&
                el.dayMax >= watch('termInput') * 30 &&
                el.amountMin <= watch('sumInput') &&
                el.amountMax >= watch('sumInput'))
    );

    const handleFilter = () => {
        setOpen(prev => !prev);
        if (open) {
            setCurrency(ALL_CURRENCY);
            reset();
        } else {
            setCurrency(RUB);
        }
    };

    const resetFilter = () => {
        setOpen(false);
        setCurrency(ALL_CURRENCY);
        reset();
    };

    return (
        <div className='deposit-products'>
            <DepositList
                open={open}
                currency={currency}
                setCurrency={setCurrency}
                handleFilter={handleFilter}
                resetFilter={resetFilter}
                register={register}
                setValue={setValue}
                deposits={currentDeposits}
            />
            <DepositCalculator deposits={currentDeposits} />
        </div>
    );
};
