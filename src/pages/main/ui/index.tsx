import { Container } from 'src/shared/ui';
import { MainRouteName } from 'src/shared/model';
import { Menu } from 'src/features/menu';
import { MainMenu } from 'src/widgets/main-menu';
import { Accounts } from 'src/widgets/accounts';
import {
    MAIN,
    CARDS_TITLE,
    ACCOUNTS_TITLE,
    DEPOSITS_TITLE,
    TRANSFERS_TITLE,
    PAYMENTS_TITLE,
    LOANS_TITLE
} from 'src/shared/model';
import { Cards } from 'src/widgets/cards';
import { Deposits } from 'src/widgets/deposits';

import { ProtectedMain } from './protected';

export const MainPage = () => {
    return (
        <Container>
            <Menu
                routes={MainRouteName}
                elements={[
                    {
                        id: 1,
                        name: MAIN,
                        component: (
                            <ProtectedMain>
                                <MainMenu />
                            </ProtectedMain>
                        )
                    },
                    {
                        id: 2,
                        name: CARDS_TITLE,
                        component: <Cards />
                    },
                    {
                        id: 3,
                        name: ACCOUNTS_TITLE,
                        component: (
                            <ProtectedMain>
                                <Accounts />
                            </ProtectedMain>
                        )
                    },
                    {
                        id: 4,
                        name: TRANSFERS_TITLE,
                        component: <div>{TRANSFERS_TITLE}</div>
                    },
                    {
                        id: 5,
                        name: PAYMENTS_TITLE,
                        component: <div>{PAYMENTS_TITLE}</div>
                    },
                    {
                        id: 6,
                        name: LOANS_TITLE,
                        component: <div>{LOANS_TITLE}</div>
                    },
                    {
                        id: 7,
                        name: DEPOSITS_TITLE,
                        component: <Deposits />
                    }
                ]}
            />
        </Container>
    );
};
