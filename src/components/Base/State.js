import React from 'react';

export default class State extends React.Component {
	constructor() {
		super();
		this.state = {
			val: 0
		};
	}

	scene1 = () => {
		// render one time
		this.setState({ val: 1 });
		console.log(this.state.val); // log 0
		this.setState({ val: 2 });
		console.log(this.state.val); // log 0
		this.setState({ val: 3 });
		console.log(this.state.val); // log 0
		this.setState({ val: this.state.val + 66 });
		console.log(this.state.val); // log 0, actually, the val will be equalled to 66
	};

	scene2 = () => {
		// render one time
		this.setState({ val: this.state.val + 1 });
		console.log(this.state.val); // log 0
		this.setState({ val: this.state.val + 1 });
		console.log(this.state.val); // log 0, actually, the val will be equalled to 1
	};

	scene3 = () => {
		// render two times
		setTimeout(() => {
			this.setState({ val: this.state.val + 1 });
			console.log(this.state.val); // log 1
			this.setState({ val: this.state.val + 1 });
			console.log(this.state.val); // log 2, actually, the val will be equalled to 2
		}, 0);
	};

	scene4 = () => {
		// render one time
		this.setState(prevState => {
			return { val: 100 };
		});
		console.log(this.state.val); // log 0
		this.setState(prevState => {
			return { val: prevState.val + 1 };
		});
		console.log(this.state.val); // log 0
		this.setState(prevState => {
			return { val: prevState.val + 2 };
		});
		console.log(this.state.val); // log 0, actually, the val will be equalled to 103
	};

	componentDidMount() {
		this.scene2();
	}

	render() {
		console.log('State render: ', this.state.val);
		return 'My React App!';
	}
}
