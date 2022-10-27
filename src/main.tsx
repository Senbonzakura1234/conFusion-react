import '@styles/globals.css';
import App from 'src/App';
import { CUSTOM_PROPERTIES } from '@data/configs';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const mainElement = document.getElementById('main');

CUSTOM_PROPERTIES.forEach(prop => {
	try {
		CSS.registerProperty(prop);
	} catch (error) {
		console.log(error);
	}
});

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(mainElement!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
