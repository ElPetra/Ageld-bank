import { Button, Form, Text } from 'src/shared/ui';
import { CREATE_ACCOUNT } from 'src/widgets/accounts/model';

import {
    useAccountCreationForm,
    type Parametr
} from '../../lib/useAccountCreationForm';
import { ACCOUNT_CARD_AGREEMENT } from '../../model';

import type { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props {
    setFormStep?: React.Dispatch<React.SetStateAction<number>>;
    parametr: Parametr;
    Element: (props: { register: UseFormRegister<FieldValues> }) => JSX.Element;
}

export const AccountCreationForm = ({
    parametr,
    Element,
    setFormStep
}: Props) => {
    const { register, handleSubmit, onSubmit, dirtyFields } =
        useAccountCreationForm({ parametr, setFormStep });

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className='create__account__container'>
                <div className='create__account__container__variants'>
                    <Element register={register} />
                </div>
                {parametr !== ACCOUNT_CARD_AGREEMENT && (
                    <Button
                        disabled={!dirtyFields[parametr]}
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
