import { useTranslation } from 'react-i18next';

import { Button, Card, Overlay, Text } from 'src/shared/ui';

import { type Dispatch, type SetStateAction, useState } from 'react';

import './styles.scss';

interface Props {
    city: string;
    setChangeVisible: Dispatch<SetStateAction<boolean>>;
}

export function MapCityQuestionModal({ city, setChangeVisible }: Props) {
    const { t } = useTranslation();
    const [visible, setVisible] = useState<boolean>(true);
    return (
        <Overlay visible={visible}>
            <div className='map-city-question-modal'>
                <Card
                    color='secondary'
                    direction='column'
                    borderRadius='extra-large'
                    padding='small-medium'
                >
                    <Text weight='bold' size='m'>
                        {t('Ваш город —')}&nbsp;
                        {t(city)}
                        {'?'}
                    </Text>
                    <div className='map-city-question-modal__buttons'>
                        <Button
                            type='submit'
                            width='max'
                            variant='secondary'
                            onClick={() => setVisible(false)}
                        >
                            {t('Все верно')}
                        </Button>
                        <Button
                            type='button'
                            width='max'
                            onClick={() => {
                                setVisible(false);
                                setChangeVisible(true);
                            }}
                        >
                            {t('Нет, изменить')}
                        </Button>
                    </div>
                </Card>
            </div>
        </Overlay>
    );
}
