import { useParams } from 'react-router-dom';

import { Container, Preloader } from 'src/shared/ui';
import { useGetDepositProductQuery } from 'src/shared/api';

import { CreateDepositForm } from './create-deposit-form';

export const DepositCreationPage = () => {
    const { id } = useParams();
    const { data: deposit, isLoading } = useGetDepositProductQuery({
        id: id || ''
    });

    return (
        <Container>
            {isLoading ? (
                <Preloader />
            ) : (
                <>{deposit && <CreateDepositForm deposit={deposit} />}</>
            )}
        </Container>
    );
};
