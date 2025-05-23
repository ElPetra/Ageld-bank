import * as yup from 'yup';

export const validationSchemaAdress = yup.object().shape({
    addressTypeId: yup.number().required('Укажите тип адреса'),
    countryCodeISO: yup.string().required('Выберите страну').default(''),
    region: yup
        .string()
        .required('Укажите район')
        .max(100, 'Район не может превышать 100 символов')
        .default(''),
    locationType: yup
        .string()
        .required('Выберите тип населенного пункта')
        .default(''),
    location: yup
        .string()
        .required('Укажите населенный пункт')
        .max(100, 'Населенный пункт не может превышать 100 символов')
        .default(''),
    streetType: yup.string().required('Выберите тип улицы').default(''),
    street: yup
        .string()
        .required('Укажите улицу')
        .max(100, 'Улица не может превышать 100 символов')
        .default(''),
    microdistrict: yup.string().required('Выберите микрорайон').default(''),
    houseNumber: yup
        .string()
        .required('Укажите номер дома')
        .max(4, 'Номер дома не может превышать 4 символов')
        .default(''),
    litera: yup.string().default(''),
    buildingNumberHouse: yup
        .string()
        .required('Укажите корпус')
        .max(10, 'Корпус не может превышать 10 символов')
        .default(''),
    apartmentNumber: yup
        .string()
        .required('Укажите номер квартиры')
        .max(10, 'Номер квартиры не может превышать 10 символов')
        .default(''),
    postalCode: yup
        .string()
        .required('Укажите почтовый индекс')
        .matches(/^\d{6}$/, 'Почтовый индекс должен состоять из 6 цифр')
        .default('')
});
