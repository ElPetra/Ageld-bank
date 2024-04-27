import { Text, Icon, Radio } from 'src/shared/ui';
import {
    type AccountType,
    CREDIT_ACCOUNT,
    CURRENT_ACCOUNT,
    DEPOSIT_ACCOUNT,
    CREATE_CURRENT_ACCOUNT_TITLE,
    CREATE_CREDIT_ACCOUNT_TITLE,
    CREATE_DEPOSIT_ACCOUNT_TITLE,
    ACCOUNT_TYPE
} from 'src/shared/model';

import type { FieldValues, UseFormRegister } from 'react-hook-form';
import type { SvgIconNames } from 'src/shared/ui';

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
    register: UseFormRegister<FieldValues>;
}
export const TypeVariant = ({ register }: Props) => {
    return (
        <>
            {accountTypes.map(el => (
                <div key={el} className='field'>
                    <Radio
                        register={register}
                        value={el}
                        id={el}
                        field={ACCOUNT_TYPE}
                    />
                    <label htmlFor={el}>
                        <div className='create__account__card input'>
                            <div className='create__account__card__header'>
                                <Text
                                    size='m'
                                    tag='h2'
                                    align='center'
                                    weight='medium'
                                >
                                    {typeMatcher[el].type}
                                </Text>
                                <Text align='center'>
                                    {typeMatcher[el].title}
                                </Text>
                            </div>
                            <Icon
                                width={380}
                                height={240}
                                icon={typeMatcher[el].icon}
                            />
                        </div>
                    </label>
                </div>
            ))}
        </>
    );
};
