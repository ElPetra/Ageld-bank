import { AppRouter } from './router';
import { withProviders, LanguageProvider, I18nProvider } from './providers';

import './styles/reset.scss';
import './styles/index.scss';

function App() {
    return (
        <I18nProvider>
            <LanguageProvider>
                <AppRouter />
            </LanguageProvider>
        </I18nProvider>
    );
}

export default withProviders(App);
