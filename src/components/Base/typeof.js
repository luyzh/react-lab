import React, { Component } from 'react';

// https://overreacted.io/why-do-react-elements-have-typeof-property/
// http://tech.colla.me/zh/show/why_react_tags_element_with_$$typeof
export default class Typeof extends Component {
	constructor() {
		super();
		this.state = {
			view: null
		};
	}

	componentDidMount() {
		// 1.
		const view = <button className="btn">click me</button>;
		// 2. 手动添加 $$typeof, 绕过react
		// const view = JSON.parse(JSON.stringify(<button className="a-button">click me </button>));
		// view.$$typeof = Symbol.for('react.element');
		console.log('componentDidMount', view);
		this.setState({
			view
		});
	}

	fakeInput() {
		const expectedTextButGotJSON = {
			$$typeof: Symbol.for('react.element'), // a fake react.element
			key: null,
			ref: null,
			type: 'div',
			props: {
				className: 'fake',
				dangerouslySetInnerHTML: {
					__html: `<script type="text/javascript">console.log(1);alert('hey')</script>`
				}
			}
		};
		const message = { text: expectedTextButGotJSON };

		Object.prototype.toString = () => '...';
		console.log('object', message.text);
		console.log('toString', message.text.toString());
		console.log('JSON.stringify', JSON.stringify(message.text)); // JSON.stringify会忽略掉不能stringify的数据格式,包括Symbol, undefined, Function

		return message.text;
	}

	render() {
		return (
			<div>
				{this.state.view}
				{this.fakeInput()}
			</div>
		);
	}
}
