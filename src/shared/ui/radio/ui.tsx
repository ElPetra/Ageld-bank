import type { FieldValues, UseFormRegister } from 'react-hook-form';
import type { AccountType, CardReceiveType, Currency } from 'src/shared/model';

import './styles.scss';

interface Props {
    register: UseFormRegister<FieldValues>;
    value: AccountType | Currency | CardReceiveType;
    id: string;
    field: string;
}

export const Radio = ({ register, value, id, field }: Props) => {
    return (
        <input
            {...register(field, {
                required: true
            })}
            type='radio'
            value={value}
            id={id}
            className='hidden'
        />
    );
};
