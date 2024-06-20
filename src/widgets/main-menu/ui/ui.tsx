import { Image, Text } from 'src/shared/ui';

import { useTranslation } from 'react-i18next';

import { InfoMain } from './info';
import { CarouselMain } from './carousel';

import './styles.scss';

export function MainMenu() {
    const { t } = useTranslation();
    return (
        <>
            <Text tag='h1' weight='bold' size='l'>
                {t('Банк A-Geld - место, где работают ваши деньги')}
            </Text>
            <div className='main-menu_container'>
                <InfoMain />
                <CarouselMain />
                <div className='main-menu_image'>
                    <Image width={390} height={530} image='laptop-guy' />
                </div>
            </div>
        </>
    );
}
