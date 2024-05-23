import { useParams } from 'react-router-dom';

import { useGetCardProductDetailsQuery } from 'src/shared/api';
import { Container } from 'src/shared/ui';
import { CardInfo } from 'src/widgets/card-info';

export const CardProductPage = () => {
    const { id } = useParams();
    const { data: cardProductDetails, isLoading } =
        useGetCardProductDetailsQuery({
            id: id ?? ''
        });

    return (
        <Container>
            <CardInfo card={cardProductDetails} isLoading={isLoading} />
        </Container>
    );
};
