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
    useProlongDepositMutation
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
        async (phone: string): Promise<void | string> => {
            const data = await checkMissRegistration(phone);
            if ('data' in data) {
                await generateCode(phone);
            }
            return getError(data);
        },
        [getError, checkMissRegistration, generateCode]
    );

    const checkedRegistration = useCallback(
        async (phone: string): Promise<void | string> => {
            const data = await checkRegistration(phone);
            if ('data' in data) {
                await generateCode(phone);
            }
            return getError(data);
        },
        [getError, checkRegistration, generateCode]
    );

    const generatedCode = useCallback(
        async (phone: string): Promise<void | string> => {
            const data = await generateCode(phone);
            return getError(data);
        },
        [generateCode, getError]
    );

    const checkedCode = useCallback(
        async (phone: string, code: string): Promise<void | string> => {
            const data = await checkCode({ phone, code });
            return getError(data);
        },
        [getError, checkCode]
    );

    const createdProfile = useCallback(
        async (phone: string, password: string): Promise<void | string> => {
            const missRegistration = await checkMissRegistration(phone);
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
        isLoading
    };
};
