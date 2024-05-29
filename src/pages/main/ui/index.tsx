import { Container } from 'src/shared/ui';
import {
    MAIN_TITLE,
    CARDS_TITLE,
    ACCOUNTS_TITLE,
    DEPOSITS_TITLE,
    TRANSFERS_TITLE,
    PAYMENTS_TITLE,
    LOANS_TITLE,
    MainRouteName
} from 'src/shared/model';
import { Menu } from 'src/features/menu';
import { MainMenu } from 'src/widgets/main-menu';
import { Accounts } from 'src/widgets/accounts';
import { Cards } from 'src/widgets/cards';
import { Deposits } from 'src/widgets/deposits';

import { useTranslation } from 'react-i18next';

import { ProtectedMain } from './protected';

export const MainPage = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <Menu
                routes={MainRouteName}
                elements={[
                    {
                        id: 1,
                        name: t(MAIN_TITLE),
                        component: (
                            <ProtectedMain>
                                <MainMenu />
                            </ProtectedMain>
                        )
                    },
                    {
                        id: 2,
                        name: t(CARDS_TITLE),
                        component: <Cards />
                    },
                    {
                        id: 3,
                        name: t(ACCOUNTS_TITLE),
                        component: (
                            <ProtectedMain>
                                <Accounts />
                            </ProtectedMain>
                        )
                    },
                    {
                        id: 4,
                        name: t(TRANSFERS_TITLE),
                        component: <div>{t(TRANSFERS_TITLE)}</div>
                    },
                    {
                        id: 5,
                        name: t(PAYMENTS_TITLE),
                        component: <div>{t(PAYMENTS_TITLE)}</div>
                    },
                    {
                        id: 6,
                        name: t(LOANS_TITLE),
                        component: <div>{t(LOANS_TITLE)}</div>
                    },
                    {
                        id: 7,
                        name: t(DEPOSITS_TITLE),
                        component: <Deposits />
                    }
                ]}
            />
        </Container>
    );
};
