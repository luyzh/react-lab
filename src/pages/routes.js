import { State, Relation } from '../components/Base';
import Mouse from '../components/Mouse';
import Stock from '../components/Stock';

import Zone from './Zone';
import NotFound from './404';

const routes = [
	{
		path: '/',
		exact: true,
		component: Zone
	},
	{
		path: '/state',
		component: State
	},
	{
		path: '/relation',
		component: Relation
	},
	{
		path: '/mouse',
		component: Mouse
	},
	{
		path: '/stock',
		component: Stock
	},
	{
		component: NotFound
	}
];

export { routes };
