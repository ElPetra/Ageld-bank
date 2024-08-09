import { useEffect } from 'react';

import { Container } from 'src/shared/ui';
import { useGetCustomerCardDetailsQuery } from 'src/shared/api';
import { isErrorStatusUnauthorized } from 'src/shared/lib';
import { useAuth } from 'src/entities/user';
import { CardInfo } from 'src/widgets/card-info';
import { useParams } from 'react-router-dom';

export const CardPage = () => {
    const { signedOut } = useAuth();
    const { id } = useParams();
    const {
        data: cardDetails,
        isLoading,
        error
    } = useGetCustomerCardDetailsQuery({
        id: id || ''
    });
    useEffect(() => {
        if (isErrorStatusUnauthorized(error)) {
            return signedOut();
        }
    }, [error, signedOut]);

    return (
        <Container>
            <CardInfo card={cardDetails} isLoading={isLoading} />
        </Container>
    );
};
