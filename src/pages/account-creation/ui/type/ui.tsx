import { useForm } from 'react-hook-form';

import { Card } from 'src/shared/ui';
import { Button, Form, Icon, Radio, Text } from 'src/shared/ui';
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
import type { FieldValues } from 'react-hook-form';
import type { SvgIconNames } from 'src/shared/ui';
import type { AccountType } from 'src/shared/model';

import './styles.scss';

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
    const {
        register,
        handleSubmit,
        formState: { isDirty }
    } = useForm<FieldValues>({
        defaultValues: { type: '' },
        mode: 'onTouched',
        reValidateMode: 'onChange'
    });

    const onSubmit = (data: FieldValues) => {
        setType(data.type);
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
                    {accountTypes.map(el => (
                        <div key={el} className='field'>
                            <Radio
                                register={register}
                                value={el}
                                id={el}
                                field='type'
                            >
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
