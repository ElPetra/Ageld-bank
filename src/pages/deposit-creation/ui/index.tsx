import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Container } from 'src/shared/ui';
import { DEPOSITS, RouteName } from 'src/shared/model';
import { useAuth } from 'src/entities/user';
import { MessageCard } from 'src/entities/message';
import { MultiStepForm } from 'src/features/multi-step-form';

import { ConfirmCreation } from 'src/pages/deposit-creation/ui/confirm-creation';

import { CreateDeposit } from './create-deposit';

import type { FieldValues } from 'react-hook-form';

export const DepositCreationPage = () => {
    const { t } = useTranslation();
    const { error } = useAuth();

    const {
        register,
        setValue,
        handleSubmit,
        formState: { isDirty, isValid }
    } = useForm<FieldValues>({
        defaultValues: {
            termInput: 1,
            termSlider: 1,
            sumInput: 10000,
            sumSlider: 10000,
            capitalization: '',
            withAutoProlongation: false,
            withReplenishment: false,
            withDrawal: false
        },
        mode: 'onTouched',
        reValidateMode: 'onChange'
    });

    const createDeposit = async (data: FieldValues) => {
        // eslint-disable-next-line
        console.log(data);
    };

    return (
        <Container>
            <MultiStepForm
                variant='create-account'
                forms={[
                    {
                        id: 1,
                        title: t('Оформить депозит'),
                        component: (
                            <CreateDeposit
                                register={register}
                                setValue={setValue}
                                isDirty={isDirty}
                                isValid={isValid}
                            />
                        )
                    },
                    {
                        id: 2,
                        title: '',
                        component: (
                            <ConfirmCreation
                                handleSubmit={handleSubmit}
                                createDeposit={createDeposit}
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
                                width={300}
                                icon={
                                    error
                                        ? 'failure-lady'
                                        : 'documents-folder-lady'
                                }
                                buttonText={t('Вернуться к странице депозитов')}
                                buttonLink={
                                    RouteName.MAIN_PAGE + '/' + DEPOSITS
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
