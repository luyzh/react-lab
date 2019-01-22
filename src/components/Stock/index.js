import React, { Component } from 'react';

import StockTable from './Table';
const StockChart = React.lazy(() => import(/* webpackChunkName: 'StockChart' */ './Chart'));

import fakeData from './data';

class Stock extends Component {
	state = {
		selectedStock: null
	};
	render() {
		const { stocks } = this.props;
		const { selectedStock } = this.state;
		return (
			<React.Suspense fallback={<div>Loading...</div>}>
				<StockTable stocks={stocks} onSelect={selectedStock => this.setState({ selectedStock })} />
				{selectedStock && <StockChart stock={selectedStock} onClose={() => this.setState({ selectedStock: false })} />}
				{/* Preload <StockChart/> */}
				<React.Suspense fallback={null}>
					<div hidden={true}>
						<StockChart stock={stocks[0]} />
					</div>
				</React.Suspense>
			</React.Suspense>
		);
	}
}

const StockApp = () => <Stock stocks={fakeData()} />;

export default StockApp;
