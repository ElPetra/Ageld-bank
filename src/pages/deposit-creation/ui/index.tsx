import { useEffect } from 'react';

import { Container } from 'src/shared/ui';
import { isErrorStatusUnauthorized } from 'src/shared/lib';
import { MessageCard } from 'src/entities/message';
import { useAuth } from 'src/entities/user';
import { useGetInfoQuery } from 'src/shared/api';
import { useTranslation } from 'react-i18next';
import { BackButton, MultiStepForm } from 'src/features/multi-step-form';

import { MakingDeposit } from './making-deposit';

export const DepositCreationPage = () => {
    const { t } = useTranslation();
    const { signedOut } = useAuth();
    const { error } = useGetInfoQuery();

    useEffect(() => {
        if (isErrorStatusUnauthorized(error)) {
            return signedOut();
        }
    }, [error, signedOut]);
    return (
        <Container>
            <BackButton />
            <MultiStepForm
                variant='create-account'
                forms={[
                    {
                        id: 1,
                        title: t('Оформить депозит'),
                        component: <MakingDeposit />
                    },
                    {
                        id: 2,
                        title: '',
                        component: (
                            <MessageCard
                                middleOfForm={true}
                                title={
                                    error
                                        ? t('Не удалось оформить депозит')
                                        : t(
                                              'Вы действительно хотите открыть депозит?'
                                          )
                                }
                                width={275}
                                icon={
                                    error
                                        ? 'confirmation-lady'
                                        : 'confirmation-lady'
                                }
                                buttonText={t('Да')}
                                secondButtonLink={'/deposits'}
                                secondButtonText={t('Отмена')}
                            />
                        )
                    },
                    {
                        id: 3,
                        title: '',
                        component: (
                            <MessageCard
                                title={
                                    error
                                        ? t('Не удалось оформить депозит')
                                        : t('Ваш депозит успешно оформлен')
                                }
                                width={275}
                                icon={
                                    error
                                        ? 'failure-lady'
                                        : 'paper-airplane-lady'
                                }
                                buttonText={t('Вернуться к странице депозитов')}
                                buttonLink={'/deposits/deposits-products'}
                            />
                        ),
                        isResult: true
                    }
                ]}
            />
        </Container>
    );
};
