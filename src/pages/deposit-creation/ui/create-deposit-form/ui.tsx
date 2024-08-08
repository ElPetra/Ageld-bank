import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Preloader } from 'src/shared/ui';
import { depositCapitalization, DEPOSITS, RouteName } from 'src/shared/model';
import { MessageCard } from 'src/entities/message';
import { MultiStepForm } from 'src/features/multi-step-form';
import { useAuth } from 'src/entities/user';

import { ConfirmCreation } from './confirm-creation';
import { CreateDeposit } from './create-deposit';

import type { FieldValues } from 'react-hook-form';
import type { DepositProductDetails } from 'src/shared/model';

interface Props {
    deposit: DepositProductDetails;
}

export const CreateDepositForm = ({ deposit }: Props) => {
    const { t } = useTranslation();
    const { createdDeposit, error, isLoading } = useAuth();
    const {
        register,
        setValue,
        getValues,
        handleSubmit,
        formState: { isValid }
    } = useForm<FieldValues>({
        defaultValues: {
            termInput: Math.ceil(deposit.dayMin / 30),
            termSlider: Math.ceil(deposit.dayMin / 30),
            sumInput: deposit.amountMin,
            sumSlider: deposit.amountMin,
            capitalization: depositCapitalization[deposit.capitalization],
            withAutoProlongation: false,
            withReplenishment: deposit.replenishment,
            withDrawal: Math.floor(deposit.withdrawal / 2)
        },
        mode: 'onTouched',
        reValidateMode: 'onChange'
    });

    const createDeposit = async (data: FieldValues) => {
        await createdDeposit(
            id || '',
            'no data',
            data.termInput * 30,
            'no data'
        );
    };

    return (
        <MultiStepForm
            variant='create-account'
            forms={[
                {
                    id: 1,
                    title: t('Оформить депозит'),
                    component: (
                        <CreateDeposit
                            getValues={getValues}
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
                        <ConfirmCreation
                            handleSubmit={handleSubmit}
                            createDeposit={createDeposit}
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
                                    ? t('Не удалось оформить депозит')
                                    : t('Ваш депозит успешно оформлен')
                            }
                            width={300}
                            icon={
                                error ? 'failure-lady' : 'documents-folder-lady'
                            }
                            buttonText={t('Вернуться к странице депозитов')}
                            buttonLink={RouteName.MAIN_PAGE + '/' + DEPOSITS}
                        />
                    ),
                    isResult: true
                }
            ]}
        />
    );
};
