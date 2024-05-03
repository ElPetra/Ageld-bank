import { useForm } from 'react-hook-form';

import { Icon, Text, Radio, Form, Button, Card } from 'src/shared/ui';
import { CREATE_ACCOUNT } from 'src/shared/model';

import { CARD_DELIVERY_REQUIRED, GET_CARD_IN_OFFICE } from '../../model';

import type { Dispatch, SetStateAction } from 'react';
import type { FieldValues } from 'react-hook-form';
import type { SvgIconNames } from 'src/shared/ui';
import type { CardReceiveType } from 'src/shared/model';

import './styles.scss';

const ReceiveTypes: CardReceiveType[] = ['inOffice', 'delivery'];

interface ReceiveVariant {
    text: string;
    icon: SvgIconNames;
}

const receiveVariants: Record<CardReceiveType, ReceiveVariant> = {
    inOffice: { text: GET_CARD_IN_OFFICE, icon: 'plant-lady' },
    delivery: { text: CARD_DELIVERY_REQUIRED, icon: 'paper-airplane-lady' }
};

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
                align='center'
            >
                <div className='create__account__variants'>
                    {ReceiveTypes.map(el => (
                        <div key={el} className='field'>
                            <Radio
                                register={register}
                                value={el}
                                id={el}
                                field='receiving'
                            >
                                <div className='create__account__card input'>
                                    <Icon
                                        width={353}
                                        height={274}
                                        icon={receiveVariants[el].icon}
                                    />
                                    <Text size='m' tag='h2' weight='medium'>
                                        {receiveVariants[el].text}
                                    </Text>
                                </div>
                            </Radio>
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
