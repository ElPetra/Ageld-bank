import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();
    return (
        <div className='user-address'>
            <Text size='m' weight='medium'>
                {t('Адрес')}
            </Text>
            <div className='user-address__col'>
                <Text size='xs'>
                    {t(
                        'Адрес куда банк будет направлять почтовую корреспонденцию'
                    )}
                </Text>
                <div className='user-address__inputs'>
                    <Input
                        placeholder={t('Улица')}
                        value={street}
                        disabled={true}
                        size='large'
                        width='max'
                    />
                    <Input
                        placeholder={t('Дом')}
                        value={house}
                        disabled={true}
                        size='large'
                        width='max'
                    />
                    <Input
                        placeholder={t('Квартира')}
                        value={apartment}
                        disabled={true}
                        size='large'
                        width='max'
                    />
                    <Input
                        placeholder={t('Город')}
                        value={city}
                        disabled={true}
                        size='large'
                        width='max'
                    />
                    <Input
                        placeholder={t('Индекс')}
                        value={index}
                        disabled={true}
                        size='large'
                        width='max'
                    />
                </div>
                <Text size='xs'>
                    {t(
                        'Для изменения адреса регистрации необходимо обратиться в ближайшее отделение банка'
                    )}
                </Text>
            </div>
        </div>
    );
};
