import * as yup from 'yup';

export const validationSchemaPersonalInfo = yup.object().shape({
    birthday: yup
        .string()
        .required('Дата рождения обязательна')
        .matches(
            /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
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
