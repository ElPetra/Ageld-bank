import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import {
    ACCOUNTS,
    ALL_CURRENCY,
    currencyMinFilters,
    RouteName,
    RUB
} from 'src/shared/model';
import { Columns, Icon, Preloader, Text } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { FilterBar } from 'src/entities/filter';
import { DepositProductCard } from 'src/entities/deposits';
import { DepositSumInput, DepositTermInput } from 'src/features/inputs';

import type { FieldValues } from 'react-hook-form';
import type { DepositProduct } from 'src/shared/model';

import './styles.scss';

interface Props {
    deposits: DepositProduct[];
    isLoading: boolean;
}

export const DepositList = ({ deposits, isLoading }: Props) => {
    const { t } = useTranslation();
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
                    onClick={handleFilter}
                >
                    <Icon icon='filter' />
                    <Text weight='bold'>{t('Фильтр')}</Text>
                </button>
            </div>
            {open && (
                <Columns number='2'>
                    <DepositSumInput
                        variant='primary'
                        register={register}
                        setValue={setValue}
                        currency={currency}
                    />
                    <DepositTermInput
                        variant='primary'
                        register={register}
                        setValue={setValue}
                    />
                </Columns>
            )}
            {isLoading ? (
                <Preloader />
            ) : (
                <>
                    {currentDeposits.length ? (
                        <Columns number='2'>
                            {currentDeposits.map(el => (
                                <DepositProductCard key={el.id} deposit={el} />
                            ))}
                        </Columns>
                    ) : (
                        <MessageCard
                            title={t('Депозит не найден')}
                            buttonText={t('Сбросить фильтр')}
                            buttonLink={RouteName.MAIN_PAGE + '/' + ACCOUNTS}
                            onClick={resetFilter}
                        />
                    )}
                </>
            )}
        </div>
    );
};
