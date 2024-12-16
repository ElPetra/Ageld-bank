import * as yup from 'yup';

export const documentNumberPattern = /^\d{4}\s?\d{6}$/;
export const datePattern = /^\d{4}-\d{2}-\d{2}$/;
export const phonePattern = /^\d{3}-\d{3}$/;

import {
    DOCUMENT_NUMBER_PATTERN,
    DATE_PATTERN,
    PHONE_PATTERN
} from '../model/constants';

export const documentSchema = yup.object({
    documentTypeId: yup.number().required('Выберите вид документа'),
    documentNumber: yup
        .string()
        .required('Введите серию и номер документа')
        .matches(
            DOCUMENT_NUMBER_PATTERN,
            'Неверный формат серии и номера документа'
        ),
    issuingCountry: yup.string().required('Выберите страну выдачи'),
    issuingAuthority: yup.string().required('Введите орган, выдавший документ'),
    codeIssuingAuthority: yup
        .string()
        .matches(PHONE_PATTERN, 'Неверный формат кода органа')
        .optional(),
    issueDate: yup
        .string()
        .required('Введите дату выдачи')
        .matches(DATE_PATTERN, 'Некорректная дата'),
    expirationDate: yup
        .string()
        .required('Введите дату истечения срока')
        .matches(DATE_PATTERN, 'Некорректная дата')
        .test(
            'is-after-issueDate',
            'Дата истечения не может быть раньше даты выдачи',
            function (value) {
                const { issueDate } = this.parent;
                return value >= issueDate;
            }
        )
});
