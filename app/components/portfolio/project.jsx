import React from 'react';
import {Link} from 'react-router';

const Project = React.createClass({

	getInitialState() {
	    return {
	        projects: null,
	        currentProjects: null,
	        projectId: null
	    };
	},


  componentDidMount() {

    var _this = this;
    var current;
    var index = this.props.params.projectId;
    index = parseInt(index);
    _this.setState({projectId: index});
    d3.json('../data/projects.json', function(d){
      _this.setState({projects: d});
      
      const projects = _this.state.projects || []
      var hello = _this.state.projectId - 1
      current = projects[hello]
      _this.setState({
        currentProjects: current
      });
    });
    console.log('in the portfolio')
  },

  render() {
  	var currentProject = this.state.currentProjects || [];
    console.log(currentProject);
    return (
      <div>
        <h2>{currentProject.title}</h2>
        <h2>{currentProject.id}</h2>
        <h2>{currentProject.date}</h2>
      </div>
    )
  }
})

export default Project;