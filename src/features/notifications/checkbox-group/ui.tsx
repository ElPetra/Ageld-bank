import { Checkbox } from 'src/shared/ui/checkbox';
import { Link, Text } from 'src/shared/ui';
import './styles.scss';
import { options } from 'src/features/notifications/checkbox-group/model';

interface Options {
    title: string;
    checkboxes: { label: string, defaultIsChecked?: boolean }[];
}

export const CheckboxGroup = () => (
    <div className='notifications'>
        {options.map(({ title, checkboxes }: Options) => (
            <div key={title}>
                <Text weight='bold' size='m' tag='span'>
                    {title}
                </Text>
                <ul className='notifications__list'>
                    {checkboxes.map(({ label, defaultIsChecked = false }) => (
                        <li className='notifications__item' key={label}>
                            <Checkbox
                                label={label}
                                defaultIsChecked={defaultIsChecked}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        ))}
        <Link to='/' className='notifications__link'>
            История уведомлений
        </Link>
    </div>
);
