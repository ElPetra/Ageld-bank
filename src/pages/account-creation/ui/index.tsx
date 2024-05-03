import { useState } from 'react';

import { ACCOUNTS, RouteName } from 'src/shared/model';
import { Container, Preloader } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { useAuth } from 'src/entities/user';
import { MultiStepForm } from 'src/features/multi-step-form';

import {
    ACCOUNT_CREATION_FAILED,
    ACCOUNT_CREATION_SUCCESS,
    GO_TO_ACCOUNT_LIST
} from '../model';

import { TypeVariant } from './type';
import { CurrencyVariant } from './currency';
import { ReceivingVariant } from './receive';
import { Agreement } from './agreement';

export const AccountCreation = () => {
    const [type, setType] = useState<string>('');
    const [currencyName, setCurrencyName] = useState<string>('');

    const { createdAccount, error, isLoading } = useAuth();
    return (
        <Container>
            <MultiStepForm
                variant='create-account'
                forms={[
                    {
                        id: 1,
                        title: 'Выберите тип счета',
                        component: <TypeVariant setType={setType} />
                    },
                    {
                        id: 2,
                        title: 'Выберите валюту',
                        component: (
                            <CurrencyVariant
                                setCurrencyName={setCurrencyName}
                            />
                        )
                    },
                    {
                        id: 3,
                        title: 'Выберите тип карты',
                        component: <ReceivingVariant />
                    },
                    {
                        id: 4,
                        title: 'Ознакомьтесь с условиями счета',
                        component: (
                            <Agreement
                                createdAccount={createdAccount}
                                type={type}
                                currencyName={currencyName}
                            />
                        )
                    },
                    {
                        id: 5,
                        title: '',
                        component: isLoading ? (
                            <Preloader />
                        ) : (
                            <MessageCard
                                text={
                                    error
                                        ? ACCOUNT_CREATION_FAILED
                                        : ACCOUNT_CREATION_SUCCESS
                                }
                                width={275}
                                icon={
                                    error
                                        ? 'failure-lady'
                                        : 'documents-folder-lady'
                                }
                                buttonText={GO_TO_ACCOUNT_LIST}
                                buttonLink={
                                    RouteName.MAIN_PAGE + '/' + ACCOUNTS
                                }
                            />
                        ),
                        isResult: true
                    }
                ]}
            />
        </Container>
    );
};
