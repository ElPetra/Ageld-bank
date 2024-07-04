import { useTranslation } from 'react-i18next';

import { Text, Checkbox } from 'src/shared/ui';

import type { FieldValues, UseFormRegister } from 'react-hook-form';

import './styles.scss';

interface Options {
    title: string;
    checkboxes: string[];
}

interface Props {
    register?: UseFormRegister<FieldValues>;
    field?: string;
    options: Options[];
    variant?: 'primary' | 'secondary';
}

export const CheckboxGroup = ({
    register,
    field,
    options,
    variant = 'primary'
}: Props) => {
    const { t } = useTranslation();
    return (
        <div className='checkbox-group'>
            {options.map(({ title, checkboxes }: Options) => (
                <div key={title} className='checkbox-group__item'>
                    <Text
                        weight='bold'
                        size={variant === 'secondary' ? 's' : 'm'}
                        tag='span'
                    >
                        {t(title)}
                    </Text>
                    <ul className='checkbox-group__list'>
                        {checkboxes.map(el => (
                            <li className='checkbox-group__list-item' key={el}>
                                <Checkbox
                                    register={register}
                                    field={field}
                                    value={el}
                                >
                                    {t(el)}
                                </Checkbox>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
