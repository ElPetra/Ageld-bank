import { Radio } from 'src/shared/ui/radio';
import { Icon, type SvgIconNames, Text } from 'src/shared/ui';
import { type CardReceiveType } from 'src/shared/model';

import {
    ACCOUNT_CARD_RECIEVING,
    CARD_DELIVERY_REQUIRED,
    GET_CARD_IN_OFFICE
} from '../../model';

import type { FieldValues, UseFormRegister } from 'react-hook-form';

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
    register: UseFormRegister<FieldValues>;
}

export const ReceivingVariant = ({ register }: Props) => {
    return (
        <>
            {ReceiveTypes.map(el => (
                <div key={el} className='field'>
                    <Radio
                        register={register}
                        value={el}
                        id={el}
                        field={ACCOUNT_CARD_RECIEVING}
                    />
                    <label htmlFor={el}>
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
                    </label>
                </div>
            ))}
        </>
    );
};
