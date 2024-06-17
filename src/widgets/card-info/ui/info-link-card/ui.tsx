import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Card, Icon, Text } from 'src/shared/ui';

import type { InfoLink } from '../../model';

import './styles.scss';

interface Props {
    info: InfoLink;
}

export const InfoLinkCard = ({ info }: Props) => {
    const { t } = useTranslation();
    return (
        <Link to='/'>
            <Card padding='medium' borderRadius='extra-large' align='center'>
                <div className='info-link-card__icon'>
                    <Icon icon={info.icon} />
                </div>
                <Text weight='medium'>{t(info.text)}</Text>
            </Card>
        </Link>
    );
};
