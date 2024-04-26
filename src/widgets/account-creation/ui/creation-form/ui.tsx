import { Button, Form, Text } from 'src/shared/ui/index.js';
import { CREATE_ACCOUNT } from 'src/widgets/accounts/model/index.js';

import {
    type Parameter,
    useAccountCreationForm
} from '../../lib/useAccountCreationForm.js';
import { ACCOUNT_CARD_AGREEMENT } from '../../model/index.js';

import type { Dispatch, SetStateAction } from 'react';

import type { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props {
    setFormStep?: Dispatch<SetStateAction<number>>;
    parameter: Parameter;
    Element: (props: { register: UseFormRegister<FieldValues> }) => JSX.Element;
    setResult?: Dispatch<SetStateAction<'success' | 'failed' | 'loading'>>;
}

export const AccountCreationForm = ({
    parameter,
    Element,
    setFormStep,
    setResult
}: Props) => {
    const { register, handleSubmit, onSubmit, dirtyFields } =
        useAccountCreationForm({ parameter, setFormStep, setResult });

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className='create__account__container'>
                <div className='create__account__container__variants'>
                    <Element register={register} />
                </div>
                {parameter !== ACCOUNT_CARD_AGREEMENT && (
                    <Button
                        disabled={!dirtyFields[parameter]}
                        type='submit'
                        variant='secondary'
                    >
                        <Text>{CREATE_ACCOUNT}</Text>
                    </Button>
                )}
            </div>
        </Form>
    );
};
