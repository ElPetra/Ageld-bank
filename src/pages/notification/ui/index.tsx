import { Link } from 'src/shared/ui';

import './styles.scss';
import { CheckboxGroup } from 'src/features/notifications/checkbox-group';
const notificationsOptions = [
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
export const NotificationPage = () => {
    const handleCheckboxChange = (label: string) => {
        // eslint-disable-next-line no-console
        console.log(label, 'is selected');
    };
    return (
        <div className='notifications'>
            {notificationsOptions.map(({ title, checkboxes }) => (
                <CheckboxGroup
                    key={title}
                    title={title}
                    checkboxes={checkboxes}
                    handleCheckboxChange={handleCheckboxChange}
                />
            ))}
            <Link to='/' className='notifications__link'>
                История уведомлений
            </Link>
        </div>
    );
};
