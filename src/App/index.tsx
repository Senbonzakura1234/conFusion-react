import { type FC } from 'react';
import { useServiceWorker } from '@hooks/useServiceWorker';
import AppRouter from './Router';

const App: FC = () => {
	useServiceWorker();

	return <AppRouter />;
};

export default App;
