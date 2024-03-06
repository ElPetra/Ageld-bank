import { cloneElement, useState } from 'react';
import { useNavigate } from 'react-router';

import { BackButton } from './go-back';
import { FormCard } from './form-card';

import type { Form } from 'src/shared/model';

import './styles.scss';
import type { Condition } from 'src/features/multi-step-form/model';

interface Props {
    forms?: Form[];
    document?: Condition;
    variant?: 'login' | 'registration' | 'none';
    isFork?: boolean;
    to?: string;
}

export const MultiStepForm = ({
    forms,
    document,
    variant = 'none',
    isFork,
    to
}: Props) => {
    const [formStep, setFormStep] = useState<number>(1);

    const navigate = useNavigate();

    return (
        <div className='multi-step-form'>
            {(formStep > 1 || isFork) && (
                <BackButton
                    onClick={() => {
                        if (isFork) {
                            navigate(to || '/');
                        } else {
                            setFormStep(curr => curr - 1);
                        }
                    }}
                />
            )}
            {forms && (
                <FormCard title={forms[formStep - 1].title} variant={variant}>
                    {forms[formStep - 1].component &&
                        cloneElement(forms[formStep - 1].component, {
                            isLast: forms.length === formStep,
                            setFormStep
                        })}
                </FormCard>
            )}
            {isFork && document && (
                <FormCard title={document.title} variant={variant}>
                    <embed
                        src={document.pdf}
                        type='application/pdf'
                        width={document.width}
                        height={document.height}
                    />
                </FormCard>
            )}
        </div>
    );
};
