import { Icon, Text, Radio } from 'src/shared/ui';
import { ACCOUNT_CURRENCY, currency } from 'src/shared/model';

import type { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props {
    register: UseFormRegister<FieldValues>;
}

export const CurrencyVariant = ({ register }: Props) => {
    return (
        <>
            {currency.map(el => (
                <div key={el.value} className='field'>
                    <Radio
                        register={register}
                        value={el.value}
                        id={el.value}
                        field={ACCOUNT_CURRENCY}
                    />
                    <label htmlFor={el.value}>
                        <div className='create__account__card__currency input'>
                            <Icon icon={el.value} width={40} />
                            <Text size='m' tag='h2' weight='medium'>
                                {el.text}
                            </Text>
                        </div>
                    </label>
                </div>
            ))}
        </>
    );
};
