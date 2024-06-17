import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { Icon, Link, Text } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

import './styles.scss';

export const LogoPhone = () => {
    const { t } = useTranslation();
    return (
        <div className='logo-phone'>
            <div className='footer__contacts'>
                <Link to={RouteName.MAIN_PAGE}>
                    <Icon icon='logo-light-text' width={59} height={67} />
                </Link>
                <div>
                    <Text size='l'>
                        <NavLink to='tel:+78006669998' target='_blank'>
                            8 800 666-99-98
                        </NavLink>
                    </Text>
                    <Text size='xs'>
                        <div className='contacts-subtitle'>
                            {t('для звонков по России')}
                        </div>
                    </Text>
                </div>
            </div>
            <div className='download'>
                <Text size='m' weight='medium' tag='h2'>
                    {t('Наше приложение')}
                </Text>
                <div className='download-icons'>
                    <Link to={RouteName.MAIN_PAGE}>
                        <Icon icon='app-store' width={155} height={46} />
                    </Link>
                    <Link to={RouteName.MAIN_PAGE}>
                        <Icon icon='google-play' width={155} height={46} />
                    </Link>
                </div>
            </div>
        </div>
    );
};
