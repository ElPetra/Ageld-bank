import * as yup from 'yup';

export const changePasswordSchema = yup.object().shape({
    oldPassword: yup.string().required('Обязательное поле'),
    newPassword: yup
        .string()
        .matches(
            new RegExp(
                '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!\\\\"#$%&\'()*+,\\-.\\/:;<=>?@[\\]^_{|}~])+[A-Za-z0-9!\\\\"#$%&\'()*+,\\-.\\/:;<=>?@[\\]^_{|}~]{6,20}$',
                'gm'
            ),
            'Новый пароль должен быть валидным'
        )
        .notOneOf(
            [yup.ref('oldPassword')],
            'Новый пароль должен отличаться от старого'
        )
        .required('Обязательное поле'),
    newPassword2: yup
        .string()
        .oneOf([yup.ref('newPassword')], 'Пароли не совпадают')
        .required('Обязательное поле')
});
