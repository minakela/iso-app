import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_en from './translations/en/common.json';

i18next.init({
	interpolation: { escapeValue: false },
	lng: 'en',
	resources: {
		en: {
			common: common_en,
		},
	},
});
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<I18nextProvider i18n={i18next}>
		<BrowserRouter basename="">
			<App />
		</BrowserRouter>
	</I18nextProvider>
);
