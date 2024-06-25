import { useTranslation } from 'react-i18next';

import { SliderInput } from 'src/shared/ui';

import type {
    FieldValues,
    UseFormRegister,
    UseFormSetValue
} from 'react-hook-form';

interface Props {
    variant?: 'primary' | 'secondary';
    register: UseFormRegister<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
    currency?: string;
}

export const DepositSumInput = ({
    variant = 'secondary',
    register,
    setValue,
    currency = 'RUB'
}: Props) => {
    const { t } = useTranslation();
    return (
        <SliderInput
            variant={variant}
            register={register}
            setValue={setValue}
            label={t('Сумма депозита')}
            min={1000}
            max={10000000}
            inputField='sumInput'
            sliderField='sumSlider'
            unit={currency}
        />
    );
};
