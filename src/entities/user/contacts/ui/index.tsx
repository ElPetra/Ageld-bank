import i18n from 'src/shared/model/i18n';

import { Text, Input } from 'src/shared/ui';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    phone: string;
    children?: ReactNode;
}

export const Contacts = ({ phone, children }: Props) => {
    return (
        <div className='user-contacts'>
            <Text size='m' weight='medium'>
                {i18n.t('Контактные данные')}
            </Text>
            <div className='user-contacts__row'>
                <div>
                    <Text size='xs'>
                        {i18n.t(
                            'Телефон нужен для того, чтобы подтверждать операции и настройки счета'
                        )}
                    </Text>
                    <Input
                        placeholder={i18n.t('Телефон')}
                        value={phone}
                        disabled={true}
                        size='large'
                        width='max'
                    />
                    <Text size='xs'>
                        {i18n.t(
                            'Чтобы привязать новый телефон позвоните по номеру 8 800 666-99-98. Звонок бесплатный'
                        )}
                    </Text>
                </div>
                <div>
                    <Text size='xs'>
                        {i18n.t('На почту приходят счета и справки')}
                    </Text>
                    {children}
                </div>
            </div>
        </div>
    );
};
