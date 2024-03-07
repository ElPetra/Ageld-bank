import { Link, Text } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';

export const PrivacyPolicyText = () => {
    return (
        <div>
            <Text size='xs'>
                Нажав кнопку «Далее», вы соглашаетесь с{' '}
                <Link
                    to={`${RouteName.PUBLIC_CONTRACT_PAGE.replace(':documentType', 'privacyPolicy')}`}
                    variant='action'
                >
                    {' '}
                    Политикой конфиденциальности
                </Link>{' '}
                и&nbsp;
                <Link
                    to={`${RouteName.PUBLIC_CONTRACT_PAGE.replace(':documentType', 'termsRBS')}`}
                    variant='action'
                >
                    Правилами пользования СДБО
                </Link>
                &nbsp; и даёте согласие на сбор, обработку и &nbsp;
                <Link
                    to={`${RouteName.PUBLIC_CONTRACT_PAGE.replace(':documentType', 'personalDataStorage')}`}
                    variant='action'
                >
                    Хранение ваших персональных данных
                </Link>
            </Text>
        </div>
    );
};
