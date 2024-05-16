import { useForm } from 'react-hook-form';

import { Button, Card, Columns, Form, Radio, Text } from 'src/shared/ui';
import {
    CREATE_ACCOUNT,
    CARD_DELIVERY_REQUIRED,
    GET_CARD_IN_OFFICE
} from 'src/shared/model';

import type { Dispatch, SetStateAction } from 'react';
import type { FieldValues } from 'react-hook-form';

const ReceiveTypes = [
    {
        id: 'inOffice',
        text: GET_CARD_IN_OFFICE
    },
    {
        id: 'delivery',
        text: CARD_DELIVERY_REQUIRED
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
                color='quadruple'
                gap='medium'
                padding='large'
                borderRadius='extra-large'
                direction='column'
                align='left'
            >
                <Columns number='2'>
                    {ReceiveTypes.map(el => (
                        <div key={el.id}>
                            <Radio
                                register={register}
                                value={el.id}
                                id={el.id}
                                field='receiving'
                            >
                                <div>
                                    <Text size='m' weight='medium'>
                                        {el.text}
                                    </Text>
                                </div>
                            </Radio>
                        </div>
                    ))}
                </Columns>
                <Button disabled={!isDirty} type='submit' variant='secondary'>
                    <div>{CREATE_ACCOUNT}</div>
                </Button>
            </Card>
        </Form>
    );
};
