import React from 'react';
import {Link} from 'react-router';
import './index.scss';

	var divStyle;
const Skills = React.createClass({ 
	getInitialState() {
	    return {
	        skills: null,
	        currentSkills: null,
	        divStyle: {
	        	backgroundImage: ''
	        } 
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

	render() {
		var skills = this.state.skills || []
    divStyle = {
      backgroundImage: ''
    }
		return <div>
			<p className="skills-header">Differen things Ive experimented with</p>
			<div className="skills-grid">
				{skills.map(function(skill) {
					divStyle.backgroundImage = "url('" + skill.featureImage + "')";
					return <Link to={`/skills/${skill.id}`}>
					 <div className="skill-item" style={divStyle} key={skill.id} >
							<h3>0{skill.id}</h3>
						</div>
					</Link>
				})}
			</div>	
			<div>{this.props.children}</div>
		</div>
	}
})

export default Skills;