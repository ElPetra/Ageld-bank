import { useForm } from 'react-hook-form';

import { Icon, Text, Radio, Form, Button, Card } from 'src/shared/ui';
import { CREATE_ACCOUNT, currency } from 'src/shared/model';

import type { FieldValues } from 'react-hook-form';
import type { Dispatch, SetStateAction } from 'react';

import './styles.scss';

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
                color='quadruple'
                gap='medium'
                padding='large'
                borderRadius='extra-large'
                direction='column'
                align='center'
            >
                <div className='create__account__variants'>
                    {currency.map(el => (
                        <div key={el.value} className='field'>
                            <Radio
                                register={register}
                                value={el.value}
                                id={el.value}
                                field='currencyName'
                            />
                            <label htmlFor={el.value}>
                                <div className='create__account__card__currency input'>
                                    <Icon icon={el.value} width={40} />
                                    <Text size='m' tag='h2' weight='medium'>
                                        {el.text}
                                    </Text>
                                </div>
                            </label>
                        </div>
                    ))}
                </div>
                <Button disabled={!isDirty} type='submit' variant='secondary'>
                    <Text>{CREATE_ACCOUNT}</Text>
                </Button>
            </Card>
        </Form>
    );
};
