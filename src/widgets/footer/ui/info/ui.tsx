import { Icon, Link, Text } from 'src/shared/ui';

import { socialLinks } from './config';

import './styles.scss';

export const Info = () => (
    <div className='info'>
        <div className='info__about'>
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
