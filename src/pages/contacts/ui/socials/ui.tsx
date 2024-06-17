import { Card, Columns, Icon, Text } from 'src/shared/ui';

import { socials } from '../../model';

export const Socials = () => {
    return (
        <div>
            <Text weight='bold' size='m'>
                {'Чат-боты в социальных сетях'}
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
                                <Text weight='medium'>{el.text}</Text>
                            </Card>
                        </a>
                    </div>
                ))}
            </Columns>
        </div>
    );
};
