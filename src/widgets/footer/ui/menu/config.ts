import { RouteName } from 'src/shared/model';
import {
    EXCHANGE_RATES,
    DOCUMENTS,
    CONTACTS,
    QANDA,
    SERVICE_LIST,
    BANKS_AND_BRANCHES
} from 'src/shared/model/shared';
export const links = [
    { text: BANKS_AND_BRANCHES, href: RouteName.ATMS_AND_BRANCHES },
    { text: EXCHANGE_RATES, href: RouteName.MAIN_PAGE },
    { text: CONTACTS, href: RouteName.CONTACTS_PAGE },
    { text: SERVICE_LIST, href: RouteName.MAIN_PAGE },
    { text: DOCUMENTS, href: RouteName.MAIN_PAGE },
    { text: QANDA, href: RouteName.MAIN_PAGE }
];
