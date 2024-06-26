import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Button, Card, Form, Text } from 'src/shared/ui';
import { DepositTermInput } from 'src/features/inputs';

import type { Dispatch, SetStateAction } from 'react';
import type { FieldValues } from 'react-hook-form';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
    extendedDeposit: (id: string, term: number) => Promise<string | void>;
}

export const Terms = ({ isLast, setFormStep, extendedDeposit }: Props) => {
    const { t } = useTranslation();
    const { id } = useParams<string>();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { isValid }
    } = useForm<FieldValues>({
        defaultValues: { termInput: 1, termSlider: 1 },
        mode: 'onTouched',
        reValidateMode: 'onChange'
    });

    const onSubmit = async (data: FieldValues) => {
        await extendedDeposit(id || '', data.termInput);
        if (setFormStep && !isLast) {
            setFormStep(curr => {
                return curr + 1;
            });
        }
    };
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Card
                gap='medium'
                padding='large'
                borderRadius='extra-large'
                direction='column'
            >
                <DepositTermInput register={register} setValue={setValue} />
                <Button disabled={!isValid} type='submit' variant='secondary'>
                    <Text>{t('Пролонгировать депозит')}</Text>
                </Button>
            </Card>
        </Form>
    );
};
