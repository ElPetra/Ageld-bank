import * as yup from 'yup';

export const changePasswordSchema = yup.object().shape({
    current_password: yup.string().required('Обязательное поле'),
    password1: yup
        .string()
        .matches(
            new RegExp(
                '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!\\\\"#$%&\'()*+,\\-.\\/:;<=>?@[\\]^_{|}~])+[A-Za-z0-9!\\\\"#$%&\'()*+,\\-.\\/:;<=>?@[\\]^_{|}~]{6,20}$',
                'gm'
            ),
            'Новый пароль должен быть валидным'
        )
        .notOneOf(
            [yup.ref('current_password')],
            'Новый пароль должен отличаться от старого'
        )
        .required('Обязательное поле'),
    password2: yup
        .string()
        .oneOf([yup.ref('password1')], 'Новый пароль не совпадают')
        .required('Обязательное поле')
});
