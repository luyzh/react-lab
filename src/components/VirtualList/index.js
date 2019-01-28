import React, { Component } from 'react';

import './index.less';

// https://fusion.design/component/virtual-list
// https://zhuanlan.zhihu.com/p/34585166
export default class VirtualList extends Component {
	constructor() {
		super();
		// [from, size)
		this.state = { from: 0, size: 100, data: [] };
	}

	componentDidMount() {
		this.fetchData();
		this.scrollParent.addEventListener('scroll', this.handleScroll, {
			passive: true
		});
	}

	componentWillUnmount() {
		this.scrollParent.removeEventListener('scroll', this.handleScroll);
	}

	fetchData() {
		const data = [];
		for (let i = 0; i < 100; i++) {
			data.push({ value: i });
		}
		this.setState({ data });
	}

	getRef = node => {
		// console.log(this); // VirtualList
		this.scrollParent = node;
	};

	handleScroll = () => {
		// console.log(this); // scrollParent dom
		const { start, end } = this.getStartAndEnd();
		const { data } = this.state;
		const length = data.length;
		let space = 0;
		let from = 0;
		let size = 0;

		const maxFrom = length - 1;
		while (from < maxFrom) {
			const itemSize = 30; // 固定高度
			if (space + itemSize > start) {
				break;
			}
			space += itemSize;
			++from;
		}

		const maxSize = length - from;
		while (size < maxSize && space < end) {
			const itemSize = 30; // 固定高度
			space += itemSize;
			++size;
		}

		this.setState({ from, size });
	};

	getStartAndEnd(threshold = 60) {
		// 缓冲区
		const scroll = this.getScroll();

		const trueScroll = scroll;
		const start = Math.max(0, trueScroll - threshold);
		const end = trueScroll + this.getViewportSize() + threshold;

		return { start, end };
	}

	getScroll() {
		const { scrollParent } = this;
		const scrollKey = 'scrollTop';
		const actual =
			scrollParent === window
				? document.body[scrollKey] || document.documentElement[scrollKey]
				: scrollParent[scrollKey];

		return actual;
	}

	getViewportSize() {
		const { scrollParent } = this;
		return scrollParent === window ? window.innerHeight : scrollParent.clientHeight;
	}

	getSpaceBefore(index, cache = {}) {
		if (!index) {
			return 0;
		}

		let from = index;
		while (from > 0 && (cache[from] === null || cache[from] === undefined)) {
			from--;
		}

		let space = cache[from] || 0;
		for (let i = from; i < index; ++i) {
			cache[i] = space;
			const itemSize = 30;
			space += itemSize;
		}
		// console.log('cache', cache);

		cache[index] = space;

		return cache[index] || 0;
	}

	renderItems() {
		const { from, size, data } = this.state;
		const items = [];
		if (!data.length) return;
		for (let i = 0; i < size; ++i) {
			items.push(data[from + i]);
		}

		return items.map((item, idx) => {
			return (
				<div key={item.value} className="list-view-item">
					item.value: {item.value} index: {idx}
				</div>
			);
		});
	}

	render() {
		const { from } = this.state;
		const offset = this.getSpaceBefore(from);
		const transform = `translate(0px, ${offset}px)`;
		const listStyle = {
			msTransform: transform,
			WebkitTransform: transform,
			transform
		};
		const items = this.renderItems();

		return (
			<div className="list-view" ref={this.getRef}>
				<div className="list-view-content" style={listStyle}>
					{items}
				</div>
			</div>
		);
	}
}
