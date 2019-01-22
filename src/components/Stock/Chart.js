import React from 'react';

import Modal from './Modal';

export default function Chart({ stock, onClose }) {
	const { width, height } = getDimentions();

	return (
		<Modal onClose={onClose}>
			<div style={{ height: height, width: width }}>
				<div style={{ marginTop: 48, display: 'flex', justifyContent: 'space-around' }}>
					<span>{stock.name}</span>
					<span>{stock.today}</span>
					<span style={{ color: stock.change < 0 ? 'darkred' : 'darkgreen' }}>
						{stock.change < 0 ? stock.change : '+' + stock.change}%
					</span>
				</div>
			</div>
		</Modal>
	);
}

function getDimentions() {
	const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	const maxWidth = 600;
	const mobileViewportWidth = 500;
	let width = viewportWidth;
	width *= viewportWidth > mobileViewportWidth ? 0.9 : 1;
	width = Math.round(Math.min(width, maxWidth));

	const maxHeight = viewportHeight * 0.95;
	let height = width / 1.62;
	height = Math.round(Math.min(height, maxHeight));

	return { width, height };
}
