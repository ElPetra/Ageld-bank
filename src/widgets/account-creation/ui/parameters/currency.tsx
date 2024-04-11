import { Icon, Text, Radio } from 'src/shared/ui';
import { EUR, RUB, USD } from 'src/widgets/accounts/model';

import { ACCOUNT_CURRENCY } from '../../model';

import type { FieldValues, UseFormRegister } from 'react-hook-form';
import type { Currency } from 'src/shared/model';

const currencies: Currency[] = ['rub', 'usd', 'eur'];

const currencyText = {
    rub: RUB,
    usd: USD,
    eur: EUR
};

interface Props {
    register: UseFormRegister<FieldValues>;
}

export const CurrencyVariant = ({ register }: Props) => {
    return (
        <>
            {currencies.map(el => (
                <div key={el} className='field'>
                    <Radio
                        register={register}
                        value={el}
                        id={el}
                        field={ACCOUNT_CURRENCY}
                    />
                    <label htmlFor={el}>
                        <div className='create__account__card__currency input'>
                            <Icon icon={el} width={40} />
                            <Text size='m' tag='h2' weight='medium'>
                                {currencyText[el]}
                            </Text>
                        </div>
                    </label>
                </div>
            ))}
        </>
    );
};
