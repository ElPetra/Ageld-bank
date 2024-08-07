import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Card, Icon, Text } from 'src/shared/ui';

import { CREATE, RouteName } from 'src/shared/model';

import './styles.scss';

interface Props {
    title: string;
}

export function AccountCreationCard({ title }: Props) {
    const { t } = useTranslation();
    return (
        <Card direction='column' padding='medium'>
            <div className='account-creation-card__title'>
                <Text weight='medium'>{title}</Text>
                <Text size='xs' color='tertiary'>
                    {t('Откройте счет не выходя из дома')}
                </Text>
            </div>
            <Link
                to={RouteName.ACCOUNT_PAGE + '/' + CREATE}
                className='account-creation-card__link'
            >
                <Text color='action' weight='medium'>
                    {t('Открыть счет')}
                </Text>
                <Icon icon='arrow-right-accent' widthAndHeight={24} />
            </Link>
        </Card>
    );
}
