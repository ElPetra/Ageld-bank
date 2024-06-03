import { AppRouter } from './router';
import { withProviders, I18nProvider } from './providers';

import './styles/reset.scss';
import './styles/index.scss';

function App() {
    return (
        <I18nProvider>
            <AppRouter />
        </I18nProvider>
    );
}

export default withProviders(App);
