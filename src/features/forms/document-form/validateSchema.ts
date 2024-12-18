import * as yup from 'yup';

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
            'Серия и номер документа должны содержать 10 цифр'
        ),
    issuingCountry: yup.string().required('Выберите страну выдачи'),
    issuingAuthority: yup.string().required('Введите орган, выдавший документ'),
    codeIssuingAuthority: yup
        .string()
        .matches(PHONE_PATTERN, 'Код органа должен быть в формате: 123-456')
        .optional(),
    issueDate: yup
        .string()
        .required('Введите дату выдачи')
        .matches(DATE_PATTERN, 'Дата выдачи должна быть в формате ДД-ММ-ГГГГ')
        .test(
            'is-not-in-future',
            'Дата выдачи не может быть в будущем',
            function (value) {
                if (!value) {
                    return false;
                }
                const issueDate = new Date(value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return issueDate <= today;
            }
        ),
    expirationDate: yup
        .string()
        .required('Введите дату истечения срока')
        .matches(
            DATE_PATTERN,
            'Дата истечения должна быть в формате ДД-ММ-ГГГГ'
        )
        .test(
            'is-after-issueDate',
            'Дата истечения не может быть раньше даты выдачи',
            function (value) {
                if (!value) {
                    return false;
                }
                const expirationDate = new Date(value);
                const issueDate = new Date(this.parent.issueDate);
                return expirationDate >= issueDate;
            }
        )
});
