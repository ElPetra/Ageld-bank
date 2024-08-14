import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { Preloader } from 'src/shared/ui';
import { isErrorStatusUnauthorized } from 'src/shared/lib';
import {
    depositCapitalization,
    DEPOSITS,
    RouteName,
    ACCOUNTS
} from 'src/shared/model';
import { MessageCard } from 'src/entities/message';
import { MultiStepForm } from 'src/features/multi-step-form';
import { useAuth } from 'src/entities/user';
import { useGetAccountQuery } from 'src/shared/api';

import { ConfirmCreation } from './confirm-creation';
import { CreateDeposit } from './create-deposit';

import type { FieldValues } from 'react-hook-form';
import type { DepositProductDetails } from 'src/shared/model';

interface Props {
    deposit: DepositProductDetails;
}

export const CreateDepositForm = ({ deposit }: Props) => {
    const { t } = useTranslation();
    const { createdDeposit, error, isLoading, signedOut } = useAuth();
    const { id } = useParams();
    const {
        data: account,
        error: errorAcount,
        isLoading: isLoadingAcount
    } = useGetAccountQuery();
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

    useEffect(() => {
        if (isErrorStatusUnauthorized(errorAcount)) {
            return signedOut();
        }
    }, [errorAcount, signedOut]);

    const createDeposit = async (data: FieldValues) => {
        await createdDeposit(
            id || '',
            deposit.percentRate.toString(),
            data.termInput * 30,
            'a1a2c3d4-e5f6-4890-abcd-ef1234567890'
            // Нет данных id не приходит с сервера позже будет добавлен.
            // account?.id || ''
        );
    };

    if (isLoadingAcount) {
        return <Preloader />;
    }

    return account ? (
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
    ) : (
        <MessageCard
            title={t('Счет не найден')}
            buttonText={t('Перейти к списку счетов')}
            buttonLink={RouteName.MAIN_PAGE + '/' + ACCOUNTS}
        />
    );
};
