import { cloneElement, useState } from 'react';

import { Icon } from 'src/shared/ui';

import { BackButton } from './go-back';
import { FormCard } from './form-card';

import type { Form, VariantType } from './model';

import './styles.scss';

interface Props {
    variant: VariantType;
    forms: Form[];
}

export const MultiStepForm = ({ variant = 'none', forms }: Props) => {
    const [formStep, setFormStep] = useState<number>(1);

    return (
        <div className={`multi-step-form ${variant}`}>
            {(variant == 'registration' ||
                variant == 'login' ||
                variant == 'recovery') && (
                <div className='multi-step-form__logo'>
                    <Icon icon='logo-accent' width={73} />
                </div>
            )}
            {formStep > 1 && !forms[formStep - 1].isResult && (
                <BackButton
                    onClick={() => {
                        setFormStep(curr => curr - 1);
                    }}
                />
            )}

            {!forms[formStep - 1].isResult ? (
                <FormCard title={forms[formStep - 1].title} variant={variant}>
                    {forms[formStep - 1].component &&
                        cloneElement(forms[formStep - 1].component, {
                            isLast: forms.length === formStep,
                            setFormStep
                        })}
                </FormCard>
            ) : (
                <>{forms[formStep - 1].component}</>
            )}
        </div>
    );
};
