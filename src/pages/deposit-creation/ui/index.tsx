import React from 'react';
import { Container, Preloader } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { useAuth } from 'src/entities/user';
import { RouteName } from 'src/shared/model';
import { useTranslation } from 'react-i18next';
import { BackButton, MultiStepForm } from 'src/features/multi-step-form';

import { MakingDeposit } from './making-deposit';



export const DepositCreationPage = () => {
    const { t } = useTranslation();
    const { error, isLoading } = useAuth();
    

    return (
        <Container>
            <BackButton />
            <MultiStepForm
                variant='create-account'
                forms={[
                    {
                        id: 1,
                        title: t('Условия пролонгации депозита'),
                        component: <MakingDeposit />
                    },
                    {
                        id: 2,
                        title: '',
                        component: isLoading ? (
                            <Preloader />
                        ) : (
                            <MessageCard
                                title={
                                    error
                                        ? t('Не удалось пролонгировать депозит')
                                        : t('Ваш депозит успешно пролонгирован')
                                }
                                width={275}
                                icon={
                                    error
                                        ? 'failure-lady'
                                        : 'documents-folder-lady'
                                }
                                buttonText={t('Вернуться к странице депозита')}
                                buttonLink={RouteName.DEPOSIT_PAGE + '/'}
                            />
                        ),
                        isResult: true
                    }
                ]}
            />
        </Container>
    );
};
