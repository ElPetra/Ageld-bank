import { Button, Card, Text } from 'src/shared/ui';
import './styles.scss';
import { useTranslation } from 'react-i18next';

interface Props {
    title: string;
    content: string;
    button: string;
}

export const GalleryCard = ({ title = 'Новинка!', content, button }: Props) => {
    const { t } = useTranslation();
    return (
        <Card
            className='gallery_card'
            justify='space-between'
            direction='column'
            gap='small'
            borderRadius='large'
            padding='medium'
        >
            <Text size='m' weight='bold' align='center'>
                {t(title)}
            </Text>
            <Text size='m'>{t(content)}</Text>
            <Button variant='secondary' size='medium' width='max'>
                {t(button)}
            </Button>
        </Card>
    );
};
