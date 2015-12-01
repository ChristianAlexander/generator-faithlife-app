import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './pages/app/index';
import { Home } from './pages/home/index';

export const routes = (
	<Route component={App} path="/">
		<IndexRoute component={Home} />
	</Route>
);
