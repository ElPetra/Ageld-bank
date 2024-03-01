import { withProviders } from './providers';
import { AppRouter } from './router';

import './styles/reset.scss';
import './styles/index.scss';

const App = () => {
    return (
        <AppRouter />
    );
};

export default withProviders(App);