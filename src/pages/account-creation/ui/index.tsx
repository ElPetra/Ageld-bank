import { useState } from 'react';

import { MultiStepForm } from 'src/features/multi-step-form/index.js';
import { ACCOUNTS, RouteName } from 'src/shared/model/index.js';
import { MessageCard } from 'src/entities/message/index.js';
import {
    Container,
    Preloader,
    type SvgIconNames
} from 'src/shared/ui/index.js';

import {
    ACCOUNT_CREATION_FAILED,
    ACCOUNT_CREATION_SUCCESS,
    GO_TO_ACCOUNT_LIST
} from '../model/index.js';
import { AccountCreationForm } from './creation-form/index.js';
import {
    Agreement,
    CurrencyVariant,
    ReceivingVariant,
    TypeVariant
} from './parameters/index.js';

import './styles.scss';

interface Match {
    text: string;
    icon: SvgIconNames;
}

const resultMatcher: Record<string, Match> = {
    failed: {
        text: ACCOUNT_CREATION_FAILED,
        icon: 'failure-lady'
    },
    success: {
        text: ACCOUNT_CREATION_SUCCESS,
        icon: 'documents-folder-lady'
    }
};

export const AccountCreation = () => {
    const [result, setResult] = useState<'failed' | 'success' | 'loading'>(
        'loading'
    );
    return (
        <Container>
            <MultiStepForm
                variant='create-account'
                forms={[
                    {
                        id: 1,
                        title: 'Выберите тип счета',
                        component: (
                            <AccountCreationForm
                                parameter='accountType'
                                Element={TypeVariant}
                            />
                        )
                    },
                    {
                        id: 2,
                        title: 'Выберите валюту',
                        component: (
                            <AccountCreationForm
                                parameter='accountCurrency'
                                Element={CurrencyVariant}
                            />
                        )
                    },

                    {
                        id: 3,
                        title: 'Выберите тип карты',
                        component: (
                            <AccountCreationForm
                                parameter='accountcard'
                                Element={ReceivingVariant}
                            />
                        )
                    },
                    {
                        id: 4,
                        title: 'Ознакомьтесь с условиями счета',
                        component: (
                            <AccountCreationForm
                                parameter='agreement'
                                Element={Agreement}
                                setResult={setResult}
                            />
                        )
                    },
                    {
                        id: 5,
                        title: '',
                        component:
                            result === 'loading' ? (
                                <Preloader />
                            ) : (
                                <MessageCard
                                    text={resultMatcher[result].text}
                                    width={275}
                                    icon={resultMatcher[result].icon}
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
