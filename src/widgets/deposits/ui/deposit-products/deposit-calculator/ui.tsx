import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import { depositTermFilters } from 'src/shared/model';
import { Button, Card, Form, Switcher, Text } from 'src/shared/ui';
import { FilterBar } from 'src/entities/filter';
import { DepositSumInput, DepositTermInput } from 'src/features/inputs';
import { UniversalDepositsList } from 'src/features/universal-deposit-list';

import type { FieldValues } from 'react-hook-form';
import type { DepositProfitability } from 'src/shared/model';

import './styles.scss';

// Пока моканные данные для демонстрации интерфейса
const profitabilityDeposits: DepositProfitability[] = [
    {
        id: 1,
        name: 'A-Geld Базовый',
        currency: 'rub',
        percentRate: 7,
        sum: 1110022,
        income: 33446
    },
    {
        id: 2,
        name: 'A-Geld Стандарт',
        currency: 'rub',
        percentRate: 11.5,
        sum: 1013840,
        income: 13840
    }
];

export const DepositCalculator = () => {
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

    useEffect(() => {
        if (term === 'Другой срок') {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [term]);

    return (
        <div className='deposit-calculator'>
            <div className='deposit-calculator__form'>
                <Text weight='bold' size='l'>
                    {t('Рассчитайте доходность по депозиту')}
                </Text>
                <Form onSubmit={handleSubmit(() => {})}>
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
