import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { RouteName } from 'src/shared/model';
import { Container, Preloader } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { useAuth } from 'src/entities/user';
import { MultiStepForm } from 'src/features/multi-step-form';

import { Terms } from './terms';
import { ConfirmExtension } from './confirm-extension';

import type { FieldValues } from 'react-hook-form';

export const DepositExtensionPage = () => {
    const { t } = useTranslation();
    const { id } = useParams<string>();
    const { prolongedDeposit, error, isLoading } = useAuth();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { isValid }
    } = useForm<FieldValues>({
        defaultValues: { termInput: 1, termSlider: 1 },
        mode: 'onTouched',
        reValidateMode: 'onChange'
    });

    const prolongDeposit = async (data: FieldValues) => {
        await prolongedDeposit(id || '', data.termInput * 30);
    };

    return (
        <Container>
            <MultiStepForm
                variant='create-account'
                forms={[
                    {
                        id: 1,
                        title: t('Условия пролонгации депозита'),
                        component: (
                            <Terms
                                register={register}
                                setValue={setValue}
                                isValid={isValid}
                            />
                        )
                    },
                    {
                        id: 2,
                        title: '',
                        component: (
                            <ConfirmExtension
                                handleSubmit={handleSubmit}
                                prolongDeposit={prolongDeposit}
                            />
                        )
                    },
                    {
                        id: 3,
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
                                buttonLink={RouteName.DEPOSIT_PAGE + '/' + id}
                            />
                        ),
                        isResult: true
                    }
                ]}
            />
        </Container>
    );
};
