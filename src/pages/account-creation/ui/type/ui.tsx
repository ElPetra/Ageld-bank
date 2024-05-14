import { Fragment } from 'react';

import { Columns } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import {
    CREATE_ACCOUNT,
    CREATE_CREDIT_ACCOUNT_TITLE,
    CREATE_DEBIT_ACCOUNT_TITLE,
    CREATE_DEPOSIT_ACCOUNT_TITLE,
    CREDIT_ACCOUNT,
    DEBIT_ACCOUNT,
    DEPOSIT_ACCOUNT
} from 'src/shared/model';

import type { Dispatch, SetStateAction } from 'react';
import type { SvgIconName } from 'src/shared/ui';
import type { AccountType } from 'src/shared/model';

interface Types {
    value: AccountType;
    type: string;
    title: string;
    icon: SvgIconName;
}

const types: Types[] = [
    {
        value: 'credit',
        type: CREDIT_ACCOUNT,
        title: CREATE_CREDIT_ACCOUNT_TITLE,
        icon: 'beach-lady'
    },
    {
        value: 'debit',
        type: DEBIT_ACCOUNT,
        title: CREATE_DEBIT_ACCOUNT_TITLE,
        icon: 'paper-airplane-lady'
    },
    {
        value: 'deposit',
        type: DEPOSIT_ACCOUNT,
        title: CREATE_DEPOSIT_ACCOUNT_TITLE,
        icon: 'businessman-icon'
    }
];

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
    setType: Dispatch<SetStateAction<string>>;
}

export const TypeVariant = ({ isLast, setFormStep, setType }: Props) => {
    return (
        <Columns number='3' align='center'>
            {types.map(el => (
                <Fragment key={el.value}>
                    <MessageCard
                        title={el.type}
                        text={el.title}
                        gap='extra-small'
                        padding='medium'
                        width={380}
                        icon={el.icon}
                        buttonText={CREATE_ACCOUNT}
                        onClick={() => {
                            setType(el.value);
                            if (setFormStep && !isLast) {
                                setFormStep(curr => {
                                    return curr + 1;
                                });
                            }
                        }}
                        isMargin={false}
                    />
                </Fragment>
            ))}
        </Columns>
    );
};
