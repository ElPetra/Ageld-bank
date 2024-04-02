import { Icon, Text } from 'src/shared/ui';

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
                <div className={`product-card__preview ${product.level}`}>
                    <div className='product-card__number'>
                        {product.cardNumber.substring(12, 16)}
                    </div>
                    <div className='product-card__payment-system'>
                        {product.paymentSystem}
                    </div>
                </div>
                <Text size='xs'>
                    {product.expirationAt.split('-')[1] +
                        '/' +
                        product.expirationAt.split('-')[0].substring(2, 4)}
                </Text>
            </div>
        </div>
    );
};
