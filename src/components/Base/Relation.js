import React, { Component } from 'react';
import './index.less';

class Child extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: this.props.text + '~'
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			text: nextProps.text + '~'
		});
	}

	handleClick = () => {
		this.setState({
			text: 'clicked'
		});

		//Child state change, Parent no render
		//trigger Parent state change, Parent and Child will be rerender
		this.props.onClick();
	};

	render() {
		console.log('child render');

		return (
			<div className="child">
				this is child!
				<p>something from parent: {this.state.text}</p>
				<button onClick={this.handleClick}>click me</button>
			</div>
		);
	}
}

export default class Parent extends Component {
	constructor() {
		super();
		this.state = {
			text: 'default'
		};
	}

	handleChildClick = () => {
		this.setState({
			text: Math.random() * 1000
		});
	};

	render() {
		console.log('parent render');
		return (
			<div className="parent">
				this is parent!
				<Child text={this.state.text} onClick={this.handleChildClick} />
			</div>
		);
	}
}
