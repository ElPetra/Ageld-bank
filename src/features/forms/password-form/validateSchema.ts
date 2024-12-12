import * as yup from 'yup';

export const passwordSchema = yup.object({
    password: yup
        .string()
        .required('Пароль обязателен')
        .min(8, 'Пароль должен быть не менее 8 символов')
        .matches(/[a-zA-Z]/, 'Пароль должен содержать буквы')
        .matches(/\d/, 'Пароль должен содержать цифры'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), undefined], 'Пароли должны совпадать')
        .required('Подтвердите пароль')
});
