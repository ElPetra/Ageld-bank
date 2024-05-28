// error messages
import i18n from 'src/shared/model/i18n';

export const NOT_VALID_PASSWORD = 'Пароль не соответствует требованиям!';
export const NOT_USER_PASSWORD = i18n.t(
    'Аутентификация невозможна - данные о пользователе отсутствуют'
);
export const PASSWORDS_NOT_EQUAL = 'Пароли не совпадают';

// input values

export const userPassword = 'Password@123';
export const newUserPassword = 'Password@1234';

export const errorNotUserPassword = 'Password@12312';
export const errorInvalidUserPassword = 'Password@';

export const PasswordRequirements = {
    capitalAndLowerLetters: { correct: 'Pass#234', invalid: 'pass#234' },
    digits: { correct: 'Pass#234', invalid: 'aAab!we' },
    symbols: { correct: 'Pass#234', invalid: 'aAa4°we' },
    fromLength: { correct: '123456', invalid: '12345' },
    toLength: {
        correct: '12345123451234512345',
        invalid: '123451234512345123456'
    },
    permittedSymbols: { correct: 'Pass#234', invalid: 'аAa4!we' }
};
