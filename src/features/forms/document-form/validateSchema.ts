import * as yup from 'yup';

export const documentSchema = yup.object({
    documentTypeId: yup.number().required('Выберите вид документа'),
    documentNumber: yup
        .string()
        .required('Введите серию и номер документа')
        .matches(/^\d{4}\s?\d{6}$/, 'Неверный формат серии и номера документа'),
    issuingCountry: yup.string().required('Выберите страну выдачи'),
    issuingAuthority: yup.string().required('Введите орган, выдавший документ'),
    codeIssuingAuthority: yup
        .string()
        .matches(/^\d{3}-\d{3}$/, 'Неверный формат кода органа')
        .optional(),
    issueDate: yup
        .string()
        .required('Введите дату выдачи')
        .matches(/^\d{4}-\d{2}-\d{2}$/, 'Некорректная дата'),
    expirationDate: yup
        .string()
        .required('Введите дату истечения срока')
        .matches(/^\d{4}-\d{2}-\d{2}$/, 'Некорректная дата')
        .test(
            'is-after-issueDate',
            'Дата истечения не может быть раньше даты выдачи',
            function (value) {
                const { issueDate } = this.parent;
                return value >= issueDate;
            }
        )
});
