import i18n from 'src/shared/model/i18n';

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
                {i18n.t('Адрес')}
            </Text>
            <div className='user-address__col'>
                <Text size='xs'>
                    {i18n.t(
                        'Адрес куда банк будет направлять почтовую корреспонденцию'
                    )}
                </Text>
                <div className='user-address__inputs'>
                    <Input
                        placeholder={i18n.t('Улица')}
                        value={street}
                        disabled={true}
                        size='large'
                        width='max'
                    />
                    <Input
                        placeholder={i18n.t('Дом')}
                        value={house}
                        disabled={true}
                        size='large'
                        width='max'
                    />
                    <Input
                        placeholder={i18n.t('Квартира')}
                        value={apartment}
                        disabled={true}
                        size='large'
                        width='max'
                    />
                    <Input
                        placeholder={i18n.t('Город')}
                        value={city}
                        disabled={true}
                        size='large'
                        width='max'
                    />
                    <Input
                        placeholder={i18n.t('Индекс')}
                        value={index}
                        disabled={true}
                        size='large'
                        width='max'
                    />
                </div>
                <Text size='xs'>
                    {i18n.t(
                        'Для изменения адреса регистрации необходимо обратиться в ближайшее отделение банка'
                    )}
                </Text>
            </div>
        </div>
    );
};
