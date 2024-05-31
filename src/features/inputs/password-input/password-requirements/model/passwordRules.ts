import i18n from 'src/shared/model/i18n';

import type { PasswordRules } from '.';

export const passwordRules: PasswordRules = {
    length: {
        matcher: (str: string): string => {
            const [min, max] = str.split(',');
            return `^.{${min},${max}}$`;
        },
        message: i18n.t('Количество символов от 6 до 20')
    },
    existsAllRegisters: {
        matcher: '^(?=.*[a-z])(?=.*[A-Z]).*$',
        message: i18n.t('Есть строчные и заглавные буквы')
    },
    existsDigit: { matcher: '^(?=.*\\d).*$', message: i18n.t('Есть цифры') },
    onlyPermitted: {
        matcher:
            /* prettier-ignore */ '^[A-Za-z0-9!\\\\"#$%&\'()*+,\\-.\\/:;<=>?@[\\]^_`{|}~]{1,20}$',
        message:
            i18n.t('Используйте только буквы (a-z, A-Z), цифры и символы') +
            ' ! @ # & % ^ & * ( )- _ + ; : , . / ?  | ` ~ {  }'
    },
    existsSymbol: {
        matcher: (string: string): string => `^(?=.*[${string}]).*$`,
        message:
            i18n.t('Есть специальные символы') +
            ' ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [  ] ^ _` { | } ~'
    }
};
