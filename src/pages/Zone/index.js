import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

const cards = [
	{
		path: '/',
		name: 'Home'
	},
	{
		path: '/state',
		name: 'State'
	},
	{
		path: '/relation',
		name: 'Relation'
	},
	{
		path: '/typeof',
		name: 'Typeof'
	},
	{
		path: '/mouse',
		name: 'Mouse'
	},
	{
		path: '/stock',
		name: 'Stock'
	}
];

const Card = () => {
	return (
		<div className="cards-container">
			{cards.map((card, i) => (
				<div className="card-item" key={i}>
					<Link to={card.path}>{card.name}</Link>
				</div>
			))}
		</div>
	);
};

export default Card;
