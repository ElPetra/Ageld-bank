import { Fragment } from 'react';

import { Columns } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import {
    CREATE_ACCOUNT,
    CREATE_CREDIT_ACCOUNT_TITLE,
    CREATE_CURRENT_ACCOUNT_TITLE,
    CREATE_DEPOSIT_ACCOUNT_TITLE,
    CREDIT_ACCOUNT,
    CURRENT_ACCOUNT,
    DEPOSIT_ACCOUNT
} from 'src/shared/model';

import type { Dispatch, SetStateAction } from 'react';
import type { SvgIconNames } from 'src/shared/ui';
import type { AccountType } from 'src/shared/model';

interface MatchResult {
    type: string;
    title: string;
    icon: SvgIconNames;
}

const typeMatcher: Record<AccountType, MatchResult> = {
    master: {
        type: CURRENT_ACCOUNT,
        title: CREATE_CURRENT_ACCOUNT_TITLE,
        icon: 'paper-airplane-lady'
    },
    credit: {
        type: CREDIT_ACCOUNT,
        title: CREATE_CREDIT_ACCOUNT_TITLE,
        icon: 'beach-lady'
    },
    deposit: {
        type: DEPOSIT_ACCOUNT,
        title: CREATE_DEPOSIT_ACCOUNT_TITLE,
        icon: 'businessman'
    }
};

const accountTypes: AccountType[] = ['master', 'deposit', 'credit'];

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
    setType: Dispatch<SetStateAction<string>>;
}

export const TypeVariant = ({ isLast, setFormStep, setType }: Props) => {
    return (
        <Columns number='3' align='center'>
            {accountTypes.map(el => (
                <Fragment key={el}>
                    <MessageCard
                        title={typeMatcher[el].type}
                        text={typeMatcher[el].title}
                        gap='extra-small'
                        padding='medium'
                        width={380}
                        icon={typeMatcher[el].icon}
                        buttonText={CREATE_ACCOUNT}
                        onClick={() => {
                            setType(el);
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
