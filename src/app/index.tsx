import { AppRouter } from './router';
import { withProviders, LanguageProvider } from './providers';

import './styles/reset.scss';
import './styles/index.scss';

function App() {
    return (
        <LanguageProvider>
            <AppRouter />
        </LanguageProvider>
    );
}

export default withProviders(App);
