import { Image, Text } from 'src/shared/ui';

import { useTranslation } from 'react-i18next';

import { MainInfo } from './info';
import { MainCarousel } from './carousel';

import './styles.scss';

export function MainMenu() {
    const { t } = useTranslation();
    return (
        <div className='main-menu'>
            <Text tag='h1' weight='bold' size='l'>
                {t('Банк A-Geld - место, где работают ваши деньги')}
            </Text>
            <div className='main-menu__container'>
                <MainInfo />
                <MainCarousel />
                <Image width={390} image='laptop-guy' />
            </div>
        </div>
    );
}
