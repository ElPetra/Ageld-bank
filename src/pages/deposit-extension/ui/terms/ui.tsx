import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Button, Card, Form, SliderInput, Text } from 'src/shared/ui';

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
        defaultValues: { input: 3, slider: 3 },
        mode: 'onTouched',
        reValidateMode: 'onChange'
    });

    const onSubmit = async (data: FieldValues) => {
        await extendedDeposit(id || '', data.input);
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
                <SliderInput
                    register={register}
                    setValue={setValue}
                    label={t('Срок пролонгации')}
                    min={3}
                    max={36}
                    inputField='input'
                    sliderField='slider'
                    unit={t('мес')}
                />
                <Button
                    cursorNotAllowed={!isValid}
                    disabled={!isValid}
                    type='submit'
                    variant='secondary'
                >
                    <Text>{t('Пролонгировать депозит')}</Text>
                </Button>
            </Card>
        </Form>
    );
};
