import React from 'react';
import { Menu } from 'src/features/menu';
import { DEPOSITS_OFFERED, DEPOSITS, TO_DEPOSIT_LIST } from 'src/shared/model';
import { CUSTOMER_DEPOSITS } from 'src/shared/model';

import { BackButton } from 'src/features/multi-step-form';
import { DepositProducts } from 'src/widgets/deposits/ui/deposit-products';
import { Container } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';
import { MessageCard } from 'src/entities/message';

import { DepositInfo } from './deposit-info';

export const DepositPage = () => {
    return (
        <Container>
            <BackButton />
            (
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
            ) : (
            <MessageCard
                title='Счет не найден'
                buttonText={TO_DEPOSIT_LIST}
                buttonLink={RouteName.MAIN_PAGE + '/' + DEPOSITS}
            />
            )
        </Container>
    );
};
