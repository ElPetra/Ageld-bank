import React from 'react';
import { Menu } from 'src/features/menu';
import { DEPOSITS_OFFERED } from 'src/shared/model';
import { CUSTOMER_DEPOSITS } from 'src/shared/model';

import { BackButton } from 'src/features/multi-step-form';
import { DepositProducts } from 'src/widgets/deposits/ui/deposit-products';
import { Container } from 'src/shared/ui';

import { DepositInfo } from './deposit-info';

export const DepositPage = () => {
    return (
        <Container>
            <BackButton />

            <Menu
                variant='secondary'
                elements={[
                    {
                        id: 1,
                        name: CUSTOMER_DEPOSITS,
                        component: <DepositInfo />
                    },
                    {
                        id: 2,
                        name: DEPOSITS_OFFERED,
                        component: <DepositProducts />
                    }
                ]}
            />
        </Container>
    );
};
