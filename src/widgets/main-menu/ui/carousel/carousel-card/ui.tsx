import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button, Card, Text } from 'src/shared/ui';

interface Props {
    title: string;
    content: string;
    button: string;
}

export const MainCarouselCard = ({
    title = 'Новинка!',
    content,
    button
}: Props) => {
    const { t } = useTranslation();
    return (
        <Card
            justify='space-between'
            direction='column'
            gap='small'
            borderRadius='large'
            padding='medium'
        >
            <Text size='m' weight='bold'>
                {t(title)}
            </Text>
            <Text size='m'>{t(content)}</Text>
            <Link to={'/'}>
                <Button variant='secondary' size='medium' width='max'>
                    {t(button)}
                </Button>
            </Link>
        </Card>
    );
};
