import { useState } from 'react';

import { ACCOUNTS, RouteName } from 'src/shared/model';
import { Container, Preloader } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { useAuth } from 'src/entities/user';
import { MultiStepForm } from 'src/features/multi-step-form';
import { useTranslation } from 'react-i18next';

import { TypeVariant } from './type';
import { CurrencyVariant } from './currency';
import { ReceivingVariant } from './receive';
import { Agreement } from './agreement';

export const AccountCreationPage = () => {
    const [type, setType] = useState<string>('');
    const [currencyName, setCurrencyName] = useState<string>('');
    const { t } = useTranslation();
    const { createdAccount, error, isLoading } = useAuth();
    return (
        <Container>
            <MultiStepForm
                variant='create-account'
                forms={[
                    {
                        id: 1,
                        title: t('Выберите тип счета'),
                        component: <TypeVariant setType={setType} />
                    },
                    {
                        id: 2,
                        title: t('Выберите валюту'),
                        component: (
                            <CurrencyVariant
                                setCurrencyName={setCurrencyName}
                            />
                        )
                    },
                    {
                        id: 3,
                        title: t('Выберите тип карты'),
                        component: <ReceivingVariant />
                    },
                    {
                        id: 4,
                        title: t('Ознакомьтесь с условиями счета'),
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
                                title={t(
                                    error
                                        ? 'Не удалось открыть счет'
                                        : 'Мы открыли вам счет!'
                                )}
                                width={275}
                                icon={
                                    error
                                        ? 'failure-lady'
                                        : 'documents-folder-lady'
                                }
                                buttonText={t('Перейти к списку счетов')}
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
