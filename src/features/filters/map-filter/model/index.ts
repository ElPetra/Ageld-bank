import i18n from 'src/shared/model/i18n';

export const options = [
    {
        title: i18n.t('Тип объекта'),
        checkboxes: [
            { label: i18n.t('Банкоматы') },
            { label: i18n.t('Инфокиоск') },
            { label: i18n.t('Главный офис') },
            { label: i18n.t('Отделения банка') },
            { label: i18n.t('Обменый пункт') }
        ]
    },
    {
        title: i18n.t('Статус работы'),
        checkboxes: [{ label: i18n.t('Работает') }]
    }
];
