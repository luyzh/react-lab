import React, { Component } from 'react';

export default class MouseRender extends Component {
	state = { x: 0, y: 0 };

	componentDidMount() {
		window.addEventListener('mousemove', this.onMouseMove);
	}

	componentWillUnmount() {
		window.removeEventListener('mousemove', this.onMouseMove);
	}

	onMouseMove = e => {
		this.setState({ x: e.clientX, y: e.clientY });
	};

	render() {
		const { x, y } = this.state;
		return (
			<span>
				Comp Mouse(X, Y): {x}, {y}
			</span>
		);
	}
}
