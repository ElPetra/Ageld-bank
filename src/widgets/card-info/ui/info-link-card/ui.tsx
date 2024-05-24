import { Link } from 'react-router-dom';

import { Card, Icon, Text } from 'src/shared/ui';

import type { InfoLink } from '../../model';

import './styles.scss';

interface Props {
    info: InfoLink;
}

export const InfoLinkCard = ({ info }: Props) => {
    return (
        <Link to='/'>
            <Card
                color='quadruple'
                padding='medium'
                borderRadius='extra-large'
                align='center'
            >
                <div className='info-link-card__icon'>
                    <Icon icon={info.icon} />
                </div>
                <Text weight='medium'>{info.text}</Text>
            </Card>
        </Link>
    );
};
