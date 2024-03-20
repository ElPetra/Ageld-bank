import { Input, Text } from 'src/shared/ui';

import type { ReactNode } from 'react';

import './styles.scss';

interface Props {
    children?: ReactNode;
    street?: string;
    house?: string;
    apartment?: string;
    city?: string;
    index?: string;
}

export const Address = ({ street, house, apartment, city, index }: Props) => {
    return (
        <div className='user-address'>
            <Text size='m' weight='medium'>
                Адрес
            </Text>
            <div className='user-address__col'>
                <Text size='xs'>
                    Адрес куда банк будет направлять почтовую корреспонденцию
                </Text>
                <div className='user-address__inputs'>
                    <Input
                        placeholder='Улица'
                        value={street}
                        disabled={true}
                        size='large'
                        width='max'
                    />
                    <Input
                        placeholder='Дом'
                        value={house}
                        disabled={true}
                        size='large'
                        width='max'
                    />
                    <Input
                        placeholder='Квартира'
                        value={apartment}
                        disabled={true}
                        size='large'
                        width='max'
                    />
                    <Input
                        placeholder='Город'
                        value={city}
                        disabled={true}
                        size='large'
                        width='max'
                    />
                    <Input
                        placeholder='Индекс'
                        value={index}
                        disabled={true}
                        size='large'
                        width='max'
                    />
                </div>
                <Text size='xs'>
                    Для изменения адреса регистрации необходимо обратиться в
                    ближайшее отделение банка
                </Text>
            </div>
        </div>
    );
};
