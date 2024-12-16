import * as yup from 'yup';

import { BIRTH_DATE_PATTERN } from '../model/constants';

export const validationSchemaPersonalInfo = yup.object().shape({
    birthday: yup
        .string()
        .required('Дата рождения обязательна')
        .matches(
            BIRTH_DATE_PATTERN,
            'Дата рождения должна быть в формате YYYY-MM-DD'
        )
        .test(
            'is-not-in-future',
            'Дата рождения не может быть в будущем',
            value => {
                const currentDate = new Date();
                const birthdayDate = new Date(value);
                return birthdayDate <= currentDate;
            }
        ),
    gender: yup.string().required('Пол обязателен'),
    citizenship: yup.string().required('Гражданство обязательно')
});
