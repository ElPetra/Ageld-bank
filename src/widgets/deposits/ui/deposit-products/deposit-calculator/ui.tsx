import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import { depositTermFilters, mockDepositPercentRate } from 'src/shared/model';
import { Button, Card, Form, Switcher, Text } from 'src/shared/ui';
import {
    calculateDaysInYear,
    calculateProfit,
    convertToDays
} from 'src/shared/lib';
import { FilterBar } from 'src/entities/filter';
import { DepositSumInput, DepositTermInput } from 'src/features/inputs';
import { UniversalDepositsList } from 'src/features/universal-deposit-list';

import type { FieldValues } from 'react-hook-form';
import type { DepositProfitability, DepositProduct } from 'src/shared/model';

import './styles.scss';

interface Props {
    deposits: DepositProduct[];
}
export const DepositCalculator = ({ deposits }: Props) => {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { isValid }
    } = useForm<FieldValues>({
        defaultValues: {
            withReplenishment: false,
            withPrivateWithdrawal: false,
            sumInput: 10000,
            sumSlider: 10000,
            termInput: 1,
            termSlider: 1
        },
        mode: 'onTouched',
        reValidateMode: 'onChange'
    });
    const [term, setTerm] = useState<string>(depositTermFilters[4]);
    const [open, setOpen] = useState<boolean>(false);
    const [profitabilityDeposits, setProfitabilityDeposits] = useState<
        DepositProfitability[]
    >([]);

    useEffect(() => {
        if (term === 'Другой срок') {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [term]);

    function calculateProfitDeposits(data: FieldValues) {
        const days = data.termInput * 30;
        const resultTerm = convertToDays(term) || days;
        const sumDeposit = parseInt(data.sumSlider);
        const daysInYear = calculateDaysInYear(new Date().getFullYear());
        const filteredDeposits = deposits.length
            ? deposits.filter(
                  el =>
                      sumDeposit >= el.amountMin &&
                      sumDeposit <= el.amountMax &&
                      resultTerm >= el.dayMin &&
                      resultTerm <= el.dayMax &&
                      (!data.withReplenishment || el.replenishment) &&
                      (!data.withPrivateWithdrawal || el.withdrawal !== 1)
              )
            : deposits;

        const newProfitabilityDeposits = filteredDeposits.map(
            (item: DepositProduct) => {
                const profit = calculateProfit(
                    sumDeposit,
                    mockDepositPercentRate,
                    resultTerm,
                    daysInYear
                );
                return {
                    id: item.id,
                    name: item.name,
                    percentRate: mockDepositPercentRate,
                    currency: item.currency,
                    income: profit + sumDeposit,
                    sum: profit
                };
            }
        );
        setProfitabilityDeposits(newProfitabilityDeposits);
    }
    return (
        <div className='deposit-calculator'>
            <div className='deposit-calculator__form'>
                <Text weight='bold' size='l'>
                    {t('Рассчитайте доходность по депозиту')}
                </Text>
                <Form onSubmit={handleSubmit(calculateProfitDeposits)}>
                    <Card padding='medium' direction='column' align='center'>
                        <DepositSumInput
                            register={register}
                            setValue={setValue}
                        />
                        <FilterBar
                            variant='secondary'
                            filters={depositTermFilters}
                            current={term}
                            setCurrent={setTerm}
                        />
                        {open && (
                            <DepositTermInput
                                register={register}
                                setValue={setValue}
                            />
                        )}
                        <div className='deposit-calculator__switchers'>
                            <Switcher
                                register={register}
                                field='withReplenishment'
                            >
                                {t('С пополнением')}
                            </Switcher>
                            <Switcher
                                register={register}
                                field='withPrivateWithdrawal'
                            >
                                {t('С частичным снятием')}
                            </Switcher>
                        </div>
                        <Button
                            disabled={!isValid}
                            variant='secondary'
                            type='submit'
                        >
                            {t('Рассчитать')}
                        </Button>
                    </Card>
                </Form>
            </div>
            <UniversalDepositsList deposits={profitabilityDeposits} />
        </div>
    );
};
