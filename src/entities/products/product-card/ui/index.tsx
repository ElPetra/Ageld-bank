import { Text, Icon } from 'src/shared/ui';

import type { Product } from 'src/shared/model';

import './styles.scss';

interface Props {
    product: Product;
}

export const ProductCard = ({ product }: Props) => {
    return (
        <div className='product-card'>
            <div className='product-card__first-row'>
                <Icon widthAndHeight={40} icon={product.currencyName} />
                <div className='product-card__info'>
                    <Text size='m' weight='medium'>
                        {product.balance}
                    </Text>
                    <Text size='xs'>{product.nameProduct}</Text>
                </div>
            </div>
            <div className='product-card__second-row'>
                <Text size='s'>
                    {product.cardNumber.substring(12, 16) +
                        ' ' +
                        product.paymentSystem}
                </Text>
                <Text size='xs'>
                    {product.expirationAt.split('-')[1] +
                        '/' +
                        product.expirationAt.split('-')[0].substring(2, 4)}
                </Text>
            </div>
        </div>
    );
};
