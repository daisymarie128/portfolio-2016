import React from 'react';
import {Link} from 'react-router';
import './index.scss';

const Skills = React.createClass({ 

	getInitialState() {
	    return {
	        skills: null,
	        currentSkills: null  
	    };
	},

	componentDidMount() {

	},
	render() {
		const skills = this.state.skills || []
		return <div>
			<div>{this.props.children}</div>
		</div>
	}
})

export default Skills;