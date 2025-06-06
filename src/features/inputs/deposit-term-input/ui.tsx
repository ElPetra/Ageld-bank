import { useTranslation } from 'react-i18next';

import { SliderInput } from 'src/shared/ui';

import type {
    FieldValues,
    UseFormRegister,
    UseFormSetValue
} from 'react-hook-form';

interface Props {
    variant?: 'primary' | 'secondary';
    min?: number;
    max?: number;
    register: UseFormRegister<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
}

export const DepositTermInput = ({
    variant = 'secondary',
    min = 1,
    max = 36,
    register,
    setValue
}: Props) => {
    const { t } = useTranslation();
    return (
        <SliderInput
            variant={variant}
            register={register}
            setValue={setValue}
            label={t('Срок депозита')}
            min={min}
            max={max}
            inputField='termInput'
            sliderField='termSlider'
            unit={t('мес')}
        />
    );
};
