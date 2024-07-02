import i18n from 'src/shared/model/i18n';

export const options = [
    {
        title: i18n.t('Тип объекта'),
        checkboxes: [
            i18n.t('Банкоматы'),
            i18n.t('Инфокиоск'),
            i18n.t('Главный офис'),
            i18n.t('Отделения банка'),
            i18n.t('Обменый пункт')
        ]
    },
    {
        title: i18n.t('Статус работы'),
        checkboxes: [i18n.t('Работает')]
    }
];
