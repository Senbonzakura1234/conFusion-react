import { type FC } from 'react';
import type { RouteItem } from '@typescript/common';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from 'src/App/Router/pages/Home';
import Layout from './Layout';
import Error from '@components/Error';

const APP_ROUTES: RouteItem[] = [
	{
		path: '/',
		Element: Home,
	},
];

const browserRouter = createBrowserRouter(
	APP_ROUTES.map(({ Element, path }) => ({
		path,
		element: (
			<Layout>
				<Element />
			</Layout>
		),
		errorElement: <Error />,
	})),
);

const Router: FC = () => {
	return <RouterProvider router={browserRouter}></RouterProvider>;
};

export default Router;
