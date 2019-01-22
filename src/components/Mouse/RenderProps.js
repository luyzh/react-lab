import React, { Component } from 'react';

class MousePosition extends Component {
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
		return this.props.children(this.state);
	}
}

export default class MouseRender extends Component {
	render() {
		return (
			<MousePosition>
				{({ x, y }) => (
					<span>
						renderProps Mouse(X, Y): {x}, {y}
					</span>
				)}
			</MousePosition>
		);
	}
}
