import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from 'src/shared/ui';
import { useGetCustomerCardDetailsQuery } from 'src/shared/api';
import { useAuth } from 'src/entities/user';
import { CardInfo } from 'src/widgets/card-info';

export const CardPage = () => {
    const { signedOut } = useAuth();
    const { id } = useParams();
    const {
        data: cardDetails,
        isLoading,
        error
    } = useGetCustomerCardDetailsQuery({
        id: 'cdaeb5ef-f132-4042-98c3-364020463e6a'
    });
    useEffect(() => {
        if (error) {
            return signedOut();
        }
    }, [error, signedOut]);

    return (
        <Container>
            <CardInfo card={cardDetails} isLoading={isLoading} />
        </Container>
    );
};
