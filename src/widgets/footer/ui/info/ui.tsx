import { Icon, Link, Text } from 'src/shared/ui';

import { socialLinks } from './config';

import './styles.scss';

export const Info = () => (
    <div className='info'>
        <div className='info__first-row'>
            <Text size='xs'>
                АО «A-Geld» использует файлы «cookie», с целью персонализации
                сервисов и повышения удобства пользования веб-сайтом. «Cookie»
                представляют собой небольшие файлы, содержащие информацию о
                предыдущих посещениях веб-сайта. Если вы не хотите использовать
                файлы «cookie», измените настройки браузера.
            </Text>
        </div>
        <div className='info__second-row'>
            <Text size='xs'>
                &copy; 2023, АО «A-Geld», официальный сайт, универсальная
                лицензия ЦБ РФ № 2475
            </Text>
            <div className='social-links'>
                {socialLinks.map(el => (
                    <Link key={el.icon} to={el.href}>
                        <Icon icon={el.icon} />
                    </Link>
                ))}
            </div>
        </div>
    </div>
);
