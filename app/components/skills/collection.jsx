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

		var _this = this;
	  d3.json('../data/skills.json', function(d){
	    _this.setState({skills: d});
	    
	  });
	},

	handleClick(event){
		// console.log('hello', event)
		this.setState({currentSkill: event});
	}, 
	render() {
		var skills = this.state.skills || []
		console.log('skills', skills)
		return <div>
			<h1>skills</h1>
			<div className="skills-grid">
				{skills.map(skill => 
					<Link to={`/skills/${skill.id}`}>
						<div className="skill-item" key={skill.id}>
							<h3>0{skill.id} —</h3>
						</div>
					</Link>
				)}
			</div>	
			<div>{this.props.children}</div>
		</div>
	}
})

export default Skills;