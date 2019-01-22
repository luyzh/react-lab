import React, { Component } from 'react';

const withMousePosition = ComponentToWrap => {
	return class MousePositionHOC extends Component {
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
			<ComponentToWrap {...this.state} />;
		}
	};
};

class MouseRender extends Component {
	render() {
		const { x, y } = this.props;

		return (
			<span>
				HOC Mouse(X, Y): {x}, {y}
			</span>
		);
	}
}

const EnhanceMouseRender = withMousePosition(MouseRender);

export default EnhanceMouseRender;
