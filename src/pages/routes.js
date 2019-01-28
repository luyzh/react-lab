import { State, Relation, Typeof } from '../components/Base';
import Mouse from '../components/Mouse';
import Stock from '../components/Stock';
import VirtualList from '../components/VirtualList';

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
		path: '/typeof',
		component: Typeof
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
		path: '/virtualList',
		component: VirtualList
	},
	{
		component: NotFound
	}
];

export { routes };
