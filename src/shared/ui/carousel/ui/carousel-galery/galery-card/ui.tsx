import { Button, Card, Text } from 'src/shared/ui';
import './styles.scss';
import { type ReactNode } from 'react';

interface Props {
    title: string;
    content: string | ReactNode;
    button: string;
}

export const GalleryCard = ({ title = 'Новинка!', content, button }: Props) => {
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
                {title}
            </Text>
            <Text size='m'>{content}</Text>
            <Button variant='secondary' size='medium' width='max'>
                {button}
            </Button>
        </Card>
    );
};
