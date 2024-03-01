import { AppRouter } from './router';
import { withProviders } from './providers';

import './styles/reset.scss';
import './styles/index.scss';

function App() {
    return <AppRouter />;
}

export default withProviders(App);
