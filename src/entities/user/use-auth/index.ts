import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/store';

import {
    localStorageApi,
    useAddEmailMutation,
    useAutoRenewalDepositMutation,
    useChangePasswordMutation,
    useCheckCodeMutation,
    useCheckMissRegistrationMutation,
    useCheckRegistrationMutation,
    useCreateAccountMutation,
    useCreateProfileMutation,
    useGenerateCodeMutation,
    useGenerateTokenMutation,
    useNewEmailMutation,
    useProlongDepositMutation,
    useCreateDepositMutation
} from 'src/shared/api';
import { getErrorMessage } from 'src/shared/lib';

import { userSignedIn, userSignedOut } from '../user-slice';

import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';

export const useAuth = () => {
    const { authStatus } = useAppSelector(state => state.user);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const dispatch = useAppDispatch();

    const [checkRegistration] = useCheckRegistrationMutation();
    const [checkMissRegistration] = useCheckMissRegistrationMutation();
    const [generateCode] = useGenerateCodeMutation();
    const [checkCode] = useCheckCodeMutation();
    const [createProfile] = useCreateProfileMutation();
    const [generateToken] = useGenerateTokenMutation();
    const [changePassword] = useChangePasswordMutation();
    const [newEmail] = useNewEmailMutation();
    const [addEmail] = useAddEmailMutation();

    const [createAccount] = useCreateAccountMutation();

    const [prolongDeposit] = useProlongDepositMutation();
    const [autoRenewalDeposit] = useAutoRenewalDepositMutation();
    const [createDeposit] = useCreateDepositMutation();

    const getError = useCallback(
        async (
            data:
                | { data: unknown }
                | { error: FetchBaseQueryError | SerializedError }
        ): Promise<string | void> => {
            if ('data' in data) {
                setError('');
            } else {
                setError(getErrorMessage(data.error));
                return getErrorMessage(data.error);
            }
        },
        []
    );

    const getAccessToken = useCallback(async (): Promise<string | void> => {
        const accessToken = await localStorageApi.getActualAccessToken();
        if (accessToken) {
            return accessToken;
        }
        dispatch(userSignedOut());
    }, [dispatch]);

    const authChecked = useCallback(async (): Promise<void> => {
        const accessToken = await getAccessToken();
        if (accessToken) {
            dispatch(userSignedIn());
        }
    }, [dispatch, getAccessToken]);

    const checkedMissRegistration = useCallback(
        async (value: string): Promise<void | string> => {
            const data = await checkMissRegistration(value);
            if ('data' in data) {
                await generateCode(value);
            }
            return getError(data);
        },
        [getError, checkMissRegistration, generateCode]
    );

    const checkedRegistration = useCallback(
        async (value: string): Promise<void | string> => {
            const data = await checkRegistration(value);
            if ('data' in data) {
                await generateCode(value);
            }
            return getError(data);
        },
        [getError, checkRegistration, generateCode]
    );

    const generatedCode = useCallback(
        async (value: string): Promise<void | string> => {
            const data = await generateCode(value);
            return getError(data);
        },
        [generateCode, getError]
    );

    const checkedCode = useCallback(
        async (value: string, code: string): Promise<void | string> => {
            const data = await checkCode({ phone: value, code });
            return getError(data);
        },
        [getError, checkCode]
    );

    const createdProfile = useCallback(
        async (value: string, password: string): Promise<void | string> => {
            const missRegistration = await checkMissRegistration(value);
            if ('data' in missRegistration) {
                const { customerId } = missRegistration.data;
                const data = await createProfile({ customerId, password });
                return getError(data);
            }
        },
        [getError, checkMissRegistration, createProfile]
    );

    const signedIn = useCallback(
        async (phone: string, password: string): Promise<void | string> => {
            const tokenData = await generateToken({ phone, password });
            if ('data' in tokenData) {
                const { accessToken, refreshToken } = tokenData.data;
                localStorageApi.setTokens(accessToken, refreshToken);
                dispatch(userSignedIn());
            }
            return getError(tokenData);
        },
        [getError, generateToken, dispatch]
    );

    const signedOut = useCallback((): void => {
        localStorageApi.removeUserData();
        dispatch(userSignedOut());
    }, [dispatch]);

    const changedPassword = useCallback(
        async (
            oldPassword: string,
            newPassword: string
        ): Promise<void | string> => {
            const accessToken = await getAccessToken();
            if (accessToken) {
                const data = await changePassword({
                    oldPassword,
                    newPassword
                });
                return getError(data);
            }
        },
        [getError, getAccessToken, changePassword]
    );

    const changedEmail = useCallback(
        async (email: string): Promise<void | string> => {
            const accessToken = await getAccessToken();
            if (accessToken) {
                const data = await newEmail(email);
                return getError(data);
            }
        },
        [getError, getAccessToken, newEmail]
    );

    const addedEmail = useCallback(
        async (email: string): Promise<void | string> => {
            const accessToken = await getAccessToken();
            if (accessToken) {
                const data = await addEmail(email);
                return getError(data);
            }
        },
        [getError, getAccessToken, addEmail]
    );

    const createdAccount = useCallback(
        async (type: string, currencyName: string): Promise<void | string> => {
            const accessToken = await getAccessToken();
            if (accessToken) {
                const data = await createAccount({
                    type,
                    currencyName
                });
                setIsLoading(false);
                return getError(data);
            }
        },
        [getError, getAccessToken, createAccount]
    );

    const prolongedDeposit = useCallback(
        async (
            depositId: string,
            renewalTermsDays: number
        ): Promise<void | string> => {
            const accessToken = await getAccessToken();
            if (accessToken) {
                const data = await prolongDeposit({
                    depositId,
                    renewalTermsDays
                });
                setIsLoading(false);
                return getError(data);
            }
        },
        [getError, getAccessToken, prolongDeposit]
    );

    const autoRenewedDeposit = useCallback(
        async (
            depositId: string,
            isAutoProlongation: boolean
        ): Promise<void | string> => {
            const accessToken = await getAccessToken();
            if (accessToken) {
                const data = await autoRenewalDeposit({
                    depositId,
                    isAutoProlongation
                });
                setIsLoading(false);
                return getError(data);
            }
        },
        [getError, getAccessToken, autoRenewalDeposit]
    );

    const createdDeposit = useCallback(
        async (
            productId: string,
            percentRate: string,
            timeDays: number,
            accountId: string
        ): Promise<void | string> => {
            const accessToken = await getAccessToken();
            if (accessToken) {
                const data = await createDeposit({
                    productId,
                    percentRate,
                    timeDays,
                    accountId
                });
                setIsLoading(false);
                return getError(data);
            }
        },
        [getError, getAccessToken, createDeposit]
    );

    return {
        authStatus,
        getAccessToken,
        authChecked,
        checkedMissRegistration,
        checkedRegistration,
        generatedCode,
        checkedCode,
        createdProfile,
        signedIn,
        signedOut,
        changedPassword,
        changedEmail,
        addedEmail,
        createdAccount,
        prolongedDeposit,
        autoRenewedDeposit,
        setError,
        error,
        isLoading,
        createdDeposit
    };
};
