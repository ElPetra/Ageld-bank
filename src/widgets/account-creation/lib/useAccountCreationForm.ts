import { type FieldValues, useForm } from 'react-hook-form';

import { localStorageApi, useCreateAccountMutation } from 'src/shared/api';

import type { AccountCreationData } from 'src/shared/model';

import type { Dispatch, SetStateAction } from 'react';

interface Params {
    parameter: Parameter;
    setFormStep?: Dispatch<SetStateAction<number>>;
    setResult?: Dispatch<SetStateAction<'success' | 'failed' | 'loading'>>;
}
export type Parameter =
    | 'accountType'
    | 'accountCurrency'
    | 'accountcard'
    | 'agreement';

export const useAccountCreationForm = ({
    parameter,
    setFormStep,
    setResult
}: Params) => {
    const {
        register,
        handleSubmit,
        formState: { dirtyFields }
    } = useForm<FieldValues>({
        defaultValues: { [parameter]: '' },
        mode: 'onTouched',
        reValidateMode: 'onChange'
    });
    const [createAccount] = useCreateAccountMutation();
    const onSubmit = async (data: FieldValues) => {
        if (parameter !== 'agreement') {
            localStorage.setItem(parameter, data[parameter]);
        }
        if (setFormStep) {
            setFormStep(prev => prev + 1);
        }
        if (parameter === 'agreement') {
            const creationData: AccountCreationData =
                localStorageApi.getAccountCreationData();
            const res = await createAccount(creationData);
            if (setResult) {
                if ('data' in res && res.data === 'Успешно создано') {
                    setResult('success');
                } else {
                    setResult('failed');
                }
            }
            localStorageApi.resetAccountData();
        }
    };
    return { register, handleSubmit, onSubmit, dirtyFields };
};
