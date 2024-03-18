import { Text } from 'src/shared/ui';
import { Checkbox } from 'src/shared/ui/checkbox';
import './styles.scss';

export const NotificationPage = () => {
    const handleCheckboxChange = (label: string) => {
        // eslint-disable-next-line no-console
        console.log(label, 'is selected');
    };
    return (
        <div className='notifications'>
            <Text weight='bold' size='m' tag='span'>
                Уведомления
            </Text>
            <ul className='notifications__list'>
                <li className='notifications__item'>
                    <Checkbox
                        label='Email-оповещения'
                        handleCheckboxChange={handleCheckboxChange}
                    />
                </li>
                <li className='notifications__item'>
                    <Checkbox
                        label='SMS-оповещения'
                        handleCheckboxChange={handleCheckboxChange}
                    />
                </li>
                <li className='notifications__item'>
                    <Checkbox
                        label='Push-оповещения'
                        handleCheckboxChange={handleCheckboxChange}
                    />
                </li>
            </ul>
        </div>
    );
};
