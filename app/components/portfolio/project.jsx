import React from 'react';
import {Link} from 'react-router';
import './index.scss';

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
  },

  render() {
  	var currentProject = this.state.currentProjects || [];
    var images = currentProject.image || [];
    var tags = currentProject.tagList || [];
    return (
      <div>
        <div className="main-info">
            <Link to='/portfolio' className="back">Back</Link><br/>
            <h2>{currentProject.title}</h2><br/>
            <h2>{currentProject.date}</h2><br/>
            <h2><a href={currentProject.projectLink} target="_blank">{currentProject.projectLink}</a></h2>
          <div className="content-section">
            <p>{currentProject.content}</p>
            <div className="small-details">
              <p>Built with: </p>
              {tags.map(function(result) {
               return <p>{result} <br/> </p>
              })}
            </div>
          </div>

          <div className="content-section">
            {images.map(function(result) {
              return <img src={result} />;
                      
            })}
          </div>
        </div>
      </div>
    )
  }
})

export default Project;