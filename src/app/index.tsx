import { AppRouter } from './router/app-router';
import { withProviders } from './providers/with-providers';
import './styles/reset.scss';
import './styles/index.scss';

const App = () => {
    return <AppRouter />;
};

export default withProviders(App);
