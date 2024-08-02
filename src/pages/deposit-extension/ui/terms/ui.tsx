import { useTranslation } from 'react-i18next';

import { Button, Card, Columns, Form, Text } from 'src/shared/ui';
import { DepositTermInput } from 'src/features/inputs';

import type { Dispatch, SetStateAction } from 'react';
import type {
    FieldValues,
    UseFormRegister,
    UseFormSetValue
} from 'react-hook-form';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
    register: UseFormRegister<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
    isValid: boolean;
}

export const Terms = ({
    isLast,
    setFormStep,
    register,
    setValue,
    isValid
}: Props) => {
    const { t } = useTranslation();

    return (
        <Columns number='2'>
            <Form>
                <Card
                    gap='medium'
                    padding='large'
                    borderRadius='extra-large'
                    direction='column'
                >
                    <DepositTermInput register={register} setValue={setValue} />
                    <Button
                        variant='secondary'
                        type='button'
                        disabled={!isValid}
                        onClick={() => {
                            if (setFormStep && !isLast) {
                                setFormStep(curr => {
                                    return curr + 1;
                                });
                            }
                        }}
                    >
                        <Text>{t('Пролонгировать депозит')}</Text>
                    </Button>
                </Card>
            </Form>
        </Columns>
    );
};
