import { Button, Icon, Text } from 'src/shared/ui';

import './styles.scss';

interface Props {
    text: string;
    buttonText: string;
}

export const ProductNotFound = ({ text, buttonText }: Props) => {
    return (
        <div className='product__not-found'>
            <Text align='center'>{text}</Text>
            <Icon width={172} height={216} icon='question-lady' />
            <Button variant='secondary'>{buttonText}</Button>
        </div>
    );
};
