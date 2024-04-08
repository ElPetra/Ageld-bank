import { MultiStepForm } from 'src/features/multi-step-form';

import { AccountCreationForm } from './content/CreationForm';

import './styles.scss';
import { CurrencyVariant } from './parameters/Currency';
import { ReceivingVariant } from './parameters/Receive';
import { TypeVariant } from './parameters/Type';
import { Agreement } from './parameters/Agreement';

export const AccountCreation = () => {
    return (
        <MultiStepForm
            variant={'create-account'}
            forms={[
                {
                    id: 1,
                    title: 'Выберите тип счета',
                    component: (
                        <AccountCreationForm
                            parametr='accountType'
                            Element={TypeVariant}
                        />
                    )
                },
                {
                    id: 2,
                    title: 'Выберите валюту',
                    component: (
                        <AccountCreationForm
                            parametr='accountCurrency'
                            Element={CurrencyVariant}
                        />
                    )
                },

                {
                    id: 3,
                    title: 'Выберите тип карты',
                    component: (
                        <AccountCreationForm
                            parametr='accountcard'
                            Element={ReceivingVariant}
                        />
                    )
                },
                {
                    id: 4,
                    title: 'Ознакомьтесь с условиями счета',
                    component: (
                        <AccountCreationForm
                            parametr='agreement'
                            Element={Agreement}
                        />
                    )
                }
            ]}
        />
    );
};
