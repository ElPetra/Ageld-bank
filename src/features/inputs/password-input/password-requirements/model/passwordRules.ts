import type { PasswordRules } from '.';

export const passwordRules: PasswordRules = {
    length: {
        matcher: (str: string): string => {
            const [min, max] = str.split(',');
            return `^.{${min},${max}}$`;
        },
        message: 'Количество символов от 6 до 20'
    },
    existsAllRegisters: {
        matcher: '^(?=.*[a-z])(?=.*[A-Z]).*$',
        message: 'Есть строчные и заглавные буквы'
    },
    existsDigit: { matcher: '^(?=.*\\d).*$', message: 'Есть цифры' },
    onlyPermitted: {
        matcher:
            /* prettier-ignore */ '^[A-Za-z0-9!\\\\"#$%&\'()*+,\\-.\\/:;<=>?@[\\]^_`{|}~]{1,20}$',
        message:
            'Используйте только буквы (a-z, A-Z), цифры и символы ! @ # & % ^ & * ( )- _ + ; : , . / ?  | ` ~ {  }'
    },
    existsSymbol: {
        matcher: (string: string): string => `^(?=.*[${string}]).*$`,
        message:
            'Есть специальные символы ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [  ] ^ _` { | } ~'
    }
};
