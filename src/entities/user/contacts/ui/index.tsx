import { ReactNode } from 'react';

import { Text, Input } from 'src/shared/ui';

import './styles.scss';

interface Props {
    children?: ReactNode;
}

export const Contacts = ({}: Props) => {
    return (
        <div className='contacts'>
            Контактные данные
            <div className='contacts_row'>
                <div className='contacts_phone'>
                    <Text size='xs'>
                        Нужен для того, чтобы подтверждать операции и настройки
                        счета
                    </Text>
                    <Input
                        placeholder='Телефон'
                        disabled={true}
                        variant='secondary'
                        size='large'
                        width='max'
                    />
                    <Text size='xs'>
                        Чтобы привязать новый телефон позвоните по номеру 8 800
                        666-99-98. Звонок бесплатный
                    </Text>
                </div>
                <div className='contacts_email'>
                    <Text size='xs'>На почту приходят счета и справки</Text>
                    <Input
                        placeholder='E-mail'
                        variant='secondary'
                        size='large'
                        width='max'
                    />
                    Заменить на фичу
                </div>
            </div>
        </div>
    );
};
