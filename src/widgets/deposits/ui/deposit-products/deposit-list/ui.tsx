import { useTranslation } from 'react-i18next';

import { ACCOUNTS, currencyMinFilters, RouteName } from 'src/shared/model';
import { Columns, Icon, Text } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { FilterBar } from 'src/entities/filter';
import { DepositProductCard } from 'src/entities/deposits';
import { DepositSumInput, DepositTermInput } from 'src/features/inputs';

import type {
    FieldValues,
    UseFormRegister,
    UseFormSetValue
} from 'react-hook-form';
import type { DepositProduct } from 'src/shared/model';

import './styles.scss';

interface Props {
    open: boolean;
    currency: string;
    setCurrency: (el: string) => void;
    handleFilter: () => void;
    resetFilter: () => void;
    register: UseFormRegister<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
    deposits: DepositProduct[];
}

export const DepositList = ({
    open,
    currency,
    setCurrency,
    handleFilter,
    resetFilter,
    register,
    setValue,
    deposits
}: Props) => {
    const { t } = useTranslation();
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
            <div>
                {deposits.length ? (
                    <Columns number='2'>
                        {deposits.map(el => (
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
            </div>
        </div>
    );
};
