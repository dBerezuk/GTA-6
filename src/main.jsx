import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainProvider } from '@/providers/MainProvider.jsx';
import { pagesRoute } from './config/pages-route.config.jsx';

import '@/assets/styles/global.scss';

const router = createBrowserRouter(pagesRoute);

ReactDOM.createRoot(document.getElementById('root')).render(
	<MainProvider>
		<RouterProvider router={router} />
	</MainProvider>
);