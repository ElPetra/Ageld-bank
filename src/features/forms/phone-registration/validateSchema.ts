import * as yup from 'yup';

export const validationSchemaPhoneRegistration = yup.object().shape({
    phone: yup.string().required('Телефон обязателен'),
    email: yup
        .string()
        .required('Email обязателен')
        .email('Неверный формат email'),
    checkbox: yup
        .array()
        .min(1, 'Необходимо принять условия')
        .required('Необходимо принять условия')
});
