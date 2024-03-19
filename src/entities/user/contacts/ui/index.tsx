import { Text, Input } from 'src/shared/ui';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    phone: string;
    children?: ReactNode;
}

export const Contacts = ({ phone, children }: Props) => {
    return (
        <div className='contacts'>
            <Text size='m' weight='medium'>
                Контактные данные
            </Text>
            <div className='contacts_row'>
                <div>
                    <Text size='xs'>
                        Телефон нужен для того, чтобы подтверждать операции и
                        настройки счета
                    </Text>
                    <Input
                        placeholder='Телефон'
                        value={phone}
                        disabled={true}
                        size='large'
                        width='max'
                    />
                    <Text size='xs'>
                        Чтобы привязать новый телефон позвоните по номеру 8 800
                        666-99-98. Звонок бесплатный
                    </Text>
                </div>
                <div>
                    <Text size='xs'>На почту приходят счета и справки</Text>
                    {children}
                </div>
            </div>
        </div>
    );
};
