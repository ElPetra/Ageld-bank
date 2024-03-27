import { Text, Checkbox } from 'src/shared/ui';

import './styles.scss';

interface Options {
    title: string;
    checkboxes: { label: string, defaultIsChecked?: boolean }[];
}

interface Props {
    options: Options[];
}

export const CheckboxGroup = ({ options }: Props) => (
    <div className='checkbox-group'>
        {options.map(({ title, checkboxes }: Options) => (
            <div key={title}>
                <Text weight='bold' size='m' tag='span'>
                    {title}
                </Text>
                <ul className='checkbox-group__list'>
                    {checkboxes.map(({ label, defaultIsChecked = false }) => (
                        <li className='checkbox-group__item' key={label}>
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
