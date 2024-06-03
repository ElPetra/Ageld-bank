import * as yup from 'yup';

import i18n from 'src/shared/model/i18n';

export const confirmPasswordSchema = yup.object().shape({
    password1: yup
        .string()
        .matches(
            new RegExp(
                '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!\\\\"#$%&\'()*+,\\-.\\/:;<=>?@[\\]^_{|}~])+[A-Za-z0-9!\\\\"#$%&\'()*+,\\-.\\/:;<=>?@[\\]^_{|}~]{6,20}$',
                'gm'
            ),
            i18n.t('Пароль должен быть валидным')
        )
        .required(i18n.t('Обязательное поле')),
    password2: yup
        .string()
        .oneOf([yup.ref('password1')], i18n.t('Пароли не совпадают'))
        .required(i18n.t('Обязательное поле'))
});
