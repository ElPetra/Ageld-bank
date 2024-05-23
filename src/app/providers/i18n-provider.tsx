import { I18nextProvider } from 'react-i18next';

import i18n from 'src/shared/model/i18n';

import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const I18nProvider = ({ children }: Props) => (
    <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);
