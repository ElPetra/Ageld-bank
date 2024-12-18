import { useForm } from 'react-hook-form';
import { Button, Form, Input, Text, Icon } from 'src/shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCreateNewClientMutation } from 'src/shared/api';

import { setRegistrationData } from 'src/pages/registration';

import { passwordSchema } from './validateSchema';

import type { Dispatch, SetStateAction } from 'react';
import type { RootState } from 'src/app/store/store';

import './styles.scss';

interface PasswordFormFields {
    password: string;
    confirmPassword: string;
}

interface Props {
    setFormStep?: Dispatch<SetStateAction<number>>;
}

export const PasswordForm = ({ setFormStep }: Props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const registrationData = useSelector(
        (state: RootState) => state.registration
    );

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const [createNewClient, { isLoading, isError }] =
        useCreateNewClientMutation();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<PasswordFormFields>({
        resolver: yupResolver(passwordSchema),
        mode: 'onTouched',
        defaultValues: {
            password: '',
            confirmPassword: ''
        }
    });

    const onSubmit = async (data: PasswordFormFields) => {
        dispatch(setRegistrationData({ password: data.password }));

        try {
            await createNewClient({
                ...registrationData,
                password: data.password
            }).unwrap();
            if (setFormStep) {
                setFormStep(curr => curr + 1);
            }
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
            if (setFormStep) {
                setFormStep(curr => curr + 2);
            }
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(prev => !prev);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(prev => !prev);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className='password-input-wrapper'>
                <Input
                    label='Пароль'
                    field='password'
                    register={register}
                    size='large'
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder={t('Введите пароль')}
                />
                <button
                    type='button'
                    className='password-toggle-btn'
                    onClick={togglePasswordVisibility}
                    aria-label='Показать/скрыть пароль'
                >
                    <Icon icon={passwordVisible ? 'eye-open' : 'eye-close'} />
                </button>
            </div>
            {errors.password && (
                <Text color='error' size='xxs'>
                    {errors.password.message || ''}
                </Text>
            )}

            <div className='password-input-wrapper'>
                <Input
                    label='Подтвердите пароль'
                    field='confirmPassword'
                    register={register}
                    size='large'
                    type={confirmPasswordVisible ? 'text' : 'password'}
                    placeholder={t('Подтвердите пароль')}
                />
                <button
                    type='button'
                    className='password-toggle-btn'
                    onClick={toggleConfirmPasswordVisibility}
                    aria-label='Показать/скрыть подтверждение пароля'
                >
                    <Icon
                        icon={confirmPasswordVisible ? 'eye-open' : 'eye-close'}
                    />
                </button>
            </div>
            {errors.confirmPassword && (
                <Text color='error' size='xxs'>
                    {errors.confirmPassword.message || ''}
                </Text>
            )}

            <Button
                variant='secondary'
                size='large'
                type='submit'
                disabled={!isValid || isLoading}
            >
                {isLoading ? t('Загрузка...') : t('Продолжить')}
            </Button>
            {isError && (
                <Text color='error' size='s'>
                    {t('Ошибка при регистрации. Попробуйте снова.')}
                </Text>
            )}
        </Form>
    );
};

// import { useForm } from 'react-hook-form';
// import { Button, Form, Input, Text, Icon } from 'src/shared/ui';
// import { useDispatch } from 'react-redux';
// import { setRegistrationData } from 'src/pages/registration';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// import { passwordSchema } from './validateSchema';

// import type { Dispatch, SetStateAction } from 'react';

// import './styles.scss';

// interface PasswordFormFields {
//     password: string;
//     confirmPassword: string;
// }

// interface Props {
//     setFormStep?: Dispatch<SetStateAction<number>>;
// }

// export const PasswordForm = ({ setFormStep }: Props) => {
//     const dispatch = useDispatch();
//     const { t } = useTranslation();

//     const [passwordVisible, setPasswordVisible] = useState(false);
//     const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//     const {
//         register,
//         handleSubmit,
//         formState: { errors, isValid }
//     } = useForm<PasswordFormFields>({
//         resolver: yupResolver(passwordSchema),
//         mode: 'onTouched',
//         defaultValues: {
//             password: '',
//             confirmPassword: ''
//         }
//     });

//     const onSubmit = (data: PasswordFormFields) => {
//         dispatch(
//             setRegistrationData({
//                 password: data.password
//             })
//         );

//         if (setFormStep) {
//             setFormStep(curr => curr + 1);
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setPasswordVisible(prev => !prev);
//     };

//     const toggleConfirmPasswordVisibility = () => {
//         setConfirmPasswordVisible(prev => !prev);
//     };

//     return (
//         <Form onSubmit={handleSubmit(onSubmit)}>
//             <div className='password-input-wrapper'>
//                 <Input
//                     label='Пароль'
//                     field='password'
//                     register={register}
//                     size='large'
//                     type={passwordVisible ? 'text' : 'password'}
//                     placeholder={t('Введите пароль')}
//                 />
//                 <button
//                     type='button'
//                     className='password-toggle-btn'
//                     onClick={togglePasswordVisibility}
//                     aria-label='Показать/скрыть пароль'
//                 >
//                     <Icon icon={passwordVisible ? 'eye-open' : 'eye-close'} />
//                 </button>
//             </div>
//             {errors.password && (
//                 <Text color='error' size='xxs'>
//                     {typeof errors.password?.message === 'string'
//                         ? errors.password.message
//                         : ''}
//                 </Text>
//             )}

//             <div className='password-input-wrapper'>
//                 <Input
//                     label='Подтвердите пароль'
//                     field='confirmPassword'
//                     register={register}
//                     size='large'
//                     type={confirmPasswordVisible ? 'text' : 'password'}
//                     placeholder={t('Подтвердите пароль')}
//                 />
//                 <button
//                     type='button'
//                     className='password-toggle-btn'
//                     onClick={toggleConfirmPasswordVisibility}
//                     aria-label='Показать/скрыть подтверждение пароля'
//                 >
//                     <Icon
//                         icon={confirmPasswordVisible ? 'eye-open' : 'eye-close'}
//                     />
//                 </button>
//             </div>
//             {errors.confirmPassword && (
//                 <Text color='error' size='xxs'>
//                     {typeof errors.confirmPassword?.message === 'string'
//                         ? errors.confirmPassword.message
//                         : ''}
//                 </Text>
//             )}

//             <Button
//                 variant='secondary'
//                 size='large'
//                 type='submit'
//                 disabled={!isValid}
//             >
//                 {t('Продолжить')}
//             </Button>
//         </Form>
//     );
// };
