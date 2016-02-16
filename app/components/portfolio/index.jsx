import React from 'react';
import {Link} from 'react-router';
import './index.scss';

const Portfolio = React.createClass({ 

	getInitialState() {
	    return {
	        projects: null,
	        currentPortfolio: null  
	    };
	},

	componentDidMount() {

	},
	render() {
		return <div>
			<h1>PORTFOLIO</h1>
			<div>{this.props.children}</div>
		</div>
	}
})

export default Portfolio;