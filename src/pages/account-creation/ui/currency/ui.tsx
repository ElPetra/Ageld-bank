import { useForm } from 'react-hook-form';

import { Icon, Text, Radio, Form, Button, Card, Columns } from 'src/shared/ui';
import { EUR, RUB, USD } from 'src/shared/model';
import { useTranslation } from 'react-i18next';

import type { FieldValues } from 'react-hook-form';
import type { Dispatch, SetStateAction } from 'react';
import type { Currency } from 'src/shared/model';

import './styles.scss';

interface CurrencyVariant {
    value: Currency;
    text: string;
}

export const currencies: CurrencyVariant[] = [
    {
        value: 'rub',
        text: RUB
    },
    {
        value: 'eur',
        text: EUR
    },
    {
        value: 'usd',
        text: USD
    }
];

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
    setCurrencyName: Dispatch<SetStateAction<string>>;
}

export const CurrencyVariant = ({
    isLast,
    setFormStep,
    setCurrencyName
}: Props) => {
    const {
        register,
        handleSubmit,
        formState: { isDirty }
    } = useForm<FieldValues>({
        defaultValues: { currencyName: '' },
        mode: 'onTouched',
        reValidateMode: 'onChange'
    });
    const { t } = useTranslation();
    const onSubmit = (data: FieldValues) => {
        setCurrencyName(data.currencyName);
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
                <Columns number='3'>
                    {currencies.map(el => (
                        <div key={el.value}>
                            <Radio
                                register={register}
                                value={el.value}
                                field='currencyName'
                            >
                                <div className='create__account__currency'>
                                    <Icon icon={el.value} width={40} />
                                    <Text size='m' weight='medium'>
                                        {el.text}
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
