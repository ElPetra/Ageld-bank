import { Layout } from 'src/pages/layout';
import { Icon, Text, Link } from 'src/shared/ui';
import './styles.scss';

export const Footer = () => (
    <Layout.Footer>
        <div className='footer'>
            <div className='footer__first-row flex-space-btw'>
                <div className='contacts'>
                    <Link to='/'>
                        <Icon icon='logo' width={59} height={67} />
                    </Link>
                    <div>
                        <Text size='l'>
                            <a href='tel:+78006669998'>8 800 666-99-98 </a>
                        </Text>
                        <div className='contacts-subtitle'>
                            для звонков по России
                        </div>
                    </div>
                </div>
                <div className='download'>
                    <Text size='m' weight='medium' tag='h2'>
                        Наше приложение
                    </Text>
                    <div className='download-icons'>
                        <Link to='/'>
                            <Icon icon='app-store' width={155} height={46} />
                        </Link>
                        <Link to='/'>
                            <Icon icon='google-play' width={155} height={46} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='footer__second-row nav rows'>
                <Link to='/' size='medium' color='none'>
                    О банке
                </Link>
                <Link to='/' size='medium' color='none'>
                    Точки пополнения и Банкоматы
                </Link>
                <Link to='/' size='medium' color='none'>
                    Курсы валют
                </Link>
                <Link to='/' size='medium' color='none'>
                    Контакты
                </Link>
                <Link to='/' size='medium' color='none'>
                    Помощь
                </Link>
                <Link to='/' size='medium' color='none'>
                    Новости
                </Link>
            </div>

            <div className='footer__third-row cookie rows'>
                <Text size='s'>
                    АО «A-Geld» использует файлы «cookie», с целью
                    персонализации сервисов и повышения удобства пользования
                    веб-сайтом. «Cookie» представляют собой небольшие файлы,
                    содержащие информацию о предыдущих посещениях веб-сайта.
                    Если вы не хотите использовать файлы «cookie», измените
                    настройки браузера.
                </Text>
            </div>

            <div className='footer__fourth-row license flex-space-btw rows'>
                <Text size='s'>
                    &copy; 2023, АО «A-Geld», официальный сайт, универсальная
                    лицензия ЦБ РФ № 2475
                </Text>
                <div className='social-network'>
                    <Link to='/'>
                        <Icon icon='vkontakte' />
                    </Link>
                    <Link to='/'>
                        <Icon icon='odnoklassniki' />
                    </Link>
                    <Link to='/'>
                        <Icon icon='twitter' />
                    </Link>
                    <Link to='/'>
                        <Icon icon='youtube' />
                    </Link>
                    <Link to='/'>
                        <Icon icon='telegram' />
                    </Link>
                </div>
            </div>
        </div>
    </Layout.Footer>
);
