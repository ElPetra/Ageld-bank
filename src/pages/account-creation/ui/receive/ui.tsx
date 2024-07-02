import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Button, Card, Columns, Form, Radio, Text } from 'src/shared/ui';
import i18n from 'src/shared/model/i18n';

import type { Dispatch, SetStateAction } from 'react';
import type { FieldValues } from 'react-hook-form';

const ReceiveTypes = [
    {
        id: 'inOffice',
        text: i18n.t('Заберу в офисе банка')
    },
    {
        id: 'delivery',
        text: i18n.t('Потребуется доставка')
    }
];

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
}

export const ReceivingVariant = ({ isLast, setFormStep }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { isDirty }
    } = useForm<FieldValues>({
        defaultValues: { receiving: '' },
        mode: 'onTouched',
        reValidateMode: 'onChange'
    });
    const { t } = useTranslation();
    const onSubmit = () => {
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
                align='right'
            >
                <Columns number='2'>
                    {ReceiveTypes.map(el => (
                        <div key={el.id}>
                            <Radio
                                register={register}
                                value={el.id}
                                field='receiving'
                            >
                                <div>
                                    <Text size='m' weight='medium'>
                                        {t(el.text)}
                                    </Text>
                                </div>
                            </Radio>
                        </div>
                    ))}
                </Columns>
                <Button disabled={!isDirty} type='submit' variant='secondary'>
                    <div>{t('Открыть счет')}</div>
                </Button>
            </Card>
        </Form>
    );
};
