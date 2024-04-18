import { Text, Checkbox } from 'src/shared/ui';

import './styles.scss';

interface Options {
    title: string;
    checkboxes: { label: string, defaultIsChecked?: boolean }[];
}

interface Props {
    options: Options[];
    variant?: 'primary' | 'secondary';
}

export const CheckboxGroup = ({ options, variant = 'primary' }: Props) => (
    <div className='checkbox-group'>
        {options.map(({ title, checkboxes }: Options) => (
            <div key={title} className='checkbox-group__item'>
                <Text
                    weight='bold'
                    size={variant === 'secondary' ? 's' : 'm'}
                    tag='span'
                    color={variant === 'secondary' ? 'quadruple' : 'inherit'}
                >
                    {title}
                </Text>
                <ul className='checkbox-group__list'>
                    {checkboxes.map(({ label, defaultIsChecked = false }) => (
                        <li className='checkbox-group__list-item' key={label}>
                            <Checkbox
                                label={label}
                                defaultIsChecked={defaultIsChecked}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);
