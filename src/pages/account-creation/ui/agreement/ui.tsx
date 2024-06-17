import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Card, Checkbox, Form, Text } from 'src/shared/ui';

import type { Dispatch, FormEvent, SetStateAction } from 'react';

import './styles.scss';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
    type: string;
    currencyName: string;
    createdAccount: (
        type: string,
        currencyName: string
    ) => Promise<string | void>;
}

export const Agreement = ({
    isLast,
    setFormStep,
    type,
    currencyName,
    createdAccount
}: Props) => {
    const { t } = useTranslation();
    const [isConfirmed, setIsConfirmed] = useState(false);

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createdAccount(type, currencyName);
        if (setFormStep && !isLast) {
            setFormStep(curr => {
                return curr + 1;
            });
        }
    };
    return (
        <Form onSubmit={onSubmit}>
            <Card
                gap='medium'
                padding='large'
                borderRadius='extra-large'
                direction='column'
            >
                <Text weight='medium' size='m'>
                    {t('Ознакомитесь с условиями открытия счета')}
                </Text>
                <div className='agreement'>
                    <div>
                        {t(
                            '1. Открытие после предоставления всех документов и подписания заявления'
                        )}
                    </div>
                    <div>
                        {t(
                            '2. Банк может отказать в открытии счета без объяснения причин'
                        )}
                    </div>
                    <div>
                        {t(
                            '3. Плата за ведение счета взимается ежемесячно согласно тарифам Банка'
                        )}
                    </div>
                    <div>
                        {t(
                            '4. Операции по счету возможны через мобильное приложение, интернет-банк, банкоматы и отделения Банка'
                        )}
                    </div>
                    <div>
                        {t(
                            '5. Проценты на остаток средств и комиссии за операции устанавливаются тарифами Банка'
                        )}
                    </div>
                </div>
                <Checkbox
                    onCheckbox={() => setIsConfirmed(prev => !prev)}
                    label={t('Принимаю соглашение')}
                />
                <Button
                    disabled={!isConfirmed}
                    type='submit'
                    variant='secondary'
                >
                    <Text>{t('Открыть счет')}</Text>
                </Button>
            </Card>
        </Form>
    );
};
