import * as yup from 'yup';

export const confirmPasswordSchema = yup.object().shape({
    password1: yup
        .string()
        .matches(
            new RegExp(
                '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!\\\\"#$%&\'()*+,\\-.\\/:;<=>?@[\\]^_{|}~])+[A-Za-z0-9!\\\\"#$%&\'()*+,\\-.\\/:;<=>?@[\\]^_{|}~]{6,20}$',
                'gm'
            ),
            'Пароль должен быть валидным'
        )
        .required('Обязательное поле'),
    password2: yup
        .string()
        .oneOf([yup.ref('password1')], 'Пароли не совпадают')
        .required('Обязательное поле')
});
