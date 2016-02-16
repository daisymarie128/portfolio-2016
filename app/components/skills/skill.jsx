import React from 'react';
import {Link} from 'react-router';

const Skill = React.createClass({

	getInitialState() {
	    return {
	        skills: null,
	        currentSkills: null,
	        skillId: null
	    };
	},


  componentDidMount() {

    var _this = this;
    var current;
    var index = this.props.params.skillId;
    index = parseInt(index);
    _this.setState({skillId: index});
    var test = 3
    d3.json('../data/skills.json', function(d){
      _this.setState({skills: d});
      
      const skills = _this.state.skills || []
      var hello = _this.state.skillId - 1
      current = skills[hello]
      _this.setState({
        currentSkills: current
      });
    });
  },

  render() {
  	var currentSkill = this.state.currentSkills || [];
    console.log(currentSkill);
    return (
      <div>
        <h2>{currentSkill.title}</h2>
        <h2>{currentSkill.id}</h2>
        <h2>{currentSkill.date}</h2>
      </div>
    )
  }
})

export default Skill;