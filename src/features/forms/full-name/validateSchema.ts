import * as yup from 'yup';

import { LAST_NAME_PATTERN } from '../model/constants';

export const validationSchemaFullName = yup.object().shape({
    lastName: yup
        .string()
        .required('Фамилия обязательна')
        .min(3, 'Фамилия должна содержать хотя бы 3 символа')
        .max(50, 'Фамилия не может быть длиннее 50 символов')
        .matches(LAST_NAME_PATTERN, 'Фамилия должна содержать только буквы'),
    firstName: yup
        .string()
        .required('Имя обязательно')
        .min(3, 'Имя должно содержать хотя бы 3 символа')
        .max(50, 'Имя не может быть длиннее 50 символов')
        .matches(LAST_NAME_PATTERN, 'Имя должно содержать только буквы'),
    middleName: yup
        .string()
        .required('Отчество обязательно')
        .min(3, 'Отчество должно содержать хотя бы 3 символа')
        .max(50, 'Отчество не может быть длиннее 50 символов')
        .matches(LAST_NAME_PATTERN, 'Отчество должно содержать только буквы')
});
