import * as yup from 'yup';

export const validationSchemaMaritalStatus = yup.object({
    familyStatusCode: yup
        .number()
        .typeError('Семейное положение должно быть выбрано')
        .required('Укажите семейное положение'),
    childCount: yup
        .number()
        .typeError('Количество детей должно быть указано')
        .min(0, 'Количество детей не может быть меньше 0')
        .required('Укажите количество детей')
});
