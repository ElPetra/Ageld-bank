import { useTranslation } from 'react-i18next';
import { Card, Columns, Icon, Text } from 'src/shared/ui';

import { socials } from '../../model';

export const Socials = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Text weight='bold' size='m'>
                {t('Чат-боты в социальных сетях')}
            </Text>
            <Columns number='3'>
                {socials.map(el => (
                    <div key={el.text}>
                        <a href='/public'>
                            <Card
                                borderRadius='extra-large'
                                padding='medium'
                                align='center'
                            >
                                <Icon widthAndHeight={56} icon={el.icon} />
                                <Text weight='medium'>{t(el.text)}</Text>
                            </Card>
                        </a>
                    </div>
                ))}
            </Columns>
        </div>
    );
};
