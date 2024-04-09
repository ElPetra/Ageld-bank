import { type FieldValues, useForm } from 'react-hook-form';

import {
    ACCOUNT_CARD_RECIEVING,
    ACCOUNT_CURRENCY,
    ACCOUNT_TYPE
} from '../model';

import type { Dispatch, SetStateAction } from 'react';

interface Params {
    parametr: Parametr;
    setFormStep?: Dispatch<SetStateAction<number>>;
    setResult?: Dispatch<SetStateAction<'success' | 'failed'>>;
}
export type Parametr =
    | 'accountType'
    | 'accountCurrency'
    | 'accountcard'
    | 'agreement';

export const useAccountCreationForm = ({
    parametr,
    setFormStep,
    setResult
}: Params) => {
    const {
        register,
        handleSubmit,
        formState: { dirtyFields }
    } = useForm<FieldValues>({
        defaultValues: { [parametr]: '' },
        mode: 'onTouched',
        reValidateMode: 'onChange'
    });
    const onSubmit = (data: FieldValues) => {
        if (parametr !== 'agreement') {
            localStorage.setItem(parametr, data[parametr]);
        }
        if (setFormStep) {
            setFormStep(prev => prev + 1);
        }
        const isAccountCreated = Math.random() > 0.4; //на время отсутствия ручки на создание счета
        if (parametr === 'agreement') {
            if (isAccountCreated && setResult) {
                setResult('success');
            }
            localStorage.removeItem(ACCOUNT_CARD_RECIEVING);
            localStorage.removeItem(ACCOUNT_CURRENCY);
            localStorage.removeItem(ACCOUNT_TYPE);
        }
    };
    return { register, handleSubmit, onSubmit, dirtyFields };
};
