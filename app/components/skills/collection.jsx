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

		// hange the side quote depending on the page
    // i am so annoyed at react
    var sideQuote = document.getElementsByClassName('side-quote-text')[0];
    sideQuote.innerHTML = "collection of things i do when my friends don't want to hang out with me";

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