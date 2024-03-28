export const options = [
    {
        title: 'Способ получения уведомлений',
        checkboxes: [
            { label: 'Email-оповещения' },
            { label: 'SMS-оповещения', defaultIsChecked: true },
            { label: 'Push-оповещения' }
        ]
    },
    {
        title: 'Категория уведомлений',
        checkboxes: [
            {
                label: 'Денежные операции (отправить/оплатить/получить)',
                defaultIsChecked: true
            },
            { label: 'Важные обновления' },
            { label: 'Новости/акции' }
        ]
    }
];
