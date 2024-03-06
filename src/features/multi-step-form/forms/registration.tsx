import { PhoneInput } from 'src/features/inputs';
import { Button, Form } from 'src/shared/ui';
import { useForm } from 'react-hook-form';

import type { Dispatch, SetStateAction } from 'react';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
}

export const Registration = ({ isLast, setFormStep }: Props) => {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: 'onBlur', reValidateMode: 'onChange' });

    return (
        <Form
            onSubmit={handleSubmit(data => {
                if (setFormStep && !isLast) {
                    setFormStep(curr => curr + 1);
                }
                console.log(data);
            })}
        >
            <PhoneInput
                clear={() => setValue('phone', '')}
                label={'phone'}
                register={register}
                error={!!errors?.phone}
            />
            <Button variant='secondary' size='large' type='submit'>
                Далее
            </Button>
        </Form>
    );
};
