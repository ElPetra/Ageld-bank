import * as yup from 'yup';

import i18n from 'src/shared/model/i18n';

export const changePasswordSchema = yup.object().shape({
    oldPassword: yup.string().required(i18n.t('Обязательное поле')),
    newPassword: yup
        .string()
        .matches(
            new RegExp(
                '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!\\\\"#$%&\'()*+,\\-.\\/:;<=>?@[\\]^_{|}~])+[A-Za-z0-9!\\\\"#$%&\'()*+,\\-.\\/:;<=>?@[\\]^_{|}~]{6,20}$',
                'gm'
            ),
            i18n.t('Новый пароль должен быть валидным')
        )
        .notOneOf(
            [yup.ref('oldPassword')],
            i18n.t('Новый пароль должен отличаться от старого')
        )
        .required(i18n.t('Обязательное поле')),
    newPassword2: yup
        .string()
        .oneOf([yup.ref('newPassword')], i18n.t('Пароли не совпадают'))
        .required(i18n.t('Обязательное поле'))
});
